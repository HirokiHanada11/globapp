<template>
    <jet-authentication-card>
        <template #logo>
            <div class="flex flex-col justify-center items-center">
                <img :src="currentRoom.photo" class="rounded-full w-16 h-16">
                <h2 class="text-center"><b>{{currentRoom.name}}</b></h2>
                <h3 class="text-center">{{currentRoom.description}}</h3>
            </div>
        </template>

        <label class="block font-medium text-sm text-gray-700" for='region'>
            Select Your Region 
        </label>
        <div id="region">
            <button
                @click="joinClicked()"
                class="place-self-end bg-gray-500 hover:bg-blue-700 py-1 px-2 ml-2 rounded text-white float-right">
                Join
            </button>
            <select
                v-model="selected"
                class="float-right rounded py-1">

                <option
                    v-for="(userRegion, index) in userRegions"
                    :key="index"
                    :value="userRegion"
                    >
                {{ userRegion }}
                </option>
            </select>
        </div>
    </jet-authentication-card>
</template>

<script>
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard'
import { prefecToCoords } from "../ThreeJS/japanPrefecture.js";


export default {
    components:{
        JetAuthenticationCard,
    },
    props: ['roomId'],
    data () {
        return {
            selected: '',
            userRegions: new Array(),
            modelId: 0,
            currentRoom: new Object(),
        }
    },
    methods: {
        async joinRoom () {
            let userId = this.$page.props.user.id;
            try {
                let response = await axios.post(`/subscribeuser/${this.roomId}/${userId}`,{
                    region: this.selected,
                });
                console.log(response);
            } catch (error) {
                console.error(error);
            }
            window.location = `/chatrooms/chatroom/${this.roomId}`;
        },
        async joinClicked() {
            await this.joinRoom();
        }
    },
    async mounted() {
        this.userRegions = Object.keys(prefecToCoords);
        this.selected = this.userRegions[0];
        let response = await axios.get(`/guest/invited/${this.roomId}`);
        this.currentRoom = await response.data;
    },   
    created () {
        
    }
}
</script>