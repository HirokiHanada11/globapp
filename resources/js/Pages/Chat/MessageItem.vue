<template>
    <div v-if="message.user.name == $page.props.user.name" class='float-right my-2 bg-blue-300 w-3/4 mx-4 my-4 px-2 py-0.5 rounded-lg overflow-x-hidden'>
        <a v-if="message.link" :href="message.message" target="_blank">{{ article.title }}</a>
        <span v-else >{{ message.message }}</span>
    </div>
    <div v-else>
        <div class="text-sm py-1 mx-4 text-white">
            {{ message.user.name }}
        </div>
        <div class="bg-gray-300 w-3/4 mx-4 my-4 px-2 py-1 rounded-lg">
            <a v-if="message.link" :href="message.message">{{ message.message }}</a>
            <span v-else >{{ message.message }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['message'],
    data: () => {
        return {
            localTime: null,
            article: {}
        }
    },
    methods: {
        setLocalTime () {
            this.localTime = new Date(this.message.created_at);
        }
    },
    created () {
        this.setLocalTime();
        this.article = JSON.parse(this.message.article);
    }
}
</script>