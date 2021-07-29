<template>
    <app-layout>
        <template #header>
            <img :src="currentRoom.photo" class="grid-col-1 h-12 w-12 mx-4 float-left" style="border-radius: 50%"/>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight p-3">
                <b>{{currentRoom.name}}</b> -- {{currentRoom.description}} 
            <button v-if='!showActive' @click="toggleShowActive" class="float-right place-self-end bg-blue-500 hover:bg-gray-500 py-1 px-2 mt-1 rounded text-white text-sm">
                Show Active Users
            </button>
            <button v-if='showActive' @click="toggleShowActive" class="float-right place-self-end bg-blue-500 hover:bg-gray-500 py-1 px-2 mt-1 rounded text-white text-sm">
                Hide Active Users
            </button>
            <button
                @click="fetchNews()"
                class="float-right place-self-end bg-blue-500 hover:bg-gray-500 py-1 px-2 mt-1 rounded text-white text-sm">
                Fetch News
            </button>
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 relative" style="height:70vh">               
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg h-full w-full relative">
                    <div class="h-full w-1/4 absolute top-0 right-0">
                        <active-users-container v-show="showActive" :activeUsers="activeUsers"/>
                        <message-container :messages="messages" />
                        <news-container :v-if="showNews" :news="news" />
                    </div> 
                    <chat-three-container :messages="messages" :room="currentRoom" :activeUsers="activeUsers" :news="news" />
                </div>
                <input-message 
                    :room="currentRoom" 
                    v-on:messagesent="getMessages()" />
                
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
                sortBy: 'popularity',
                news: [],
                showNews: false,
            }
        },
        watch: {
            currentRoom( val, oldVal ) {
                this.connect();
            }
        },
        methods: {
            fetchNews() {
                console.log(this.currentRoom.topic);
                this.showNews = !this.showNews;
                axios.get(`/chat/room/news/${this.currentRoom.topic}`)
                .then( response => {
                    console.log(response.data.articles);
                    this.news = response.data.articles;
                })
                .catch( error => {
                    console.error(error);
                })
            },
            getCurrentRoom(){
                axios.get(`/chat/room/${this.roomId}`)
                .then( response => {
                    this.currentRoom = response.data[0];
                })
                .catch( error => {
                    console.error(error);
                })
            },
            connect(){
                if( this.currentRoom.id ){
                    let vm = this;
                    this.getMessages();
                    this.getActiveUsers();
                    window.Echo.private(`chat.${this.currentRoom.id}`)
                    .listen('.message.new', e => {
                        vm.getMessages();
                    });
                }
            },
            disconnect( room ){
                console.log('disconnecting');
                this.deactivateUser();
                window.Echo.leave(`chat.${room.id}`);
            },
            getMessages(){
                axios.get(`/chat/room/${this.currentRoom.id}/messages`)
                .then( response => {
                    this.messages = response.data;
                })
                .catch( error => {
                    console.error(error);
                })
            },
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
            toggleShowActive() {
                this.showActive = !this.showActive;
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
