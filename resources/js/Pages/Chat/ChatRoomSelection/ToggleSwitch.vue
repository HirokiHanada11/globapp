<template>
    <div class="flex justify-between items-center" @click="toggle">
        <h2 class="text-white">All </h2>
        <div class="w-12 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out mx-2 cursor-pointer" :class="{ 'bg-green-400': toggleActive}">
            <div class="bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out" :class="{ 'translate-x-4': toggleActive,}"></div>
        </div>
        <h2 class="text-white"> SUBBED</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                toggleActive: false,
            };
        },
        methods: {
            toggle () {
                this.toggleActive = !this.toggleActive;
                this.$emit('toggled', this.toggleActive);
            }
        }
    }
</script>