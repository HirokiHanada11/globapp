<template>
    <div class="relative h-10 m-1">
        <div style="border-top: 1px solid #e6e6e6;" class="flex">
            <input 
                type="text"
                v-model="message"
                @keyup.enter="sendMessage()"
                placeholder="Say something ..."
                class="border rounded-full border-transparent focus:outline-none focus:border-none w-5/6"
            />
            <button
                @click="sendMessage()"
                class="place-self-end bg-gray-500 hover:bg-blue-500 py-1 px-2 mt-1 rounded-full text-white flex-grow">
                Send
            </button>
        </div> 
    </div>
</template>

<script>
import Button from '../../../Jetstream/Button.vue'
export default {
  components: { Button },
    props: ['room'],
    data: () => {
        return {
            message: '', //holds the input value (defined using v-model)
            replyTo: null
        }
    },
    methods: {
        sendMessage() {
            if( this.message == '' ){
                return;
            }else if( this.message == '/demostart'){
                this.$emit('demostarted');
                this.message = '';
                return;
            }else if ( this.message == '/demostop'){
                this.$emit('demostopped');
                this.message = '';
                return;
            }

            let payload = {
                message: this.message,
                link: false,
                article: null,
                replyTo: this.replyTo,
            }

            this.$emit('sending', payload);
            this.message = '';
            
            axios.post(`/chat/room/${this.room.id}/message`, payload)
            .then( response => {
                if( response.status == 201 ){
                    console.log('message sent');
                    
                }
            })
            .catch( error => {
                console.error(error);
                this.$emit('messagefailed');
            })
        }
    }
}
</script>