<template>
<div 
    class="h-full w-full text-white rounded border-t border-gray-100 border-solid p-1 " 
    :id="'news' + index"
    >

    <div class="text-left">
        {{this.newsArticle.source.name}} -- {{this.newsArticle.publishedAt.slice(0,-10)}}
    </div>
    <div >
        <img :src="newsArticle.urlToImage" class="rounded my-1">
    </div>
    <div class="text-lg">
        {{this.newsArticle.title}}
    </div>
    <span class="flex justify-center">
        <button class="hover:border-white hover:bg-transparent hover:text-white rounded border-2 mx-2 px-2 bg-white text-blue-900 "><a :href="newsArticle.url" target="_blank" >Visit</a></button>
        <button class="hover:border-white hover:bg-transparent hover:text-white hover:border-2 rounded mx-2 px-2 bg-blue-500 text-white " v-on:click="shareNews()">Share</button>
    </span>
    
</div>
</template>

<script>
export default {
    props: ['newsArticle', 'index', 'roomId'],
    methods: {
        shareNews(){
            let payload = {
                message: "news"+this.index,
                link: true,
                article: this.newsArticle,
                replyTo: null,
            }
            this.$emit('sending', payload)
            axios.post(`/chat/room/${this.roomId}/message`, payload)
            .then( response => {
                if( response.status == 201 ){
                    console.log('message sent'); //emit event messagesent which can be accessed by the parent component
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