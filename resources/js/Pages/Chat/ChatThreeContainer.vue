<template>
    <div ref="canvas" class="h-full w-full">
        <h1 style="position:absolute">{{room.name}}<br> Region: {{room.region}}</h1>
    </div>
</template>

<script>
import * as THREE from 'three';
import { ThreeSetup, ThreeGeometries, ThreeAnimation, WorldRegionsCoors, JapanRegionsCoors } from './threeControls';
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
            console.log("room changed", oldVal.region, "->", newVal.region);
            if(newVal.region == 'World' || newVal.region == 'Japan'){
                this.roomRegion = newVal.region;
                this.setRegion();
                this.renderThree();
            }
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
        setRegion() {
            switch(this.roomRegion){
                case "World":
                    this.mapURL = "/textures/world-map-world-map-in-grey-hd-png.png";
                    break;
                case "Japan":
                    this.mapURL = "/textures/map_of_Japan.png";
                    break;
                default:
                    this.mapURL = "/textures/world-map-world-map-in-grey-hd-png.png";
                    break;
            }
            //console.log(this.mapURL);
        },
        calculateDimension() {
            this.componentHeight = this.$refs.canvas.clientHeight;
            this.componentWidth = this.$refs.canvas.clientWidth;
        },
        initThree() {
            threeSetup = new ThreeSetup( this.componentWidth, this.componentHeight, this.$refs.canvas );
            threeSetup.init();
        },

        createPlane() {
            let planeGroup = ThreeGeometries.createPlane();
            threeSetup.scene.add( planeGroup );

            let lightsGroup = ThreeGeometries.createPointLight();
            threeSetup.scene.add( lightsGroup );
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