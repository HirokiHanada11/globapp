<template>
    <div class="h-full p-2 flex flex-col overflow-y-scroll no-scrollbar" id="articles">
        <div v-for="(newsArticle, index) in news" :key="index"  >
            <article-item :newsArticle="newsArticle" :index="index" :roomId="roomId" v-on:articlesent="passEvent()"/>
        </div>
    </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue'
export default {
    components: { ArticleItem },
    props: ['news',  'roomId'],
    methods: {
        passEvent (){
            this.$emit('articlesent');
        }
    }
}
</script>