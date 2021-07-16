<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Chat Rooms
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg h-96">
                    <div class="h-full p-2 flex flex-col overflow-y-scroll">
                        <chat-room-option
                            v-for="(room, index) in chatRooms"
                            v-bind:key="index"
                            :room = "room"
                            />
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import ChatRoomOption from './ChatRoomOption.vue'

    export default {
        components: {
            AppLayout,
            ChatRoomOption,
        },
        data: () => {
            return {
                chatRooms: [],
            }
        },
        methods: {
            getRooms(){
                axios.get('/chat/rooms')
                .then( response => {
                    this.chatRooms = response.data;
                })
                .catch( error => {
                    console.error( error );
                })
            },
        },
        created() {
            this.getRooms();
        }
                    
    }
</script>