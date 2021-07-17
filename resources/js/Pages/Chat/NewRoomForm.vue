<template>
    <form>
        <!-- Room Name Input -->
        <div>
            <label class="block font-medium text-sm text-gray-700" for="roomName">
                Input New Chat Room Name
            </label>
            <input 
                type='text'
                v-model="roomName"
                placeholder="Enter room name"
                class="w-3/4 border-none p-1 mx-1 focus:border-blue-300"  
                id="roomName"
            />
        </div>
        <!-- Regions Select -->
        <div class="grid grid-cols-2 mt-4">
            <label class="block font-medium text-sm text-gray-700" for='region'>
                Select Region 
            </label>
            <div id="region">
                <select
                    v-model="selected"
                    class="float-right rounded py-1">

                    <option
                        v-for="(region, index) in regions"
                        :key="index"
                        :value="region"
                        >
                    {{ region }}
                    </option>
                </select>
            </div>
        </div>
        <!-- Room Description Input -->
        <div class="mt-4">
            <label class="block font-medium text-sm text-gray-700" for="roomName">
                Input Room description
            </label>
            <input 
                type='text'
                v-model="roomDescription"
                placeholder="Enter room description"
                class="w-3/4 border-none p-1 mx-1 focus:border-blue-300"  
            />
        </div>
        <button
            @click="createRoom()"
            class="place-self-end bg-gray-500 hover:bg-blue-700 p-1 mt-1 rounded text-white float-right">
            Create
        </button>
    </form>
</template>

<script>
import Input from '../../Jetstream/Input.vue'
export default {
    components: { Input },
    emits: ['roomcreated'],
    data ()  {
        return {
            regions: ['World', 'Japan'],
            selected: 'World',
            roomName: '',
            roomDescription: '',
            roomPhoto: '',
        }
    },
    methods: {
        createRoom () {
            if( this.roomName == '' || this.roomDescription == ''){
                alert("Please Enter room name and description");
                return;
            }

            axios.post('/chat/newRoom/create', {
                roomName: this.roomName,
                roomRegion: this.selected,
                roomDescription: this.roomDescription,
                roomPhoto:this.roomPhoto,
            })
            .then( response => {
                if( response.status == 201 ){
                    this.roomName = '';
                    this.roomDescription = '';
                    this.selected = 'World';
                    this.$emit('roomcreated'); //emit event messagesent which can be accessed by the parent component
                }
            })
            .catch( error => {
                console.error(error);
            })
        }
    }
}
</script>