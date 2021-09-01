<template>
    <div v-if="message.id">
        <div v-if="message.user.name == $page.props.user.name" :id="message.id" >
            <div v-if="typeof message.error === 'undefined'">
                <div v-if="message.link" class='float-right my-2 bg-blue-400 mx-4 mr-5 my-4 px-2 py-0.5 rounded-lg w-3/4'>
                    <a :href="article.url" target="_blank" class='hover:underline w-3/4'>
                        <div class="text-left">
                            {{this.article.source.name}} -- <span class="text-xs">{{this.article.publishedAt.slice(0,10)}}</span>
                        </div>
                        <div class="text-sm">
                            {{this.article.title}}
                            <img :src="article.urlToImage" class="rounded my-1 w-full">
                        </div>
                    </a>
                </div>
                <div v-else class='float-right bg-blue-400 mx-4 mr-5 mb-4 px-2 py-0.5 rounded-lg flex '>{{ message.message }}</div>
            </div>
            <div v-else>
                <div v-if="message.link" class='float-right my-2 bg-red-400 mx-4 mr-5 my-4 px-2 py-0.5 rounded-lg w-3/4'>
                    <span class="text-white text-lg">FAILED TO SEND<br></span>
                    <span class="text-white text-md">click to retry<br></span>
                    <div class="text-left">
                        {{this.article.source.name}} -- <span class="text-xs">{{this.article.publishedAt.slice(0,10)}}</span>
                    </div>
                    <div class="text-sm">
                        {{this.article.title}}
                        <img :src="article.urlToImage" class="rounded my-1 w-full">
                    </div>
                
                </div>
                <div v-else class='float-right bg-red-400 mx-4 mr-5 mb-4 px-2 py-0.5 rounded-lg flex ' @click="resend">
                    <span class="text-white text-lg">FAILED TO SEND<br></span>
                    <span class="text-white text-md">click to retry<br></span>
                    {{ message.message }}
                    </div>
            </div>
        </div>

        <div v-else :id="message.id">
            <div class="text-sm py-1 mx-4 text-white w-1/4 ">
                <span class='flex'><img :src="message.user.profile_photo_url" class="rounded-full h-4 mx-1">{{ message.user.name }}</span>
            </div>
            <div v-if="message.link" class="float-left bg-gray-300 mx-2 mb-4 px-2 py-0.5 rounded-lg w-3/4 ">
                <a  :href="article.url" target="_blank" class='hover:underline w-3/4'>
                    <div class="text-left">
                        {{this.article.source.name}} -- {{this.article.publishedAt.slice(0,10)}}
                    </div>
                    <span class="text-md">
                        {{this.article.title}}
                        <img :src="article.urlToImage" class="rounded my-1 w-full">
                    </span>
                </a>
            </div>
            <div v-else class="float-left bg-gray-300 mx-2 mb-4 px-2 py-0.5 rounded-lg flex ">{{ message.message }}</div>
        </div>
    </div>

    <div v-else class="text-center w-full">
        {{message}}
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
        },
        reseng(){
            this.$emit('resend',this.message);
        },
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