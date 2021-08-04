<template>
    <div class="h-30 max-w-1/4 p-2 flex flex-col rounded overflow-y-scroll absolute left-0 top-0 bg-gray-300 no-scrollbar">
        <div 
            v-for="(user, index) in activeUsers"
            v-bind:key="index"> 
            <b>{{user.user.name}}</b>---{{user.region}}---{{user.created_at.slice(0,-11)}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['activeUsers'],
}
</script>