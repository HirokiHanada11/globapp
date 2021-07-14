<template>
    <!-- Room Name Input -->
    <div>
        <div class="font-bold text-xl" >
            Input New Chat Room Name
        </div>
        <input 
            type='text'
            v-model="roomName"
            placeholder="Enter room name"
            class="w-full border-none p-1"  
        />
    </div>
    <!-- Regions Select -->
    <div class="grid grid-cols-2">
        <div class="font-bold text-xl" >
            Select Region 
        </div>
        <div>
            <select
                v-model="selected"
                class="float-right">

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
    <div>
        <div class="font-bold text-xl" >
            Input Room description
        </div>
        <input 
            type='text'
            v-model="roomDescription"
            placeholder="Enter room description"
            class="w-full border-none p-1"  
        />
    </div>
    <button
        @click="createRoom()"
        class="place-self-end bg-gray-500 hover:bg-blue-700 p-1 mt-1 rounded text-white float-right">
        Create
    </button>
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