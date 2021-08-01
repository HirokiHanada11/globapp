import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {nameToCoords, soucresToCountry} from "./countries.js";

//class for setting up three js 
export class ThreeSetup2 {
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
        // this.controls = new OrbitControls(this.camera, this.canvas);
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.objectsInScene = [];
        this.clock = new THREE.Clock();
        this.axis = new THREE.Vector3();
        this.up = new THREE.Vector3(0,1,0);
        this.target = new THREE.Vector3(50,0,0);
        this.movement = { //setting trusy values here will trigger corresponding animations 
            camera: false,
            user: [],
            water: true,
            payloads: [],
            news: [],
            sphereControl: false,
            sphereControlOrigin: new THREE.Vector2(),
            sphereRotation: new THREE.Vector2(0.1, 0),
        };
    }
    init = () => {
        this.camera.position.set(0, 0, 50);
        this.camera.lookAt(15,0,0);

        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(new THREE.Color('#1d2951'),1);
        this.canvas.appendChild(this.renderer.domElement);

        // this.controls.enableDamping = true;
        // this.controls.target.set(15,0,0);

        this.canvas.addEventListener('click', (event) => this.meshClicked(event));
        this.canvas.addEventListener('mousemove', (event) => this.mouseMove(event))
    }

    meshClicked = (event) => {
        let rect = this.canvas.getBoundingClientRect();
        this.mouse.x = ( (event.clientX - rect.left) / this.width ) * 2 - 1;
        this.mouse.y = - ( (event.clientY - rect.top) / this.height ) * 2 + 1;
        let raycasterClick = new THREE.Raycaster();
        raycasterClick.setFromCamera(this.mouse, this.camera);
        let intersects = raycasterClick.intersectObjects(this.scene.getObjectByName('Sphere').getObjectByName('Markers').children, true);
        if (intersects.length > 0){
            console.log(intersects)
            let topPos = document.getElementById(intersects[0].object.name).offsetTop;
            console.log(topPos)
            document.getElementById("articles").scrollTop = topPos;
            console.log(document.getElementById("articles").scrollTop)
        }else {
            this.movement.sphereControl = !this.movement.sphereControl;
            this.movement.sphereControlOrigin.x = this.mouse.x;
            this.movement.sphereControlOrigin.y = this.mouse.y;
            if(!this.movement.sphereControl){
                this.movement.sphereRotation.set(0,0);
            }
        }
    }

    mouseMove = (event) => {
        let rect = this.canvas.getBoundingClientRect();
        this.mouse.x = ( (event.clientX - rect.left) / this.width ) * 2 - 1;
        this.mouse.y = - ( (event.clientY - rect.top) / this.height ) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        let intersects = this.raycaster.intersectObjects(this.scene.getObjectByName('Sphere').getObjectByName('Markers').children, true);
        if(intersects.length > 0){
            this.canvas.classList.add('cursor-pointer');
        }else if(this.canvas.classList.contains('cursor-pointer')){
            this.canvas.classList.remove('cursor-pointer');
        }else if(this.movement.sphereControl){
            this.movement.sphereRotation.copy(this.mouse.addScaledVector(this.movement.sphereControlOrigin, -1));
        }
    }
    
    //static function to create a sphere with world map texture wrapped. (Used over createPlane)
    createGlobe = () => {
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

        const markerGroup = new THREE.Group();
        markerGroup.name = 'Markers';
        sphereGroup.add(markerGroup);

        this.scene.add(sphereGroup);
        // this.objectsInScene.push(sphereGroup);
    }

    //static function to create background particles to represent stars
    createParticles(){
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
        this.scene.add(particles);
    }

    // static function to create light sources including sun light, ambient light, and point light for the message payload animation    
    createPointLight = () => {
        const lightsGroup = new THREE.Group();
        lightsGroup.name = "Lights";

        const ambientLight = new THREE.AmbientLight(0xffffed, 0.1);
        lightsGroup.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xffffed, 1);
        sunLight.position.set(0,0,150);
        sunLight.target.position.set(0,0,0);
        lightsGroup.add(sunLight, sunLight.target);

        this.scene.add(lightsGroup);

        for (let i = 0; i < 10; i++){
            let pointLight = new THREE.PointLight(new THREE.Color("#a7d8de"),0.5);
            pointLight.name = `light${i}`;
            this.scene.add(pointLight);
        }
    }

    //static function to create user model when user joins the room, the model generated is a placeholder at the moment, planning to develop more complex models in the future
    createUserModel = (user, sessionUser) =>{
        const coords = this.getCoords(user.region);
        const userModel = new THREE.Group;
        userModel.name = user.user.name;

        let cylinderGeometry = new THREE.CylinderGeometry( 1.2, 0.2, 3, 32);
        let sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );

        let material = new THREE.MeshBasicMaterial();
        if(userModel.name === sessionUser){
            material.color = new THREE.Color(0xff0000);
        }else {
            material.color = new THREE.Color("#808080");
        }
        

        const sphere = new THREE.Mesh(sphereGeometry,material);
        const cylinder = new THREE.Mesh(cylinderGeometry,material);
        sphere.position.z = -4;
        cylinder.position.z = -2;
        cylinder.rotateX( Math.PI / 2);

        userModel.add(sphere, cylinder);
        userModel.position.setFromSphericalCoords(20, coords.phi, coords.theta);
        userModel.lookAt(0,0,0);

        this.scene.children[0].add(userModel);
    } 

    //static function to create message payload object and its path for message sent animation. 
    //returns a curve that reprsents the path of the payload that it travels on
    createMessagePayload = (message) =>{
        const userModel = this.scene.getObjectByName('Sphere').getObjectByName(message.user.name);
        const position = new THREE.Vector3();
        position.setFromMatrixPosition(userModel.matrixWorld);

        const tarilGeometry = new THREE.CylinderBufferGeometry(0.2,0.7, 1, 8, 8, false);
        const trailMaterial = new THREE.PointsMaterial({size:0.0005}) 
        const trail = new THREE.Points(tarilGeometry, trailMaterial);

        const tarilGeometry2 = new THREE.CylinderBufferGeometry(0.4,0.1, 3.5, 8, 8, false);
        const trailMaterial2 = new THREE.PointsMaterial({size:0.0005}) 
        const trail2 = new THREE.Points(tarilGeometry2, trailMaterial2);
        trail2.position.y = -2;

        const trailGroup = new THREE.Group();
        trailGroup.name = message.id;
        trailGroup.add(trail);
        trailGroup.add(trail2);
        trailGroup.position.set(position.x, position.y, position.z);
        this.scene.add(trailGroup);

        const target = new THREE.Vector3(80,0,0);
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
        // console.log(p0,p1,p2,p3)
        return new THREE.CubicBezierCurve3(p0,p1,p2,p3);
    }

    //static function to create news article markers
    createNewsMarkers = (articles) => {
        const markerGroup = this.scene.getObjectByName('Sphere').getObjectByName('Markers');
        
        const circleGeometry = new THREE.CircleBufferGeometry(0.75, 32);
        const loader = new THREE.TextureLoader();
        articles.forEach((article, index) => {
            if(typeof soucresToCountry[article.source.name] !== 'undefined'){
                let pngNum = index + 1;
                let numberTexture = loader.load("/textures/numbers/number" + pngNum + ".png");
                const material = new THREE.MeshStandardMaterial({
                    map: numberTexture
                });
                let marker = new THREE.Mesh(circleGeometry, material);
                marker.name = 'news' + index; 
                markerGroup.add(marker);
                let markerCoords = this.getCoordsFromSource(article.source);
                marker.position.setFromSphericalCoords( 22, markerCoords.phi, markerCoords.theta );
                this.movement.news.push(index);
            }
        });
    } 

    //global function to retrieve coodinates of a country by their name
    getCoords = (region) => {
        const coords = nameToCoords[region];
        const jittering = this.createJittering();
        return {
            phi: (90 - coords[0] + jittering.phiJit) * Math.PI / 180,
            theta: (90 + coords[1] + jittering.thetaJit) * Math.PI / 180,
        }
    }

    getCoordsFromSource = (source) => {
        const coords = soucresToCountry[source.name];
        const jittering = this.createJittering();
        return {
            phi: ((90 - coords.coords[0] + jittering.phiJit) * Math.PI / 180),
            theta: ((90 + coords.coords[1] + jittering.thetaJit) * Math.PI / 180) ,
        }
    }
    
    createJittering = () => {
        return {
            phiJit: Math.floor(Math.random() * (10 + 10) - 10),
            thetaJit: Math.floor(Math.random() * (10 + 10) - 10), 
        }
    }

    tick = () => {
        const elapsedTime = this.clock.getElapsedTime();
        let sphere = this.scene.children[0]
        sphere.rotation.y += this.movement.sphereRotation.x / 40;
        sphere.rotation.x -= this.movement.sphereRotation.y / 60;
        if(sphere.rotation.x > Math.PI / 4){
            sphere.rotation.x = Math.PI / 4;
        } else if(sphere.rotation.x < - Math.PI / 4){
            sphere.rotation.x = - Math.PI / 4;
        }
        this.scene.children[2].rotation.y = -0.005 * elapsedTime;
        this.scene.children[2].rotation.x = -0.005 * elapsedTime;

        // this.controls.update();

        if (this.movement.camera){ //camera movement 
            this.camera.position.x = 4 * Math.cos(elapsedTime * 0.1);
            this.camera.position.y = 2 * Math.sin(elapsedTime * 0.1) - 20; 
            this.camera.lookAt(0,0,0);
        }
        if (this.movement.water){ //wave animation
            sphere.children[1].material.normalScale.set( Math.sin(elapsedTime*0.3), Math.cos(elapsedTime*0.3));
        }

        if(this.movement.user.length > 0){ //user animation, currenty unset
            let userModel = this.scene.children[0].getObjectByName(this.movement.user[0]);
            let position = new THREE.Vector3();
            position.setFromMatrixPosition(userModel.matrixWorld);
        }

        if(this.movement.payloads.length > 0){ //message sent animation
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
                this.movement.payloads = this.movement.payloads.filter(payload => payload.fraction < 1);
                console.log(this.movement.payloads)
                f = false;
            }
        }

        if(this.movement.news.length > 0){
            // console.log(this.camera.position)
            this.movement.news.forEach((index) => {
                let marker = this.scene.getObjectByName('Sphere').getObjectByName('Markers').getObjectByName('news' + index);
                marker.lookAt(this.camera.position);
            })
        }

        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.tick);
    }
}

