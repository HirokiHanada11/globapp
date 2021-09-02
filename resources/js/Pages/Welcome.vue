<template>
    <div ref="canvas" class="h-screen w-full overflow-hidden relative">
        <div v-if="canLogin && showTitle" class="absolute bottom-1/2 left-1/4 w-1/4 sm:block">     
            <div class="text-7xl text-gray-100 w-full flex flex-grow justify-center"
                v-bind:class="{'animate-fade-in-up':showTitle}">
                Globe Chat
            </div>
            
            <div
                v-if="$page.props.user"                     
                class="justify-center flex flex-grow w-full"
                v-bind:class="{'animate-fade-in-up':showTitle}">
                <inertia-link 
                    :href="route('chatrooms')" 
                    class="text-3xl text-gray-100 border-2 rounded px-2 hover:bg-gray-100 hover:bg-opacity-80 hover:text-blue-800 hover:border-opacity-0">
                    Go to Chat Rooms
                </inertia-link>
            </div>

            <div 
                v-else-if="showTitle" 
                class="justify-center flex flex-grow w-full gap-2" 
                v-bind:class="{'animate-fade-in-up':showTitle}">
                <inertia-link 
                    :href="route('login')" 
                    class="text-3xl text-gray-100 border-2 rounded px-2 hover:bg-gray-100 hover:bg-opacity-80 hover:text-blue-800 hover:border-opacity-0">
                    Log in
                </inertia-link>
                <inertia-link 
                    v-if="canRegister" 
                    :href="route('register')"
                    class="text-3xl text-gray-100 border-2 rounded px-2 hover:bg-gray-100 hover:bg-opacity-80 hover:text-blue-800 hover:border-opacity-0">
                    Register
                </inertia-link>
            </div>
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
