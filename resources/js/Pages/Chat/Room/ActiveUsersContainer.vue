<template>
    <div class="h-30 w-3/4 p-2 m-2 float-right rounded overflow-y-scroll bg-gray-300 no-scrollbar bg-opacity-50">
        <div 
            v-for="(user, index) in activeUsers"
            v-bind:key="index"> 
            <span class="flex flex-row"><img :src="user.user.profile_photo_url" class="rounded-full h-6 mr-2"><b>{{user.user.name}}</b></span>
            ---{{user.region}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['activeUsers'],
}
</script>