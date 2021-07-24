<template>
    <div class="h-36 w-full absolute top-0">
        <div class="h-full p-2 flex flex-col-reverse overflow-y-scroll" >
            <div v-for="(message, index) in messages" :key="index" class="space-y-20">
                <message-item :message="message" />
            </div>
        </div>
    </div>
</template>

<script>
import MessageItem from './MessageItem.vue'
export default {
    components: { MessageItem },
    props: ['messages']
}
</script>