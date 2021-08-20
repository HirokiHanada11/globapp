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
        }
    },
    created() {
        axios.get('/subbed')
        .then(response => {
            console.log(response);
            this.rooms = response.data[0].chatrooms;
        })
        .catch(error => console.error(error));
    }
}
</script>