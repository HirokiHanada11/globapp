<template>
    <div>
        {{ message.user.name }}: {{ message.message }} at {{ message.created_at }}
    </div>
</template>

<script>
export default {
    props: ['message']
}
</script>