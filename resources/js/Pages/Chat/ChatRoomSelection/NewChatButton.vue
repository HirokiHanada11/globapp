<template>
    <inertia-link :href='href' :class="classes"> New </inertia-link> 

</template>

<script>
export default {
    props: [
        'href'
    ],
    data () {
        return {
            classes: "place-self-end bg-blue-500 hover:bg-gray-500 py-1 px-2 mt-1 rounded text-white"
        }
    }

}
</script>