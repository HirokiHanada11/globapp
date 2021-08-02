<template>
    <div class="h-1/2 p-2 flex flex-col-reverse overflow-y-scroll no-scrollbar" >
        <div v-for="(message, index) in messages" :key="index" class="space-y-20">
            <message-item :message="message" />
        </div>
    </div>
</template>

<script>
import MessageItem from './MessageItem.vue'
export default {
    components: { MessageItem },
    props: ['messages'],
}
</script>