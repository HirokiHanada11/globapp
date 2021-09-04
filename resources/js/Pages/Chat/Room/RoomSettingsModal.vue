<template>
    <modal :show="showModal" @close="$emit('close')">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 relative py-6" style="height:70vh">
            <img :src="currentRoom.photo" class="h-12 w-12 mx-4 float-left rounded-full"/>
            <h3 class="font-semibold text-xl text-gray-800 leading-tight p-3">
                <b>{{currentRoom.name}}</b> -- {{currentRoom.description}} 
            </h3>
            
            <section-border/>

            <h4 >Share Link</h4>
            <p class="mt-1 text-sm text-gray-600">Share this link to invite guest users</p>
            <div class="flex flex-row">
                <input type="text" v-model="shareLink" ref="link" class="rounded-lg w-5/6 border-opacity-50">
                <button @click="copyLink"><img src="/textures/copy-icon.png" class="self-center"></button>
            </div>

            <section-border/>

            <h4>Users ({{activeUsers.usersList.length}}/{{subscribers.length}})</h4>
            <div class="overflow-y-scroll no-scrollbar flex flex-col">
                <div 
                    v-for="(user, index) in subscribers"
                    v-bind:key="index"
                    class="w-full grid grid-cols-2 rounded hover:bg-gray-100"> 
                    <div class="flex flex-row m-1 gap-1 ">
                        <img :src="user.profile_photo_url" class="rounded-full h-6 ">
                        <b>{{user.name}}</b>
                        <span v-if="activeUsers.usersList.find(active => active.name === user.name)" class="h-2 w-2 rounded-full bg-green-300 self-center"></span>
                    </div> 
                    <div class="flex flex-row justify-center">
                        {{user.pivot.region}}
                    </div>  
                </div>
            </div>
        </div>
    </modal>

</template>

<script>
    import Modal from '../../../Jetstream/Modal.vue'
    import SectionBorder from '../../../Jetstream/SectionBorder.vue'
    import SectionTitle from '../../../Jetstream/SectionTitle.vue'
    export default {
        components: { Modal, SectionTitle, SectionBorder },
        props: ['showModal', 'currentRoom', 'subscribers', 'activeUsers'],
        data (){
            return {
                shareLink: 'sharelinkdefo'
            }
        },
        methods: {
            copyLink () {
                this.$refs.link.select();
                this.$refs.link.setSelectionRange(0,99999);

                navigator.clipboard.writeText(this.$refs.link.value);
            }
        },
    }
</script>