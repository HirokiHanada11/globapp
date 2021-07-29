<template>
    <div class="h-1/4 p-2 flex flex-row overflow-y-hidden overflow-x-scroll no-scrollbar" >
        <div v-for="(newsArticle, index) in news" :key="index" class="h-full">
            <article-item :newsArticle="newsArticle" />
        </div>
    </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue'
export default {
  components: { ArticleItem },
    props: ['news']
}
</script>