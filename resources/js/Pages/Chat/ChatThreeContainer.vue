<template>
    <div ref="canvas" class="h-full w-full">
        <h1 class="absolute text-white left-2 top-2">Topic: {{room.topic}}</h1>
    </div>
</template>

<script>
import * as THREE from 'three';
import { ThreeSetup, ThreeGeometries, ThreeAnimation, WorldRegionsCoors, } from './threeControls';
let threeSetup, threeAnimation;

export default {
    props: ['messages', 'room', 'activeUsers'],
    data () {
        return {
            roomRegion: '',
            mapURL: '',
            componentHeight: 0,
            componentWidth: 0,
        }
    },
    watch: {
        room(newVal, oldVal){
            console.log("room changed", oldVal.name, "->", newVal.name);
            this.renderThree();
        },
        activeUsers(newVal, oldVal){
            console.log("activeusers changed", oldVal,"->",newVal);
            let filtered = newVal.filter(user => !(oldVal.includes(user)));
            console.log('filtered array',filtered)
            filtered.forEach((user)=>{
                this.generateUserModel(user);
            })
        }
    },
    methods: {
        calculateDimension() {
            this.componentHeight = this.$refs.canvas.clientHeight;
            this.componentWidth = this.$refs.canvas.clientWidth;
        },
        initThree() {
            threeSetup = new ThreeSetup( this.componentWidth, this.componentHeight, this.$refs.canvas );
            threeSetup.init();
        },

        createPlane() {
            ThreeGeometries.createGlobe(threeSetup.scene);
            ThreeGeometries.createPointLight(threeSetup.scene);
            ThreeGeometries.createParticles(threeSetup.scene);
        },
        animate() {
            threeAnimation = new ThreeAnimation(threeSetup.scene,threeSetup.renderer, threeSetup.camera, threeSetup.controls);
            threeAnimation.tick();
        },
        renderThree() {
            this.calculateDimension();
            this.initThree();
            this.createPlane();
            this.animate();
        },
        generateUserModel(user) {
            ThreeGeometries.createUserModel(threeSetup.scene, user);
            threeAnimation.movement.user.push(user.user.id);
        },
        getRandomCoords(coords) {
            return {
                x: Math.random() * (coords.maxX - coords.minX) + coords.minX,
                y: Math.random() * (coords.maxY - coords.minY) + coords.minY
            }
        }
        
    },
}
</script>