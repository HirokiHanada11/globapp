<template>
    <div class="h-30 w-3/4 p-2 m-2 float-right rounded overflow-y-scroll bg-gray-300 no-scrollbar bg-opacity-50">
        <div 
            v-for="(user, index) in activeUsers.usersList"
            v-bind:key="index"> 
            <span class="flex flex-row my-1 gap-1"><img :src="user.profile_photo_url" class="rounded-full h-6 "><b>{{user.name}}</b>--{{user.pivot.region}}</span>
            
        </div>
    </div>
</template>

<script>
export default {
    props: ['activeUsers'],
}
</script>