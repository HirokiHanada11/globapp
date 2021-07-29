import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {CountriesShort} from "./countries.js";

export class ThreeSetup {
    constructor(width, height, canvas) {
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({
            alpha: false, 
            antialias: true,
        });
        this.controls = new OrbitControls(this.camera, this.canvas);
    }
    init = () => {
        this.camera.position.set(15, 0, 50);
        this.camera.lookAt(15,0,0);

        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(new THREE.Color('#1d2951'),1);
        this.canvas.appendChild(this.renderer.domElement);

        this.controls.enableDamping = true;
        this.controls.target.set(15,0,0);
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
        let height = loader.load('/textures/world-height-map-v8.jpg');
        let texture = loader.load('/textures/world-height-map-v8.jpg');

        const landGeometry = new THREE.SphereBufferGeometry(20, 512, 256);

        let landMaterial = new THREE.MeshStandardMaterial( {
            map: texture,
            color: new THREE.Color('#7da27e'),
            displacementMap: height,
            displacementScale: 1,
        } );

        let landSphere = new THREE.Mesh( landGeometry, landMaterial );
        landSphere.name = "Land";
        // landSphere.rotateY(0.937032369);
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

        const ambientLight = new THREE.AmbientLight(0xffffed, 0.1);
        lightsGroup.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xffffed, 1);
        sunLight.position.set(0,0,150);
        sunLight.target.position.set(0,0,0);
        lightsGroup.add(sunLight, sunLight.target);

        scene.add(lightsGroup);

        for (let i = 0; i < 3; i++){
            let pointLight = new THREE.PointLight(new THREE.Color("#a7d8de"),0.5);
            pointLight.name = `light${i}`;
            scene.add(pointLight);
        }
    }

    static createUserModel = (scene, user) =>{
        const coords = getCoords(user.region);
        const userModel = new THREE.Group;
        userModel.name = user.user.id;

        let cylinderGeometry = new THREE.CylinderGeometry( 1.2, 0.2, 3, 32);
        let sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );

        let material = new THREE.MeshBasicMaterial();
        material.color = new THREE.Color(0xff0000);

        const sphere = new THREE.Mesh(sphereGeometry,material);
        const cylinder = new THREE.Mesh(cylinderGeometry,material);
        sphere.position.z = -4;
        cylinder.position.z = -2;
        cylinder.rotateX( Math.PI / 2);

        userModel.add(sphere, cylinder);
        userModel.position.setFromSphericalCoords(20, coords.phi, coords.theta);
        userModel.lookAt(0,0,0);

        scene.children[0].add(userModel);
    }

    static createMessagePayload = (scene, message) =>{
        const userModel = scene.getObjectByName('Sphere').getObjectByName(message.user.id);
        const position = new THREE.Vector3();
        position.setFromMatrixPosition(userModel.matrixWorld);

        // const geometry = new THREE.SphereBufferGeometry( 0.2, 8, 8 );
        // const material = new THREE.MeshStandardMaterial( { color: new THREE.Color("#a7d8de"), } );
        // const lathe = new THREE.Mesh( geometry, material );
        // lathe.name = "Lathe";
        

        const tarilGeometry = new THREE.CylinderBufferGeometry(0.2,0.7, 1, 8, 8, false);
        // const trailMaterial = new THREE.MeshStandardMaterial( { color: new THREE.Color("#85b0bd"), emissiveIntensity: 0.5} );
        // const trail = new THREE.Mesh( tarilGeometry, trailMaterial );
        const trailMaterial = new THREE.PointsMaterial({size:0.0005}) 
        const trail = new THREE.Points(tarilGeometry, trailMaterial);

        const tarilGeometry2 = new THREE.CylinderBufferGeometry(0.4,0.1, 3.5, 8, 8, false);
        // const trailMaterial2 = new THREE.MeshStandardMaterial( { color: new THREE.Color("#85b0bd") } );
        // const trail2 = new THREE.Mesh( tarilGeometry2, trailMaterial2 );
        const trailMaterial2 = new THREE.PointsMaterial({size:0.0005}) 
        const trail2 = new THREE.Points(tarilGeometry2, trailMaterial2);
        trail2.position.y = -2;

        const trailGroup = new THREE.Group();
        trailGroup.name = message.id;
        trailGroup.add(trail);
        trailGroup.add(trail2);
        trailGroup.position.set(position.x, position.y, position.z);
        scene.add(trailGroup);

        const target = new THREE.Vector3(50,0,0);
        let p1 = new THREE.Vector3();
        let p2 = new THREE.Vector3();
        let px = new THREE.Vector3();
        let py = new THREE.Vector3();
        let p = new THREE.Vector3();
        let p0 = position;
        let p3 = target;
        let angle = Math.abs(position.angleTo(target));
        if (angle > Math.PI/2){
            px.set(0, p0.y, p0 .z).normalize();
            py.copy(p3).normalize();
            p2.copy(px).multiplyScalar(40*angle/Math.PI);
            p1.copy(p0).add(p.copy(px).multiplyScalar(40*angle/Math.PI)).add(py.multiplyScalar(-5));
        }
        else{
            px.set(0, p0.y, p0 .z).normalize();
            py.copy(p3).normalize();
            p1.copy(px).multiplyScalar(30*(angle / (Math.PI/2))).add(p.copy(py).multiplyScalar(5));
            p2.copy(px).multiplyScalar(30*(angle / (Math.PI/2))).add(p.copy(py).multiplyScalar(30));
        }
        console.log(p0,p1,p2,p3)
        return new THREE.CubicBezierCurve3(p0,p1,p2,p3);
    }

}

const getCoords = (region) => {
    const coords = CountriesShort[region];
    console.log(region);
    console.log(CountriesShort)
    return {
        phi: (90 - coords[0]) * Math.PI / 180,
        theta: (90 + coords[1]) * Math.PI / 180,
    }
}

export class ThreeAnimation {
    constructor(scene, renderer, camera, controls){
        this.movement = {
            camera: false,
            user: [],
            water: true,
            payloads: [],
        };
        this.clock = new THREE.Clock();
        this.scene = scene;
        this.renderer = renderer;
        this.camera = camera;
        this.controls = controls;
        this.axis = new THREE.Vector3();
        this.up = new THREE.Vector3(0,1,0);
        this.target = new THREE.Vector3(50,0,0);
    }
    tick = () => {
        const elapsedTime = this.clock.getElapsedTime();
        if (this.movement.camera){
            this.camera.position.x = 4 * Math.cos(elapsedTime * 0.1);
            this.camera.position.y = 2 * Math.sin(elapsedTime * 0.1) - 20; 
            this.camera.lookAt(0,0,0);
        }
        if (this.movement.water){
            this.scene.children[0].children[1].material.normalScale.set( Math.sin(elapsedTime*0.3), Math.cos(elapsedTime*0.3));
        }
        this.scene.children[0].rotation.y = 0.3 * elapsedTime;
        this.scene.children[2].rotation.y = -0.005 * elapsedTime;
        this.scene.children[2].rotation.x = -0.005 * elapsedTime;

        this.controls.update();

        if(this.movement.user.length > 0){
            let userModel = this.scene.children[0].getObjectByName(this.movement.user[0]);
            // console.log(userModel.matrixWorld)
            let position = new THREE.Vector3();
            position.setFromMatrixPosition(userModel.matrixWorld);
            //console.log(position);
        }

        if(this.movement.payloads.length > 0){
            let f = false;
            this.movement.payloads.map((payload, index) => {
                let payloadModel = new THREE.Object3D();
                payloadModel = this.scene.getObjectByName(payload.payloadId);
                if (typeof payload.light === 'undefined'){
                    payload.light = this.scene.getObjectByName(`light${index}`)
                }
                if(payload.fraction < 1){
                    let lightPosition = payload.curve.getPoint(payload.fraction);
                    payload.light.position.copy(lightPosition);

                    let newPostion = payload.curve.getPoint(payload.fraction-0.02);
                    let tangent = payload.curve.getTangent(payload.fraction-0.02);
                    let radians = this.up.angleTo(this.target);
                    this.axis.crossVectors(this.up,tangent).normalize();
                    payloadModel.position.copy(newPostion);
                    payloadModel.quaternion.setFromAxisAngle(this.axis,radians);
                    payload.fraction += 0.01;
                    return payload;
                } else{
                    this.scene.remove(payloadModel);
                    payload.light.position.set(0,0,0);
                    f = true;
                    return null;
                }
            });
            if(f){
                this.movement.payloads = this.movement.payloads.filter(payload => payload !== null);
                f = false;
            }
        }

        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.tick);
    }

}

//set in polar coords
//center = 90, -90 
//in map: 90 - real lat, 90 + real long 
export const WorldRegionsCoors = {
    'Asia': {
        maxLat: 75,
        minLat: 30,
        maxLon: 240,
        minLon: 150
    },
    'Oceania': {
        maxLat: 90,
        minLat: 135,
        maxLon: -120,
        minLon: -150
    }, 
    'North America': {
        maxLat: 75,
        minLat: 20,
        maxLon: 30,
        minLon: -30
    }, 
    'South America': {
        maxLat: 135,
        minLat: 90,
        maxLon: 60,
        minLon: 15
    }, 
    'Europe': {
        maxLat: 60,
        minLat: 20,
        maxLon: 150,
        minLon: 75
    }, 
    'Africa (North)': {
        maxLat: 75,
        minLat: 60,
        maxLon: 120,
        minLon: 75
    }, 
    'Africa (South)': {
        maxLat: 120,
        minLat: 75,
        maxLon: 135,
        minLon: 75
    }, 
    'Middle East': {
        maxLat: 75,
        minLat: 45,
        maxLon: 150,
        minLon: 120
    }
}