<template>
    <div v-if="message.user.name == $page.props.user.name" class='float-right my-2 bg-blue-300 w-3/4 mx-4 my-4 px-2 py-0.5 rounded-lg overflow-x-hidden hover:underline'>
        <a v-if="message.link" :href="article.url" target="_blank">
            <div class="text-left">
                {{this.article.source.name}} -- {{this.article.publishedAt.slice(0,-10)}}
            </div>
            <span class="text-lg">
                {{this.article.title}}
                <img :src="article.urlToImage" class="rounded my-1 w-full">
            </span>
        </a>
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
        // this.setLocalTime();
        if(this.message.link){
            this.article = JSON.parse(this.message.article);
        }
    },
    beforeUpdate () {
        // this.setLocalTime();
        if(this.message.link){
            this.article = JSON.parse(this.message.article);
        }
    }
}
</script>