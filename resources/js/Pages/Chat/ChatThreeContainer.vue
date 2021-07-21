<template>
    <div ref="canvas" class="h-96 w-full">
        <h1 style="position:absolute">{{room.name}}<br> Region: {{room.region}}</h1>
    </div>
</template>

<script>
import * as THREE from 'three';
import { ThreeSetup } from './threeControls';
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
        // activeUsers(newVal, oldVal){
        //     console.log("activeusers changed", oldVal,"->",newVal);
        //     newVal.forEach((user)=>{
        //         this.generateUserModel(user);
        //     })
        // }
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
            console.log(this.mapURL);
        },
        calculateDimension() {
            this.componentHeight = this.$refs.canvas.clientHeight;
            this.componentWidth = this.$refs.canvas.clientWidth;
        },
        initThree() {
            threeSetup = new ThreeSetup( this.componentWidth, this.componentHeight, this.$refs.canvas );
            threeSetup.camera.position.z = 5;
            threeSetup.camera.position.y = -5;
            threeSetup.camera.lookAt(0,0,0);

            threeSetup.renderer.setSize( threeSetup.width, threeSetup.height );
            threeSetup.canvas.appendChild( threeSetup.renderer.domElement);
        },

        createPlane() {
            let geometry = new THREE.PlaneGeometry( 14, 7 );
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
    },
}
</script>