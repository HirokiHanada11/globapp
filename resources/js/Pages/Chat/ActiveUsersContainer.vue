<template>
    <div class="h-30 p-2 flex flex-col rounded overflow-y-scroll absolute right-0 top-0 bg-blue-300">
        <div 
            v-for="(user, index) in activeUsers"
            v-bind:key="index"
            class=""> 
            <b>{{user.user.name}}</b>---{{user.region}}---{{user.created_at.slice(0,-11)}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['activeUsers'],
}
</script>