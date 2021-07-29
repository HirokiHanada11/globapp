<template>
<div class=" w-full text-white rounded border-t border-gray-100 border-solid p-1 hover:bg-blue-100 hover:text-blue-700" >
    <a :href="newsArticle.url" target="_blank">
        <div class=" ">
            <div class="text-left">
            {{this.newsArticle.source.name}} -- {{this.newsArticle.publishedAt.slice(0,-10)}}
            </div>
            <div >
                <img :src="newsArticle.urlToImage" class="rounded my-1">
            </div>
            <div class="text-lg">
            {{this.newsArticle.title}}
            </div>
        </div>
    </a>
</div>
</template>

<script>
export default {
    props: ['newsArticle'],
}
</script>