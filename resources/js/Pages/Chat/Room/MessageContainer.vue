<template>
    <div class="p-2 flex flex-col overflow-y-scroll no-scrollbar mt-3" >
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
    methods: {
        passEvent(value){
            this.$emit('resend',value);
        }
    }
}
</script>