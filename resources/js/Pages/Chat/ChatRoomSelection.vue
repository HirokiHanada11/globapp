<template>
    <div class="grid grid-cols-2">
        <div class="font-bold text-xl" >
            {{ selected.name }} Chat 
        </div>
        <div>
            <select
                v-model="selected"
                @change="$emit('roomchanged', selected)"    
                class="float-right">

                <option
                    v-for="(room, index) in rooms"
                    :key="index"
                    :value="room"
                    >
                {{ room.name }}
                </option>
            </select>
            <new-chat-button 
                :href="route('newRoom')"
                class="float-right"
            />
        </div>
    </div>
</template>

<script>
    import NewChatButton from './NewChatButton.vue' 
    export default {
        components: {
            NewChatButton,
        },
        props: ['rooms', 'currentRoom'],
        data: () => {
            return {
                selected: ''
            }
        },
        created() {
            this.selected = this.currentRoom
        }
    }
</script>