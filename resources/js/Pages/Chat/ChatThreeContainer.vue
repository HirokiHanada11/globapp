<template>
    <div ref="canvas" class="h-full w-full">
        <h1 class="absolute text-white left-2 top-2">Topic: {{room.topic}}</h1>
    </div>
</template>

<script>
import * as THREE from 'three';
import { ThreeSetup, ThreeGeometries, ThreeAnimation, WorldRegionsCoors, } from './threeControls';
let threeSetup;

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
            // let filtered = newVal.filter(user => !(oldVal.includes(user)));
            // console.log('filtered array',filtered)
            // filtered.forEach((user)=>{
            //     this.generateUserModel(user);
            // })
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
            let threeAnimation = new ThreeAnimation(threeSetup.scene,threeSetup.renderer, threeSetup.camera);
            threeAnimation.tick();
        },
        renderThree() {
            this.calculateDimension();
            this.initThree();
            this.createPlane();
            this.animate();
            console.log(threeSetup.scene.children)
        },
        generateUserModel(user) {
            let coordsSet = this.roomRegion == 'World' ? WorldRegionsCoors[user.region] : JapanRegionsCoors[user.region];
            let coords = this.getRandomCoords( coordsSet );
            let modelGroup = new THREE.Group();

            let cylinderGeometry = new THREE.CylinderGeometry( 1.2, 0.2, 3, 32);
            let sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );

            let material = new THREE.MeshBasicMaterial();
            material.color = new THREE.Color(0xff0000);

            const sphere = new THREE.Mesh(sphereGeometry,material);
            const cylinder = new THREE.Mesh(cylinderGeometry,material);

            cylinder.position.z = 2;
            cylinder.position.x = coords.x;
            cylinder.position.y = coords.y;
            cylinder.rotateX(- Math.PI / 2);
            sphere.position.z = 4;
            sphere.position.x = coords.x;
            sphere.position.y = coords.y;

            modelGroup.add(cylinder);
            modelGroup.add(sphere);   

            threeSetup.scene.add(modelGroup);
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