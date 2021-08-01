<template>
    <div ref="canvas" class="h-full w-full">
        <h1 class="absolute text-white left-2 top-2">Topic: {{room.topic}}</h1>
    </div>
</template>

<script>
import * as THREE from 'three';
import { ThreeSetup, ThreeGeometries, ThreeAnimation, } from './threeControls';
import { ThreeSetup2 } from './threeControls2';
let threeSetup2, threeAnimation;

export default {
    props: ['messages', 'room', 'activeUsers', 'news'],
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
                this.generateUserModel(user, this.$page.props.user.name);
            })
            
            // console.log(threeSetup.scene.getObjectByName('Sphere').getObjectByName(1));
        },
        messages(newVal, oldVal){
            if(typeof oldVal[0] !== 'undefined'){
                console.log('new message', newVal[0]);
                this.createMessagePayload(newVal[0]);
            }
        },
        news(newVal, oldVal){
            if(typeof newVal !== 'undefined'){
                console.log('new fetched', newVal);
                this.createNewsMarkers(newVal);
            }
        }
    },
    methods: {
        calculateDimension() {
            this.componentHeight = this.$refs.canvas.clientHeight;
            this.componentWidth = this.$refs.canvas.clientWidth;
        },
        initThree() {
            // threeSetup = new ThreeSetup( this.componentWidth, this.componentHeight, this.$refs.canvas );
            // threeSetup.init();
            threeSetup2 = new ThreeSetup2( this.componentWidth, this.componentHeight, this.$refs.canvas );
            threeSetup2.init();
        },

        createPlane() {
            // ThreeGeometries.createGlobe(threeSetup.scene);
            // ThreeGeometries.createPointLight(threeSetup.scene);
            // ThreeGeometries.createParticles(threeSetup.scene);
            threeSetup2.createGlobe();
            threeSetup2.createPointLight();
            threeSetup2.createParticles();
        },
        animate() {
            // threeAnimation = new ThreeAnimation(threeSetup.scene,threeSetup.renderer, threeSetup.camera, threeSetup.controls);
            // threeAnimation.tick();
            threeSetup2.tick()
        },
        renderThree() {
            this.calculateDimension();
            this.initThree();
            this.createPlane();
            this.animate();
        },
        generateUserModel(user, sessionUser) {
            // ThreeGeometries.createUserModel(threeSetup.scene, user);
            // threeAnimation.movement.user.push(user.user.id);
            threeSetup2.createUserModel(user, sessionUser);
            // threeSetup2.movement.user.push(user.user.id);
        },
        createMessagePayload(message){
            // let payloadPath = ThreeGeometries.createMessagePayload(threeSetup.scene, message);
            // threeAnimation.movement.payloads.push({
            //     payloadId: message.id,
            //     curve: payloadPath,
            //     fraction: 0.03,
            // });
            let payloadPath = threeSetup2.createMessagePayload(message);
            threeSetup2.movement.payloads.push({
                payloadId: message.id,
                curve: payloadPath,
                fraction: 0.03,
            });
        },
        createNewsMarkers(articles){
            // ThreeGeometries.createNewsMarkers(threeSetup.scene, articles);
            // threeAnimation.movement.news = articles;
            threeSetup2.createNewsMarkers(articles);
        }
        
    },
}
</script>