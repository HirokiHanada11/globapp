<template>
    <div class="p-2 flex flex-col overflow-y-scroll " >
        <div v-for="(message, index) in messages" :key="index" class="space-y-20" >
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