<template>
    <jet-authentication-card>
        <template #logo>
            <div class="flex flex-col justify-center items-center">
                <img :src="currentRoom.photo" class="rounded-full w-16 h-16">
                <h2 class="text-center"><b>{{currentRoom.name}}</b></h2>
                <h3 class="text-center">{{currentRoom.description}}</h3>
            </div>
        </template>

        <jet-validation-errors class="mb-4" />

        <form @submit.prevent="submit">
            <div>
                <jet-label for="name" value="Name" />
                <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <inertia-link :href="route('joinRoom', {'roomId': roomId})" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Already have an account?
                </inertia-link>

                <jet-button class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Next
                </jet-button>
            </div>
        </form>
    </jet-authentication-card>
</template>

<script>
    import JetAuthenticationCard from '@/Jetstream/AuthenticationCard'
    import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo'
    import JetButton from '@/Jetstream/Button'
    import JetInput from '@/Jetstream/Input'
    import JetCheckbox from "@/Jetstream/Checkbox";
    import JetLabel from '@/Jetstream/Label'
    import JetValidationErrors from '@/Jetstream/ValidationErrors'

    export default {
        components: {
            JetAuthenticationCard,
            JetAuthenticationCardLogo,
            JetButton,
            JetInput,
            JetCheckbox,
            JetLabel,
            JetValidationErrors
        },
        
        props: ['roomId'],

        data() {
            return {
                form: this.$inertia.form({
                    name: '',
                    'is_guest_at': this.roomId,
                }),
                currentRoom: new Object(),
            }
        },

        methods: {
            submit() {
                this.form.post(this.route('register'), {
                    onFinish: () => this.form.reset('password', 'password_confirmation'),
                })
            }
        },

        async mounted (){
            let response = await axios.get(`/guest/invited/${this.roomId}`);
            this.currentRoom = await response.data;
        }
    }
</script>
