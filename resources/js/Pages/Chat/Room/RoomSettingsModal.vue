<template>
    <modal :show="showModal" @close="$emit('close')">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 relative" style="height:70vh">
            Modal
        </div>
    </modal>

</template>

<script>
    import Modal from '../../../Jetstream/Modal.vue'
    export default {
        components: { Modal },
        props: ['showModal'],
    }
</script>