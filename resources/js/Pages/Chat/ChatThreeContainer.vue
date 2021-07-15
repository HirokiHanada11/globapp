<template>
    <div ref="canvas" class="h-96 w-full">
        <h1 style="position:absolute">{{room.name}}<br> Region: {{room.region}}</h1>
    </div>
</template>

<script>
import * as THREE from 'three';
let camera, scene, renderer, geometry, material, cube, loader, plane;

export default {
    props: ['messages', 'room'],
    data () {
        return {
            componentHeight: 0,
            componentWidth: 0,
        }
    },
    methods: {
        calculateDimension() {
            this.componentHeight = this.$refs.canvas.clientHeight;
            this.componentWidth = this.$refs.canvas.clientWidth;
        },
        initThree() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera( 75, this.componentWidth / this.componentHeight, 0.1, 1000 );
            camera.position.z = 5;
            camera.position.y = -5;
            camera.lookAt(0,0,0);
            renderer = new THREE.WebGLRenderer({ alpha: true});
            renderer.setSize( this.componentWidth, this.componentHeight );
            this.$refs.canvas.appendChild( renderer.domElement);
        },
        createShapes() {
            geometry = new THREE.BoxGeometry();
            material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            cube = new THREE.Mesh( geometry, material );
            cube.position.set(5,5,0)
            scene.add( cube );
        },
        createPlane() {
            geometry = new THREE.PlaneGeometry( 14, 7 );
            loader = new THREE.TextureLoader();
            loader.load(
                "textures/world-map-world-map-in-grey-hd-png.png",
                (texture) => {
                    material = new THREE.MeshBasicMaterial( {map: texture} );
                    plane = new THREE.Mesh( geometry, material );
                    scene.add( plane );
                },
                undefined,
                (err) => {console.error(err)}
            );
            
            
        },
        animate() {
            requestAnimationFrame( this.animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        }
    },
    mounted () {
        this.calculateDimension();
        console.log(this.componentHeight);
        console.log(this.componentWidth);

        this.initThree();

        this.createShapes();
        this.createPlane();

        this.animate();
    } 
}
</script>