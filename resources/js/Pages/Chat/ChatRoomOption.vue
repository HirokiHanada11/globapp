<template>
    <div 
        class="py-5 hover:bg-gray-300 cursor-pointer"
        @click="openChatRoom()">
        {{ room.id }}:{{ room.name }}:{{room.description}}
    </div>
</template>

<script>
export default {
    props: ['room'],
    methods: {
        openChatRoom () {
            window.location = `/chatrooms/chatroom/${this.room.id}`;
        }
    }
}
</script>