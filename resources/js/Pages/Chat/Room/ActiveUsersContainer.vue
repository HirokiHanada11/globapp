<template>
    <div class="h-full w-11/12 p-2 my-2 self-end rounded overflow-y-scroll bg-transparent no-scrollbar ">
        <div 
            v-for="(user, index) in activeUsers.usersList"
            v-bind:key="index"> 
            <span class="flex flex-row my-1 gap-1 text-gray-200 text-lg"><img :src="user.profile_photo_url" class="rounded-full h-6 "><b>{{user.name}}</b>--{{user.pivot.region}}</span>
            
        </div>
    </div>
</template>

<script>
export default {
    props: ['activeUsers'],
}
</script>