<template>
    <inertia-link :href='href' class="border-2 border-gray-300 hover:bg-gray-300 hover:text-blue-500 py-1 px-2 rounded text-white"> New </inertia-link> 

</template>

<script>
export default {
    props: [
        'href'
    ],
    data () {
        return {
            classes: "place-self-end bg-gray-500 hover:bg-gray-500 py-1 px-2 mt-1 rounded text-white"
        }
    }

}
</script>