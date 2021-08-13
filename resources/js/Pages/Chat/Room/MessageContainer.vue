<template>
    <div class="p-2 flex flex-col overflow-y-scroll no-scrollbar mt-3" id="chat" ref="chat">
        <div v-for="(message, index) in messages" :key="index" class="space-y-20" >
            <message-item :message="message" v-on:resend="passEvent"/>
        </div>
    </div>
</template>

<script>
import MessageItem from './MessageItem.vue'
export default {
    components: { MessageItem },
    props: ['messages'],
    watch:{
        messages(){
            console.log('updated',this.$refs.chat.scrollHeight, this.$refs.chat.scrollTop);
                this.$nextTick(()=>{
                    this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
                    console.log(this.$refs.chat.scrollTop)
                })
        }
    },
    methods: {
        passEvent(value){
            this.$emit('resend',value);
        }
    },
}
</script>