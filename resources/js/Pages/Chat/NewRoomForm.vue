<template>
    <form>
        <!-- Room Name Input -->
        <div class="grid grid-cols-2 mt-4 p-4">
            <label class="block font-medium text-sm text-gray-700 " for="roomName">
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
            <label class="block font-medium text-sm text-gray-700" for='topic'>
                Select Topic 
            </label>
            <div id="topic">
                <select
                    v-model="selected"
                    class=" rounded py-1">

                    <option
                        v-for="(topic, index) in topics"
                        :key="index"
                        :value="topic"
                        >
                    {{ topic }}
                    </option>
                </select>
            </div>
        </div>
        <!-- Room Description Input -->
        <div class="grid grid-cols-2 mt-4 p-4">
            <label class="block font-medium text-sm text-gray-700" for="roomName">
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
            <label class="block font-medium text-sm text-gray-700" for="roomName">
                Select Room Photo
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
                @click="back"
                class="place-self-center hover:bg-gray-500 bg-blue-700 p-1 px-3 mt-1 rounded text-white m-2 float-right">
                Create
            </button>
        </div>
    </form>
</template>

<script>
import Button from '../../Jetstream/Button.vue';
import Input from '../../Jetstream/Input.vue'
export default {
    components: { Input, Button },
    emits: ['roomcreated'],
    data ()  {
        return {
            topics: ['Olympics', 'Tech'],
            selected: 'Olympics',
            roomName: '',
            roomDescription: '',
            file: ''
        }
    },
    methods: {
        createRoom (e) {
            e.preventDefault();
            
            if( this.roomName == '' || this.roomDescription == '' || this.file == ''){
                alert("Please Enter room name, description, and photo");
                return;
            }

            const config = {
                headers: {
                    'content-type' : 'multipart/form-data' 
                }
            }

            let data = new FormData(); 
            data.append('roomName', this.roomName);
            data.append('roomTopic', this.selected);
            data.append('roomDescription', this.roomDescription);
            data.append('roomPhoto', this.file);
            console.log(data.values);

            axios.post('/chat/newRoom/create', data, config)
            .then( response => {
                if( response.status == 201 ){
                    this.roomName = '';
                    this.roomDescription = '';
                    this.selected = 'Olympics';
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