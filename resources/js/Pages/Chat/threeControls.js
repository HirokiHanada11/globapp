import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class ThreeSetup {
    constructor(width, height, canvas) {
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({ alpha: false});
        this.controls = new OrbitControls(this.camera, this.canvas);
        
    }
    init = () => {
        this.camera.position.set(0, 0, 50);
        this.camera.lookAt(0,0,0);

        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(new THREE.Color('#1d2951'),1);
        this.canvas.appendChild(this.renderer.domElement);

        this.controls.enableDamping = true;
    }
}

export class ThreeGeometries {
    static createPlane(scene){
        const loader = new THREE.TextureLoader();
        const planeGroup = new THREE.Group();
        planeGroup.name = "Plane";

        let height = loader.load('/textures/monochrome-height.jpg');
        let texture = loader.load('/textures/monochrome-height.jpg'); 
    
        const landGeometry = new THREE.PlaneBufferGeometry( 100, 50, 1012, 1012 );
        let landMaterial = new THREE.MeshStandardMaterial( {
            map: texture,
            displacementMap: height,
            displacementScale: 1.5,
        } );
        let landPlane = new THREE.Mesh( landGeometry, landMaterial );
        landPlane.name = "Land";
        planeGroup.add( landPlane );

        const waterGeometry = new THREE.PlaneBufferGeometry( 150, 75, 16, 16);

       
        let waterMap = loader.load('/textures/water-normal-map.jpg');
        
        waterMap.wrapS = THREE.RepeatWrapping;
        waterMap.wrapT = THREE.RepeatWrapping;
        waterMap.repeat.set(4,2);

        let waterMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color('skyblue'),
            normalMap: waterMap
        })

        let waterPlane = new THREE.Mesh( waterGeometry, waterMaterial );
        waterPlane.position.z=0.5;
        waterPlane.name = "Water";
        planeGroup.add(waterPlane);
        const gridHelper = new THREE.GridHelper( 100, 10 );
        gridHelper.rotateX(Math.PI / 2);
        planeGroup.add(gridHelper);

        scene.add(planeGroup);
    }
    static createGlobe(scene){
        const sphereGroup = new THREE.Group();
        sphereGroup.name = "Sphere";

        let loader = new THREE.TextureLoader();
        let height = loader.load('/textures/monochrome-height.jpg');
        let texture = loader.load('/textures/monochrome-height.jpg');

        const landGeometry = new THREE.SphereBufferGeometry(20, 1024, 1024);

        let landMaterial = new THREE.MeshStandardMaterial( {
            map: texture,
            displacementMap: height,
            displacementScale: 1,
        } );

        let landSphere = new THREE.Mesh( landGeometry, landMaterial );
        landSphere.name = "Land";
        sphereGroup.add(landSphere);

        const waterGeometry = new THREE.SphereBufferGeometry(20.5, 32, 32);

        let waterMap = loader.load('/textures/water-normal-map.jpg');
        waterMap.wrapS = THREE.RepeatWrapping;
        waterMap.wrapT = THREE.RepeatWrapping;
        waterMap.repeat.set(4,2);

        let waterMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color('skyblue'),
            normalMap: waterMap
        })

        let waterSphere = new THREE.Mesh( waterGeometry, waterMaterial );
        waterSphere.name = "Water";
        sphereGroup.add(waterSphere);

        scene.add(sphereGroup);
    }

    static createParticles(scene){
        const particleGeometry = new THREE.BufferGeometry;
        const particleCount = 5000;

        const positions = new Float32Array(particleCount * 3);

        for(let i = 0; i < particleCount * 3; i++){
            positions[i] = (Math.random() - 0.5) * 500;
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            size: 0.05
        })
        const particles = new THREE.Points(particleGeometry, material);
        particles.name = "Stars";
        scene.add(particles);
    }

    static createPointLight(scene){
        const lightsGroup = new THREE.Group();
        lightsGroup.name = "Lights";

        const pointLight = new THREE.PointLight(0xffffed, 1);
        pointLight.position.x = 30;
        pointLight.position.y = 0;
        pointLight.position.z = 40;
        lightsGroup.add(pointLight);
        

        const pointLight2 = new THREE.PointLight(0xffffed, 1);
        pointLight2.position.x = -30;
        pointLight2.position.y = 0;
        pointLight2.position.z = 40;
        lightsGroup.add(pointLight2);

        scene.add(lightsGroup);
    }
}

export class ThreeAnimation {
    constructor(scene, renderer, camera){
        this.movement = {
            camera: false,
            user: [],
            water: true,
        };
        this.clock = new THREE.Clock();
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
    }
    tick = () => {
        const elapsedTime = this.clock.getElapsedTime();
        if (this.movement.camera){
            this.camera.position.x = 4 * Math.cos(elapsedTime * 0.1);
            this.camera.position.y = 2 * Math.sin(elapsedTime * 0.1) - 20; 
            this.camera.lookAt(0,0,0);
        }
        if (this.movement.water){
            this.scene.children[0].children[1].material.normalScale.set( Math.sin(elapsedTime), Math.cos(elapsedTime));
        }
        this.scene.children[0].rotation.y = 0.3 * elapsedTime;
        this.scene.children[2].rotation.y = -0.005 * elapsedTime;
        this.scene.children[2].rotation.x = -0.005 * elapsedTime;
        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.tick);
    }

}

export const JapanRegionsCoors = {
    'Hokkaido': {
        maxX:45,
        minX:15,
        maxY:20,
        minY:10
    },
    'Tohoku': {
        maxX:30,
        minX:15,
        maxY:10,
        minY:-5
    }, 
    'Kanto': {
        maxX:25,
        minX:10,
        maxY:-5,
        minY:-10
    }, 
    'Chubu': {
        maxX:10,
        minX:-5,
        maxY:5,
        minY:-15
    },
    'Kansai': {
        maxX:-5,
        minX:-15,
        maxY:-10,
        minY:-20
    }, 
    'Chugoku': {
        maxX:-15,
        minX:-45,
        maxY:-10,
        minY:-15
    }, 
    'Shikoku': {
        maxX:-10,
        minX:-30,
        maxY:-15,
        minY:-20
    }, 
    'Kyushu': {
        maxX:-30,
        minX:-45,
        maxY:-15,
        minY:-25
    }, 
    'Okinawa': {
        maxX:42,
        minX:38,
        maxY:-18,
        minY:-22
    },
}

export const WorldRegionsCoors = {
    'Asia': {
        maxX: 35,
        minX: 15,
        maxY: 0,
        minY: 20
    },
    'Oceania': {
        maxX: 45,
        minX: 25,
        maxY: -5,
        minY: -20
    }, 
    'North America': {
        maxX: -20,
        minX: -40,
        maxY: 20,
        minY: 0
    }, 
    'South America': {
        maxX: -15,
        minX: -25,
        maxY: -5,
        minY: -20
    }, 
    'Europe': {
        maxX: 10,
        minX: -7,
        maxY: 5,
        minY: 15
    }, 
    'Africa': {
        maxX: 10,
        minX: -10,
        maxY: 3,
        minY: -15
    }, 
    'Middle East': {
        maxX: 15,
        minX: 5,
        maxY: 5,
        minY: -5
    }
}