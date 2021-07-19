<template>
    <div 
        class="py-5 grid grid-cols-2 hover:bg-gray-300 cursor-pointer"
        @click="openChatRoom()">
        <span class="grid-col-1">
            <img :src="room.photo" class="grid-col-1 h-12 w-12 mx-4 float-left" style="border-radius: 50%"/>
            <div class="float-left p-3">
            {{ room.id }}
            <b>{{ room.name }}</b>
            -- {{ room.description }}
            </div>
        </span>
        <div class="grid-col-2">
            <div class="float-right p-3">Active Users: {{ activeUsersLen }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['room'],
    data() {
        return {
            activeUsers:[],
            activeUsersLen: '',
        }
    },
    watch: {

    },
    methods: {
        openChatRoom () {
            axios.post(`/chat/room/${this.room.id}/newactiveuser`)
            .then( response => {
                if( response.status == 201 ){
                    console.log('activated new user');
                }
            })
            .catch( error => {
                console.error(error);
            })
            window.location = `/chatrooms/chatroom/${this.room.id}`;
        },
        getActiveUsers(){
                axios.get(`/chat/room/${this.room.id}/activeusers`)
                .then( response => {
                    this.activeUsers = response.data;
                    this.activeUsersLen = response.data.length;
                })
                .catch( error => {
                    console.error(error);
                })
            }
    },
    mounted() {
        this.getActiveUsers();
        console.log(this.room.photo)
    }
}
</script>