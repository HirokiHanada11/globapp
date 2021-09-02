<template>
    <div class="relative min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 overflow-hidden">
        <div v-if="canLogin" class="absolute bottom-1/2 left-1/4 sm:block flex w-1/4">
            <div 
                v-if="showTitle"
                class="text-7xl text-gray-100 flex-grow justify-center flex"
                v-bind:class="{'animate-fade-in-up':showTitle}">
                Globe Chat
                
                <inertia-link 
                    v-if="$page.props.user && showTitle" 
                    :href="route('chatrooms')" 
                    class="text-3xl text-gray-100 border-2 rounded hover:bg-gray-100 hover:bg-opacity-70 hover:text-blue-800 flex-shrink"
                    v-bind:class="{'animate-fade-in-up':showTitle}">
                    Go to Chat Rooms
                </inertia-link>

                <div v-else-if="showTitle" class="m-5 " v-bind:class="{'animate-fade-in-up':showTitle}">
                    <inertia-link 
                        :href="route('login')" 
                        class="text-3xl text-gray-100 border-2 rounded hover:bg-gray-100 hover:bg-opacity-70 hover:text-blue-800">
                        Log in
                    </inertia-link>

                    <inertia-link 
                        v-if="canRegister" 
                        :href="route('register')" 
                        class=" text-3xl text-gray-100 border-2 rounded hover:bg-gray-100 hover:bg-opacity-70 hover:text-blue-800">
                        Register
                    </inertia-link>
                </div>
            </div>

        </div>
        <div ref="canvas" class="h-screen w-full no-scrollbar ">
        </div>
    </div>
        
</template>

<script>
import { ThreeSetup2 } from './Chat/ThreeJS/threeControls2';
let threeSetup;

    export default {
        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            laravelVersion: String,
            phpVersion: String,
        },
        data (){
            return {
                camera: true, 
                showTitle: false,
                showOptions: false,
                componentHeight: null,
                componentWidth: null,
            }
        },
        methods: {
            calculateDimension() {
                this.componentHeight = this.$refs.canvas.clientHeight;
                this.componentWidth = this.$refs.canvas.clientWidth;
            },
            initThree() {
                threeSetup = new ThreeSetup2( this.componentWidth, this.componentHeight, this.$refs.canvas , 1);
                threeSetup.init();
            },
            createPlane() {
                threeSetup.createGlobe();
                threeSetup.createParticles();
                threeSetup.createPointLight();
            },
            animate() {
                threeSetup.tick()
            },
            renderThree() {
                this.calculateDimension();
                this.initThree();
                this.createPlane();
                this.animate();
                this.setCamera();
            },
            setCamera(){
                this.toggleCamera();
                threeSetup.moveCamera(this.camera);
            },
            toggleCamera(){
                this.camera = !this.camera;
            }        
        },
        mounted (){
            this.renderThree();
            setTimeout(() => this.showTitle = true, 1500);
            // setTimeout(() => this.showOptions = true, 200);
        },
        beforeUnmount(){
            this.setCamera();
        }
    }
</script>
