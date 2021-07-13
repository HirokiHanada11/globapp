<template>
    <div v-if="message.user.name == $page.props.user.name" class='float-right my-2'>
        <span class="bg-blue-300 w-3/4 mx-4 my-4 px-2 py-0.5 rounded-lg">
            {{ message.message }}
        </span>
    </div>
    <div v-else>
        <span>
            {{ message.user.name }}
        </span>
        <span class="bg-gray-300 w-3/4 mx-4 my-4 px-2 py-1 rounded-lg">
            {{ message.message }}
        </span>
    </div>
</template>

<script>
export default {
    props: ['message'],
    data: () => {
        return {
            localTime: null
        }
    },
    methods: {
        setLocalTime () {
            this.localTime = new Date(this.message.created_at);
        }
    },
    created () {
        this.setLocalTime();
    }
}
</script>