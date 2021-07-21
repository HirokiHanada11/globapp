<template>
    <div ref="canvas" class="h-96 w-full">
        <h1 style="position:absolute">{{room.name}}<br> Region: {{room.region}}</h1>
    </div>
</template>

<script>
import * as THREE from 'three';
import { ThreeSetup, WorldRegionsCoors } from './threeControls';
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
            threeSetup.camera.position.z = 40;
            threeSetup.camera.position.y = -20;
            threeSetup.camera.lookAt(0,0,0);

            threeSetup.renderer.setSize( threeSetup.width, threeSetup.height );
            threeSetup.canvas.appendChild( threeSetup.renderer.domElement);
        },

        createPlane() {
            let geometry = new THREE.PlaneGeometry( 100, 50 );
            let loader = new THREE.TextureLoader();
            loader.load(
                this.mapURL,
                (texture) => {
                    let material = new THREE.MeshBasicMaterial( {map: texture} );
                    let plane = new THREE.Mesh( geometry, material );
                    threeSetup.scene.add( plane );
                },
                undefined,
                (err) => {console.error(err)}
            );
            let gridHelper = new THREE.GridHelper( 100, 10 );
            gridHelper.rotateX(Math.PI / 2);
            gridHelper.position.z = 1;
            threeSetup.scene.add( gridHelper );
        },
        animate() {
            requestAnimationFrame( this.animate );
            threeSetup.renderer.render( threeSetup.scene, threeSetup.camera );
        },
        renderThree() {
            this.calculateDimension();
            this.initThree();
            this.createPlane();
            this.animate();
        },
        generateUserModel(user) {
            let coords = this.getRandomCoords( WorldRegionsCoors[user.region] );
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