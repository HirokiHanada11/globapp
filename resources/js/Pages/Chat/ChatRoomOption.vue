<template>
    <div 
        class="py-5 hover:bg-gray-300 "
        @click="openChatRoom()">
        {{ room.id }}:{{ room.name }}:{{room.description}}
    </div>
</template>

<script>
export default {
    props: ['room'],
    methods: {
        openChatRoom () {
            window.location = `/chatroom/${this.room.id}`;
        }
    }
}
</script>