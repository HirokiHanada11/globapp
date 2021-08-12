<template>
    <app-layout>
        <template #header>
            <img :src="currentRoom.photo" class="grid-col-1 h-12 w-12 mx-4 float-left" style="border-radius: 50%"/>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight p-3">
                <b>{{currentRoom.name}}</b> -- {{currentRoom.description}} 
            <button v-if='!showActive' @click="toggleShowActive" class="float-right place-self-end bg-blue-500 hover:bg-gray-500 py-1 px-2 mt-1  rounded text-white text-sm">
                Show Active Users
            </button>
            <button v-if='showActive' @click="toggleShowActive" class="float-right place-self-end bg-blue-500 hover:bg-gray-500 py-1 px-2 mt-1 rounded text-white text-sm">
                Hide Active Users
            </button>
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 relative" style="height:70vh">               
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg h-full w-full relative">
                    <div class="h-full w-1/4 absolute top-0 right-0 flex flex-col">
                        <message-container v-show="showMessages" :messages="messages" v-on:resend="resendMessage"/>
                        <div class="h-full w-1/12 absolute top-0 right-0 bg-gray-300 opacity-5 hover:opacity-50" @click="toggleMessage"></div>               
                    </div> 
                    <div class="h-1/2 w-1/4 absolute top-0 right-1/4">
                        <active-users-container v-show="showActive" :activeUsers="activeUsers"/>
                    </div>
                    <div class="h-full w-1/4 absolute top-0 left-0">
                        <news-container 
                            v-show="showNews" 
                            :news="news" 
                            :roomId="currentRoom.id" 
                            v-on:sending="appendNewMessage"
                            v-on:messagefailed="messageFailedToSend"
                        />
                        <div class="h-full w-1/12 absolute top-0 left-0 bg-gray-300 opacity-5 hover:opacity-50" @click="toggleNews"></div>
                    </div>
                    <div class="bg-transparent absolute top-0 w-full flex justify-center ">
                        <input 
                            v-if="!camera"
                            type="text"
                            v-model="topic"
                            @keyup.enter="fetchNews(topic)"
                            placeholder="Search News by keyword"
                            class="bg-blue-900 border border-transparent focus:outline-none focus:border-none rounded-full text-white"
                        />
                        <button
                            v-if="!camera"
                            @click="fetchNews(currentRoom.topic)"
                            class="bg-blue-900 border border-transparent hover:outline-2 hover:border-none rounded-full text-white p-2">
                            Fetch News On Room Topic
                        </button>
                        <button
                            v-if="camera"
                            @click="setBackCamera()"
                            class="bg-blue-900 border border-transparent hover:outline-2 hover:border-none rounded-full text-white p-2">
                            Fetch News
                        </button>
                    </div> 
                    <div class="bg-transparent absolute bottom-0 w-full flex justify-center ">
                        <button
                            v-if="!camera"
                            @click="setBackCamera()"
                            class="bg-blue-900 border border-transparent hover:outline-2 hover:border-none rounded-full text-white p-2">
                            Back To Chat
                        </button>
                    </div> 
                    <chat-three-container :messages="messages" :room="currentRoom" :activeUsers="activeUsers" :news="news" :cameraNum="camera" />
                </div>
                <input-message 
                    :room="currentRoom" 
                    v-on:sending="appendNewMessage"
                    v-on:messagefailed="messageFailedToSend"
                    v-on:demostarted="startDemo()"
                    v-on:demostopped="stopDemo()"
                    />
                
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import MessageContainer from './MessageContainer.vue'
    import InputMessage from './InputMessage.vue'
    import ChatThreeContainer from './ChatThreeContainer.vue'
    import ActiveUsersContainer from './ActiveUsersContainer.vue'
    import NewsContainer from './NewsContainer.vue'
    import { prefecToCoords } from '../ThreeJS/japanPrefecture'

    export default {
        props: ['roomId'],
        components: {
            AppLayout,
            MessageContainer,
            InputMessage,
            ChatThreeContainer,
            ActiveUsersContainer,
            NewsContainer,
        },
        data: () => {
            return {
                currentRoom: [],
                messages: [],
                activeUsers: [],
                showActive: false,
                showMessages: true,
                sortBy: 'popularity',
                news: [],
                showNews: false,
                topic: '',
                camera: true,
                demoInterval: 0,
                pagination: 0,
                newestMessageId: 0,
            }
        },
        watch: {
            currentRoom( val, oldVal ) {
                this.connect();
            }
        },
        methods: {
            //toggling methods for view
            setBackCamera() { //initiates the camera movement
                this.camera = !this.camera;
            },

            toggleMessage() { //show and hide message column
                this.showMessages = !this.showMessages;
            },

            toggleNews() { //show and hide news column
                this.showNews = !this.showNews;
            },

            toggleShowActive() { //show and hide active users column
                this.showActive = !this.showActive;
            },
            
            //Broadcasting methods
            connect(){ //connects the user to the room channel
                if( this.currentRoom.id ){
                    let vm = this;
                    this.getPaginatedMessages();
                    this.getActiveUsers();
                    window.Echo.private(`chat.${this.currentRoom.id}`)
                    .listen('.message.new', e => {
                        vm.getNewestMessage();
                    });
                }
            },

            disconnect( room ){//disconnect the user from the room channel 
                console.log('disconnecting');
                this.deactivateUser();
                window.Echo.leave(`chat.${room.id}`);
            },
            
            //room method
            getCurrentRoom(){ //fetch the information about the current room
                axios.get(`/chat/room/${this.roomId}`)
                .then( response => {
                    this.currentRoom = response.data[0];
                })
                .catch( error => {
                    console.error(error);
                })
            },

            //message methods
            getMessages(){ // called once when user joins 
                axios.get(`/chat/room/${this.currentRoom.id}/messages`)
                .then( response => {
                    this.messages = response.data;
                })
                .catch( error => {
                    console.error(error);
                })
            },

            getPaginatedMessages(){//called when user reachs max scroll                
                axios.get(`/chat/room/${this.currentRoom.id}/paginated/${this.pagination}`)
                .then( response => {
                    this.messages = this.messages.concat(response.data);
                    if (this.pagination == 0){
                        this.newestMessageId = this.messages[0].id;
                    }
                    this.pagination += 1;
                })
                .catch( error => {
                    console.error(error);
                })
            },

            getNewestMessage(){//gets the latest message when new message event occurs
                axios.get(`/chat/room/${this.currentRoom.id}/newestmessage`)
                .then( response => {
                    let newMessage = [response.data];
                    this.messages = newMessage.concat(this.messages);
                    this.newestMessageId = this.messages[0].id;
                })
                .catch( error => {
                    console.error(error);
                })
            },

            appendNewMessage(value){ //appends new message to the message data 
                let newMessage = [{
                    id: this.newestMessageId + 1,
                    user: this.$page.props.user,
                    user_id: this.$page.props.user.id,
                    chat_room_id: this.currentRoom.id,
                    message: value.message,
                    link: value.link,
                    article: value.article,
                    replying_to: value.replyTo,
                    created_at: Date.now(),
                }];
                this.messages = newMessage.concat(this.messages);
                this.newestMessageId = this.messages[0].id;
            },

            messageFailedToSend(){//error display
                let erroredMessage = this.messages.find(message => message.user_id === this.$page.props.user.id);
                erroredMessage.error = true;
            },

            resendMessage(value){//ressend message
                let payload = {
                    message: value.message,
                    link: value.link,
                    article: value.article,
                    replyTo: value.replyTo,
                }
                
                axios.post(`/chat/room/${this.room.id}/message`, payload)
                .then( response => {
                    if( response.status == 201 ){
                        console.log('message sent');
                        this.messages.find(message => message.id === value.id).error = undefined;
                    }
                })
                .catch( error => {
                    console.error(error);
                })
            },

            //news search methods
            fetchNews(topic) {
                this.showNews = true;
                if(topic != ''){
                    axios.get(`/chat/room/news/${encodeURI(topic)}`)
                    .then( response => {
                        console.log(response.data.articles);
                        this.news = response.data.articles;
                        this.topic = '';
                    })
                    .catch( error => {
                        console.error(error);
                    })
                }
            },
            searchNews(topic) {
                this.showNews = true;
                if(topic != ''){
                    axios.get(`/chat/room/news/search/${encodeURI(topic)}`)
                    .then( response => {
                        console.log(response.data.articles);
                        this.news = response.data.articles;
                        this.topic = '';
                    })
                    .catch( error => {
                        console.error(error);
                    })
                }
            },

            //active users methods
            getActiveUsers(){
                axios.get(`/chat/room/${this.currentRoom.id}/activeusers`)
                .then( response => {
                    this.activeUsers = response.data;
                    //console.log(response.data)
                })
                .catch( error => {
                    console.error(error);
                })
            },
            deactivateUser(){
                axios.post(`/chat/room/deactivate/${this.currentRoom.id}`)
                .then( response => {
                    if( response.status == 201 ){
                        console.log('deactivated user');
                    }
                })
                .catch( error => {
                    console.error(error);
                })
            },

            //Demo Methods
            startDemo(){
                const randomComment = ['私は南極に行く','軽く死ねますね','アメンボ赤いな愛ゆえに','選択肢はずっとあったよでも選んだんだよ、ここを選んだんだよ自分で','うるかにしてください','プリンは飲み物'];
                for(let i = 2; i < 6; i++){
                    let demoRegion = Object.keys(prefecToCoords)[Math.floor(Math.random() * 46)]
                    axios.post(`/chat/room/${this.currentRoom.id}/newdemoactiveuser`, {
                        userId: i,
                        region: demoRegion,
                    })
                    .then( response => {
                        if( response.status == 201 ){
                            console.log('activated new demo user', response.data);
                        }
                    })
                    .catch( error => {
                        console.error(error);
                    })
                }
                this.getActiveUsers();
                this.demoInterval = setInterval(()=>{
                    let id = Math.floor(Math.random() * (6 - 2) + 2);
                    let randomIndex = Math.floor(Math.random()* (randomComment.length - 1));
                    let comment = randomComment[randomIndex];
                    console.log(comment)
                    axios.post(`/chat/room/${this.currentRoom.id}/demomessage`, {
                        demoUserId: id,
                        message: comment,
                        link: false,
                        article: null,
                        replyTo: null,
                    })
                    .then( response => {
                        if( response.status == 201 ){
                            console.log('Dummy message', response.data);
                            this.getNewestMessage();
                        }
                    })
                    .catch( error => {
                        console.error(error);
                    })
                },3000);
            },
            stopDemo(){
                clearInterval(this.demoInterval);
                this.demoInterval = 0;
                axios.post(`/chat/room/deactivatedemo/${this.currentRoom.id}`)
                .then( response => {
                    if( response.status == 201 ){
                        console.log('deactivated demo users');
                        this.getActiveUsers();
                    }
                })
                .catch( error => {
                    console.error(error);
                })
            },
            
        },
        beforeUnmount() {
            this.disconnect(this.currentRoom);
        },
        mounted() {
            this.getCurrentRoom();
        }
    }
</script>
