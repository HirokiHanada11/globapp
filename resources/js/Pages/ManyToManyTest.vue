<template>
    Subbed rooms
    <div v-for="(room, index) in rooms" :key="index">
        {{room.name}}    
    </div>
</template>

<script>
export default {
    data() {
        return {
            rooms: new Array(),
            users: new Array(),
        }
    },
    async created() {
        try{
            let response = await axios.get('/subbed');
            console.log(response);
            this.rooms = await response.data[0].chatrooms;
        }catch(e){
            console.error(e)
        }
        try{
            let response = await axios.get('/subbedusers');
            console.log(response);
            this.users = await response.data;
        }catch(e){
            console.error(e)
        }
    }
}
</script>