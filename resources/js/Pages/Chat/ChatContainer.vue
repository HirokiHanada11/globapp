<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{currentRoom.name}}
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg grid grid-cols-3">
                    <chat-three-container :messages="messages" :room="currentRoom" class="col-span-2"/>
                    <message-container :messages="messages" class="col-start-3"/>
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

    export default {
        props: ['roomId'],
        components: {
            AppLayout,
            MessageContainer,
            InputMessage,
            ChatThreeContainer,
        },
        data: () => {
            return {
                currentRoom: [],
                messages: []
            }
        },
        watch: {
            currentRoom( val, oldVal ) {
                if( oldVal.id ){
                    this.disconnect( oldVal );
                }
                this.connect();
            }
        },
        methods: {
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
                    window.Echo.private(`chat.${this.currentRoom.id}`)
                    .listen('.message.new', e => {
                        vm.getMessages();
                    });
                }
            },
            disconnect( room ){
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
            }
        },
        mounted() {
            this.getCurrentRoom();
        }
    }
</script>
