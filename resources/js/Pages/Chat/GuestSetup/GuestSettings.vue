<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
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
        </div>
    </div>
</template>

<script>
import { prefecToCoords } from "../ThreeJS/japanPrefecture.js";


export default {
    props: ['roomId'],
    data () {
        return {
            selected: '',
            userRegions: new Array(),
            modelId: 0,
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
    mounted() {
        this.userRegions = Object.keys(prefecToCoords);
        this.selected = this.userRegions[0];
    }
}
</script>