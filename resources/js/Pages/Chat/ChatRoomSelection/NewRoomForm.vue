<template>
    <form>
        <!-- Room Name Input -->
        <div class="grid grid-cols-2 mt-4 p-4">
            <label class="block font-medium text-sm text-gray-700 ">
                Input New Chat Room Name
            </label>
            <input 
                type='text'
                v-model="roomName"
                placeholder="Enter room name"
                class="w-3/4 rounded p-1 mx-1 focus:border-blue-300"  
                id="roomName"
            />
        </div>
        <!-- Topics Select -->
        <div class="grid grid-cols-2 mt-4 p-4">
            <label class="block font-medium text-sm text-gray-700">
                Input Topic 
            </label>
            <input 
                type='text'
                v-model="topic"
                placeholder="Enter room topic: eg. Olympics"
                class="w-3/4 rounded p-1 mx-1 focus:border-blue-300"  
            />
        </div>
        <!-- Room Description Input -->
        <div class="grid grid-cols-2 mt-4 p-4">
            <label class="block font-medium text-sm text-gray-700">
                Input Room description
            </label>
            <input 
                type='text'
                v-model="roomDescription"
                placeholder="Enter room description"
                class="w-3/4 rounded p-1 mx-1 focus:border-blue-300"  
            />
        </div>
        <!-- Room photo input -->
        <div class="grid grid-cols-2 mt-4 p-4">
            <label class="block font-medium text-sm text-gray-700">
                Select Room Photo (optional)
            </label>
            <input 
                type='file'
                placeholder="Select jpeg or png file"
                accept="image/png, image/jpeg"
                class="w-3/4 rounded p-1 mx-1 focus:border-blue-300"  
                @change="fileSet"
            />
        </div>
        <div class="">
            <button
                @click="createRoom"
                class="place-self-center hover:bg-gray-500 bg-blue-700 p-1 px-3 mt-1 rounded text-white m-2 float-right">
                Create
            </button>
        </div>
    </form>
</template>

<script>
import Button from '../../../Jetstream/Button.vue';
import Input from '../../../Jetstream/Input.vue'
export default {
    components: { Input, Button },
    emits: ['roomcreated'],
    data ()  {
        return {
            topic: '',
            roomName: '',
            roomDescription: '',
            file: ''
        }
    },
    methods: {
        createRoom (e) {
            e.preventDefault();
            
            if( this.roomName == '' || this.roomDescription == '' || this.topic == ''){
                alert("Please Enter room name, description, and topic");
                return;
            }

            const config = {
                headers: {
                    'content-type' : 'multipart/form-data' 
                }
            }

            let data = new FormData(); 
            data.append('roomName', this.roomName);
            data.append('roomTopic', this.topic);
            data.append('roomDescription', this.roomDescription);
            data.append('roomPhoto', this.file);
            console.log(data.values);

            axios.post('/chat/newRoom/create', data, config)
            .then( response => {
                if( response.status == 201 ){
                    this.roomName = '';
                    this.roomDescription = '';
                    this.topic = '';
                    this.file = '';
                    this.$emit('roomcreated'); //emit event messagesent which can be accessed by the parent component
                }
            })
            .catch( error => {
                console.error(error);
            })
        },
        fileSet (e) {
            this.file = e.target.files[0];
            console.log(e.target.files);
        },
        back(){
            window.location = `/chatrooms`;
        }
    }
}
</script>