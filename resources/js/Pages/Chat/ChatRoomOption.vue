<template>
    <div 
        class="py-5 hover:bg-gray-300 cursor-pointer"
        @click="openChatRoom()">
        {{ room.id }}:{{ room.name }}:{{room.description}}:{{activeUsersLen}}
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
    }
}
</script>