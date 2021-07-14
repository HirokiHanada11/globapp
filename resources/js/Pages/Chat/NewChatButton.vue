<template>
    <inertia-link :href='href' :class="classes"> New </inertia-link> 

</template>

<script>
import Button from '../../Jetstream/Button.vue'
export default {
    components: {
        Button,
    },
    props: [
        'href'
    ],
    data () {
        return {
            classes: "place-self-end bg-blue-700 hover:bg-gray-500 p-1 mt-1 rounded text-white"
        }
    }

}
</script>