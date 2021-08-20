<template>
    <div class="grid grid-cols-2 mt-4">
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
    </div>
</template>

<script>
import { nameToCoords } from "../ThreeJS/countries.js";
import { prefecToCoords } from "../ThreeJS/japanPrefecture.js";


export default {
    props: ['room'],
    data () {
        return {
            selected: '',
            userRegions: [],
            modelId: 0,
        }
    },
    methods: {
        openChatRoom () {
            axios.post(`/chat/room/${this.room.id}/newactiveuser`, {
                region: this.selected,
                modelId: this.modelId,
            })
            .then( response => {
                if( response.status == 201 ){
                    console.log('activated new user');
                }
            })
            .catch( error => {
                console.error(error);
            })
            // window.location = `/chatrooms/chatroom/${this.room.id}`;
        },
        async joinRoom () {
            let userId = this.$page.props.user.id;
            try {
                let response = await axios.post(`/subscribeuser/${this.room.id}/${userId}`,{
                    region: this.selected,
                });
                console.log(response);
                window.location = `/chatrooms/chatroom/${this.room.id}`;
            } catch (error) {
                console.error(error);
            }
        },
        async joinClicked() {
            await this.openChatRoom();
            await this.joinRoom();
        }
    },
    mounted() {
        // console.log(this.room)
        this.userRegions = Object.keys(prefecToCoords);
        // console.log(this.userRegions);
        this.selected = this.userRegions[0];

    }
}
</script>