<template>
    <app-layout>
        <template #header>
            <div class="flex justify-between items-center">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Chat Rooms
            </h2>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8" style="height:70vh">
                <div class="w-full h-12 bg-blue-500 flex justify-between px-3 content-center items-center">
                    <toggle-switch v-on:toggled="getRooms"/>
                    <new-chat-button 
                        :href="route('newRoom')"
                        class="float-right"
                    />
                </div>
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg h-full">
                    <div class="p-2 flex flex-col overflow-y-scroll no-scrollbar">
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
    import NewChatButton from './NewChatButton.vue' 
    import ToggleSwitch from './ToggleSwitch.vue'

    export default {
        components: {
            AppLayout,
            ChatRoomOption,
            NewChatButton,
            ToggleSwitch,
        },
        data: () => {
            return {
                chatRooms: [],
                toggleValue: false,
            }
        },
        methods: {
            async getRooms(val){
                this.toggleValue = val;
                let endpoint = '/chat/rooms';
                if(this.toggleValue){
                    endpoint = '/chat/subbedrooms';
                }
                try{
                    let response = await axios.get(endpoint);
                    console.log(response.data);
                    this.chatRooms = response.data;
                }catch(e){
                    console.error(e);
                }
            },
        },
        created() {
            this.getRooms(this.toggleValue);
        }
                    
    }
</script>