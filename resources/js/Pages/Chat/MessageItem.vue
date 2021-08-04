<template>
    <div v-if="message.user.name == $page.props.user.name" :id="message.id">
        <div v-if="message.link" class='float-right my-2 bg-blue-300 mx-4 my-4 px-2 py-0.5 rounded-lg w-3/4'>
            <a :href="article.url" target="_blank" class='hover:underline w-3/4'>
            <div class="text-left">
                {{this.article.source.name}} -- {{this.article.publishedAt.slice(0,-10)}}
            </div>
            <div class="text-md">
                {{this.article.title}}
                <img :src="article.urlToImage" class="rounded my-1 w-full">
            </div>
        </a>
        </div>
        <span v-else class='float-right my-2 bg-blue-300 mx-4 my-4 px-2 py-0.5 rounded-lg flex'>{{ message.message }}</span>
    </div>
    <div v-else :id="message.id">
        <div class="text-sm py-1 mx-4 text-white">
            {{ message.user.name }}
        </div>
        <div v-if="message.link" class="float-left bg-gray-300 mx-2 mb-4 px-2 py-0.5 rounded-lg w-3/4 ">
            <a  :href="article.url" target="_blank" class='hover:underline w-3/4'>
                <div class="text-left">
                    {{this.article.source.name}} -- {{this.article.publishedAt.slice(0,-10)}}
                </div>
                <span class="text-md">
                    {{this.article.title}}
                    <img :src="article.urlToImage" class="rounded my-1 w-full">
                </span>
            </a>
        </div>
        <div v-else class="float-left bg-gray-300 mx-2 mb-4 px-2 py-0.5 rounded-lg flex ">{{ message.message }}</div>
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