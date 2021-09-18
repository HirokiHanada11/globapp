import * as THREE from 'three';
import {nameToCoords, soucresToCountry} from "./countries.js";
import { prefecToCoords } from './japanPrefecture.js';

//class for setting up three js 
export class ThreeSetup2 {
    constructor(width, height, canvas, welcome = 0) {
        this.welcome = welcome;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.plane = new THREE.Group();
        this.userModels = new THREE.Group();
        this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({
            alpha: false, 
            antialias: true,
        });
        // this.controls = new OrbitControls(this.camera, this.canvas);
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.objectsInScene = [];
        this.clock = new THREE.Clock();new THREE.Vector3();
        this.up = new THREE.Vector3(0,1,0);
        this.target = welcome ? undefined : new THREE.Vector3(50,0,0);
        this.movement = { //setting trusy values here will trigger corresponding animations 
            camera: new Object(),
            user: welcome ? undefined : true,
            water: true,
            payloads: [],
            // news: [],
            sphereControl: false,
            sphereControlOrigin: new THREE.Vector2(),
            sphereRotation: new THREE.Vector2(0.1, 0),
            fireworks: [],
        };
    }
    init = () => {
        window.addEventListener('resize', this.canvasRezizedHandler);

        this.welcome ? this.camera.position.set(-30, -15, 85) : this.camera.position.set(0, -15, 85);
        this.welcome ? this.camera.lookAt(-30, -30, 70) : this.camera.lookAt(0, -30, 70);
        this.movement.camera['init'] = false;
        this.movement.camera['targetPath'] = this.welcome ? new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(-30, -30, 70),
            new THREE.Vector3(-30,-30,20),
            new THREE.Vector3(-30,0,0)
        ) : new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(0, -30, 70),
            new THREE.Vector3(0,-30,20),
            new THREE.Vector3(0,0,0)
        );;
        this.movement.camera['positionPath'] = this.welcome ? new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(-30, -15, 85),
            new THREE.Vector3(-30,-15, 60),
            new THREE.Vector3(-30,0,60)
        ) : new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(0, -15, 85),
            new THREE.Vector3(0,-15, 60),
            new THREE.Vector3(0,0,60)
        );
        this.movement.camera['fraction'] = 0;
        this.movement.camera['animation'] = () => {};

        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(new THREE.Color('#1d2951'),1);
        this.canvas.appendChild(this.renderer.domElement);        
    }

    //function to handle canvas/window rezise
    canvasRezizedHandler = () => {
        this.width = this.canvas.getBoundingClientRect().width;
        this.height = this.canvas.getBoundingClientRect().height;
        console.log('canvas size changed to ', this.width, this.height);

        // Update camera
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    
        // Update renderer
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }


    //function for moveing camera from plane to sphere and vise versa
    moveCamera = (cameraNum) => {
        if(!cameraNum){
            this.movement.camera.init = true;
            this.movement.camera.fraction = 0.01;
            this.movement.camera['animation'] = this.cameraForward;
            // if(!this.welcome){
            //     this.canvas.addEventListener('click', this.meshClicked);
            //     this.canvas.addEventListener('mousemove', this.mouseMove);
            // }
        }else{
            this.movement.camera.init = true;
            this.movement.camera.fraction = 0.99;
            this.movement.camera['animation'] = this.cameraBackward;
            // if(!this.welcome){
            //     this.canvas.removeEventListener('click', this.meshClicked);
            //     this.canvas.removeEventListener('mousemove', this.mouseMove);
            // }
        }
    }

    //function for moving camera forward
    cameraForward = () => {
        if(this.movement.camera.fraction < 1){
            this.camera.position.copy(this.movement.camera.positionPath.getPoint(this.movement.camera.fraction));
            this.camera.lookAt(this.movement.camera.targetPath.getPoint(this.movement.camera.fraction));
            this.movement.camera.fraction += 0.01;
        }else if(this.movement.camera.fraction = 1){
            this.movement.camera.init = false;
            this.movement.camera.fraction = 0;
            this.movement.camera.animation = () => {};
        }
    }
    //function for moving camera backwards
    cameraBackward = () => {
        if(this.movement.camera.fraction > 0){
            this.camera.position.copy(this.movement.camera.positionPath.getPoint(this.movement.camera.fraction));
            this.camera.lookAt(this.movement.camera.targetPath.getPoint(this.movement.camera.fraction));
            this.movement.camera.fraction -= 0.01;
        }else if(this.movement.camera.fraction = 0){
            this.movement.camera.init = false;
            this.movement.camera.fraction = 0;
            this.movement.camera.animation = () => {};
        }
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
        // sphereGroup.position.set(0, 70, 30);
        sphereGroup.lookAt(this.camera.position);

        this.scene.add(sphereGroup);

        // const japanGeometry = new THREE.PlaneBufferGeometry(1,1);
        // const userModelGlobe = new THREE.Mesh(japanGeometry,new THREE.MeshBasicMaterial());
        // userModelGlobe.name = 'Japan'; 
        // sphereGroup.add(userModelGlobe);
        // let coords = this.getCoords('Japan');
        // userModelGlobe.position.setFromSphericalCoords(20,coords.phi,coords.theta);
    }

    //function to create base plane
    createPlane = () => {
        const loader = new THREE.TextureLoader();
        const planeGroup = new THREE.Group();
        planeGroup.name = "Plane";
        const userModels = new THREE.Group();
        userModels.name = "UserModels";
        
        let planeJapan = new THREE.PlaneBufferGeometry(40,30, 1024, 768); //new THREE.PlaneBufferGeometry(40,30, 2048, 1536);
        let japanHeight = loader.load("/textures/JP-EPS-01-0001.jpg");
        let japanTexture = loader.load("/textures/JP-EPS-01-0001.jpg");

        let japanMaterial = new THREE.MeshStandardMaterial( {
            map: japanTexture,
            color: new THREE.Color('#90ee90'),
            displacementMap: japanHeight,
            displacementScale: 0.5,
        } );

        let japanPlane = new THREE.Mesh(planeJapan, japanMaterial);
        japanPlane.name = "Japan";

        const waterGeometry = new THREE.CircleBufferGeometry(28, 32, ); //new THREE.PlaneBufferGeometry(40, 30, 32, 24);

        let waterMap = loader.load('/textures/water-normal-map.jpg');
        waterMap.wrapS = THREE.RepeatWrapping;
        waterMap.wrapT = THREE.RepeatWrapping;
        waterMap.repeat.set(4,2);

        let waterMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color('skyblue'),
            normalMap: waterMap
        });

        let waterPlane = new THREE.Mesh( waterGeometry, waterMaterial );
        waterPlane.name = 'Water';
        waterPlane.position.z = 0.3;

        planeGroup.add(japanPlane, waterPlane, userModels );
        planeGroup.position.set(0,-30, 70); 
        planeGroup.rotateX(-Math.PI/2);
        this.scene.add(planeGroup);
        this.plane = planeGroup;
        this.userModels = userModels;
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

        const ambientLight = new THREE.AmbientLight(0xffffed, 0.25);
        lightsGroup.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xffffed, 0.75);
        sunLight.position.set(0,0,150);
        sunLight.target.position.set(0,0,0);
        lightsGroup.add(sunLight, sunLight.target);

        const sunLight2 = new THREE.DirectionalLight(0xffffed, 0.7);
        sunLight2.position.set(0,75,70);
        sunLight2.target.position.set(0,-30,70);
        lightsGroup.add(sunLight2, sunLight2.target);

        this.scene.add(lightsGroup);
    }

    //static function to create user model when user joins the room, the model generated is a placeholder at the moment, planning to develop more complex models in the future
    createUserModel = (user, sessionUser, fallback_url) =>{
        const loader = new THREE.TextureLoader();
        const userModelPlane = new THREE.Group;
        userModelPlane.name = user.name;

        const circleGeometry = new THREE.CircleBufferGeometry( 0.3, 16 );
        const pyramidGeometry = new THREE.ConeBufferGeometry( 0.3, 0.6, 3);

        let bodyMaterial = new THREE.MeshBasicMaterial();
        let headMaterial = new THREE.MeshBasicMaterial();
        if(userModelPlane.name === sessionUser){
            // headMaterial.color = new THREE.Color(0xff0000);
            bodyMaterial.color = new THREE.Color(0xff0000);
        }else {
            // headMaterial.color = new THREE.Color("#808080");
            bodyMaterial.color = new THREE.Color(0x808080);
        }
        
        const body = new THREE.Mesh(pyramidGeometry,bodyMaterial);
        body.name = 'Body';

        headMaterial.map = loader.load(user.profile_photo_url);
        
        const head = new THREE.Mesh(circleGeometry,headMaterial);
        head.name = 'Head';
        head.position.z = 2;
        head.lookAt(this.camera.position);
        body.position.z = 1.25;
        body.rotateX(-Math.PI /2)

        userModelPlane.add(head, body);
        userModelPlane.position.x = (prefecToCoords[user.pivot.region][1] - 136.261570) * 43/45 + Math.random() * 1 - 0.5;
        userModelPlane.position.y = (prefecToCoords[user.pivot.region][0] - 35.837181) * 30/25 + Math.random() * 1 - 0.5;

        this.userModels.add(userModelPlane);
        // console.log(this.plane.getObjectByName('UserModels'));
    }

    //function to remove user model for the specified user
    removeUserModel = (user) => {
        let subjectModel = this.userModels.getObjectByName(user.name);
        this.userModels.remove(subjectModel);
    }
    
    
    //funtion to convert prefecture name to position on map
    prefecToCoordsOnMap = (prefec) => {
        return {
            x:(prefecToCoords[prefec][1] - 136.261570) * 43/45,
            y: (prefecToCoords[prefec][0] - 35.837181) * 30/25
        }
    }

    //static function to create message payload object and its path for message sent animation. 
    //returns a curve that reprsents the path of the payload that it travels on
    
    //function to set up animation for fireworks
    createMessageAnimation = (message, userRegion) => {
        let coords = this.userModels.getObjectByName(message.user.name).position;
        let mainColor = new THREE.Color("#" + Math.floor(Math.random() * 0xFFFFFF).toString(16));
        let subColor = new THREE.Color("#" + Math.floor(Math.random() * 0xFFFFFF).toString(16));
        // let randomColor = new THREE.Color("gray");
        let fireworkGroup = new THREE.Group();
        fireworkGroup.name = message.id;
        let payloadLight = new THREE.PointLight(mainColor, 0.5);
        let payloadStarGeometry = new THREE.SphereBufferGeometry(0.1, 16, 16);
        let mainMaterial = new THREE.PointsMaterial({
            color: mainColor,
            size: 0.008,
        });
        let subMaterial = new THREE.PointsMaterial({
            color: subColor,
            size: 0.005,
        });
        let payloadStar = new THREE.Points(payloadStarGeometry, mainMaterial);
        let subPayloadStar = new THREE.Points(payloadStarGeometry, subMaterial);
        subPayloadStar.material.color = new THREE.Color("gray");
        fireworkGroup.add(payloadLight, subPayloadStar, payloadStar);
        this.plane.add(fireworkGroup);
        fireworkGroup.position.set(coords.x, coords.y, 0);
        
        this.movement.fireworks.push({
            name: message.id,
            frame: 0,
            object: fireworkGroup,
            animation: this.fireworkAnimation
        })
    }
    
    //funciton for firework animation
    fireworkAnimation = () =>{
        let f = false;
        this.movement.fireworks.map(firework => {
            let fireworkObj = firework.object;
            firework.frame += 1;
            if (firework.frame < 60){           
                fireworkObj.position.z += 0.1;
                fireworkObj.position.x += Math.random()*0.1 - 0.05;
                fireworkObj.position.y += Math.random()*0.1 - 0.05;
                fireworkObj.lookAt(this.camera.position);
                fireworkObj.children[0].power *= 0.9;
                // console.log(fireworkObj.position.z)
                return firework;
            }else if(firework.frame == 60){
                fireworkObj.children[0].power = 0;
                return firework;
            }else if(firework.frame == 75){
                fireworkObj.children[1].scale.multiplyScalar(0.6);
                fireworkObj.children[0].power = 2*Math.PI;
                fireworkObj.children[1].material.size = 0.04;
                fireworkObj.children[2].material.size = 0.08;
                return firework;
            }else if(firework.frame > 75 && firework.frame < 150){
                fireworkObj.scale.multiplyScalar(1.05);
                return firework;
            }else if(firework.frame == 150){
                fireworkObj.remove(fireworkObj.children[0]);
                return firework;
            }else if(firework.frame == 155){
                this.plane.remove(fireworkObj);
                f = true;
                return null;
            }
        });
        if(f) {
            this.movement.fireworks = this.movement.fireworks.filter(firework => firework !== null);
            f = false;
            // console.log(this.scene.children);
        }
    }
    // createNewsPayload = (message) =>{        
    //     if (message.link){
    //         const curvePath = new THREE.CurvePath();
    //         const position = new THREE.Vector3();
    //         let japan = this.scene.getObjectByName('Sphere').getObjectByName('Japan');
    //         position.setFromMatrixPosition(japan.matrixWorld);
    //         let article = JSON.parse(message.article);
    //         console.log('new Link')
    //         if(typeof soucresToCountry[article.source.name] !== 'undefined'){
    //             const marker = this.scene.getObjectByName('Sphere').getObjectByName('Markers').getObjectByName(message.message);
    //             const origin = new THREE.Vector3();
    //             origin.setFromMatrixPosition(marker.matrixWorld);
    //             curvePath.add(this.createPayloadPath(position, origin));
                
    //             const tarilGeometry = new THREE.CylinderBufferGeometry(0.2,0.7, 1, 8, 8, false);
    //             const trailMaterial = new THREE.PointsMaterial({size:0.0005}) 
    //             const trail = new THREE.Points(tarilGeometry, trailMaterial);
                
    //             const tarilGeometry2 = new THREE.CylinderBufferGeometry(0.4,0.1, 3.5, 8, 8, false);
    //             const trailMaterial2 = new THREE.PointsMaterial({size:0.0005}) 
    //             const trail2 = new THREE.Points(tarilGeometry2, trailMaterial2);
    //             trail2.position.y = -2;
                
    //             const trailGroup = new THREE.Group();
    //             trailGroup.name = message.id;
    //             trailGroup.add(trail);
    //             trailGroup.add(trail2);
    //             trailGroup.position.set(position.x, position.y, position.z);
    //             this.scene.add(trailGroup);
                
    //             const target = new THREE.Vector3(50,0,0);
    //             let p1 = new THREE.Vector3();
    //             let p2 = new THREE.Vector3();
    //             let px = new THREE.Vector3();
    //             let py = new THREE.Vector3();
    //             let p = new THREE.Vector3();
    //             let p0 = position;
    //             let p3 = target;
    //             let angle = Math.abs(position.angleTo(target));
    //             if (angle > Math.PI/2){
    //                 px.set(0, p0.y, p0 .z).normalize();
    //                 py.copy(p3).normalize();
    //                 p2.copy(px).multiplyScalar(40*angle/Math.PI);
    //                 p1.copy(p0).add(p.copy(px).multiplyScalar(40*angle/Math.PI)).add(py.multiplyScalar(-5));
    //             }
    //             else{
    //                 px.set(0, p0.y, p0 .z).normalize();
    //                 py.copy(p3).normalize();
    //                 p1.copy(px).multiplyScalar(30*(angle / (Math.PI/2))).add(p.copy(py).multiplyScalar(5));
    //                 p2.copy(px).multiplyScalar(30*(angle / (Math.PI/2))).add(p.copy(py).multiplyScalar(30));
    //             }
    //             // console.log(p0,p1,p2,p3)
    //             curvePath.add(new THREE.CubicBezierCurve3(p0,p1,p2,p3));
    //             // return curvePath;
    //             this.movement.payloads.push({
    //                 payloadId: message.id,
    //                 curve: curvePath,
    //                 fraction: 0.03,
    //                 animation: this.newsPayloadAnimation,
    //             });
    //         }
    //     }
    // }

    // //function to animate news payload
    // newsPayloadAnimation = () => {
    //     let f = false;
    //         this.movement.payloads.map((payload, index) => {
    //             let payloadModel = new THREE.Object3D();
    //             payloadModel = this.scene.getObjectByName(payload.payloadId);
    //             // if (typeof payload.light === 'undefined'){
    //             //     payload.light = this.scene.getObjectByName(`light${index}`)
    //             // }
    //             if(payload.fraction < 1){
    //                 // let lightPosition = payload.curve.getPoint(payload.fraction);
    //                 // payload.light.position.copy(lightPosition);

    //                 let newPostion = payload.curve.getPoint(payload.fraction-0.02);
    //                 let tangent = payload.curve.getTangent(payload.fraction-0.02);
    //                 let radians = this.up.angleTo(this.target);
    //                 this.axis.crossVectors(this.up,tangent).normalize();
    //                 payloadModel.position.copy(newPostion);
    //                 payloadModel.quaternion.setFromAxisAngle(this.axis,radians);
    //                 payload.fraction += 0.01;
    //                 return payload;
    //             } else{
    //                 this.scene.remove(payloadModel);
    //                 // payload.light.position.set(0,0,0);
    //                 f = true;
    //                 return null;
    //             }
    //         });
    //         if(f){
    //             this.movement.payloads = this.movement.payloads.filter(payload => payload.fraction < 1);
    //             console.log(this.movement.payloads)
    //             f = false;
    //         }
    // }

    //function to create payload path from point on globe to another point on globe
    // createPayloadPath = (target, origin) => {
    //     let p = new THREE.Vector3();
    //     let p1 = new THREE.Vector3();
    //     let p0 = origin;
    //     let p2 = target;
    //     p1.copy(p0).add(p.copy(p2)).normalize().multiplyScalar(30);
    //     console.log(p0,p1,p2)
    //     return new THREE.QuadraticBezierCurve3(p0,p1,p2);
    // }

    //static function to create news article markers
    // createNewsMarkers = (articles) => {
    //     const markerGroup = this.scene.getObjectByName('Sphere').getObjectByName('Markers');
        
    //     const circleGeometry = new THREE.CircleBufferGeometry(0.75, 32);
    //     const loader = new THREE.TextureLoader();
    //     articles.forEach((article, index) => {
    //         if(typeof soucresToCountry[article.source.name] !== 'undefined'){
    //             let pngNum = index + 1;
    //             let numberTexture = loader.load("/textures/numbers/number" + pngNum + ".png");
    //             const material = new THREE.MeshStandardMaterial({
    //                 map: numberTexture
    //             });
    //             let marker = new THREE.Mesh(circleGeometry, material);
    //             marker.name = 'news' + index; 
    //             if(markerGroup.getObjectByName(marker.name) !== undefined){
    //                 markerGroup.remove(markerGroup.getObjectByName(marker.name));
    //             }
    //             markerGroup.add(marker);
    //             let markerCoords = this.getCoordsFromSource(article.source);
    //             marker.position.setFromSphericalCoords( 22, markerCoords.phi, markerCoords.theta );
    //             this.movement.news.push(index);
    //         }
    //     });
    // } 

    //global function to retrieve coodinates of a country by their name
    // getCoords = (region) => {
    //     const coords = nameToCoords[region];
    //     const jittering = this.createJittering();
    //     return {
    //         phi: (90 - coords[0] + jittering.phiJit) * Math.PI / 180,
    //         theta: (90 + coords[1] + jittering.thetaJit) * Math.PI / 180,
    //     }
    // }

    // getCoordsFromSource = (source) => {
    //     const coords = soucresToCountry[source.name];
    //     const jittering = this.createJittering();
    //     return {
    //         phi: ((90 - coords.coords[0] + jittering.phiJit) * Math.PI / 180),
    //         theta: ((90 + coords.coords[1] + jittering.thetaJit) * Math.PI / 180) ,
    //     }
    // }
    
    // createJittering = () => {
    //     return {
    //         phiJit: Math.floor(Math.random() * (10 + 10) - 10),
    //         thetaJit: Math.floor(Math.random() * (10 + 10) - 10), 
    //     }
    // }

    tick = () => {
        const elapsedTime = this.clock.getElapsedTime();
        let sphere =  this.scene.getObjectByName('Sphere');
        if(sphere !== undefined){
            sphere.rotation.y += this.movement.sphereRotation.x / 40;
            sphere.rotation.x -= this.movement.sphereRotation.y / 60;
            if(sphere.rotation.x > Math.PI / 4){
                sphere.rotation.x = Math.PI / 4;
            } else if(sphere.rotation.x < - Math.PI / 4){
                sphere.rotation.x = - Math.PI / 4;
            }
            
            if (this.movement.water){ //wave animation
                sphere.getObjectByName('Water').material.normalScale.set( Math.sin(elapsedTime*0.3), Math.cos(elapsedTime*0.3));
            }
        }
        if(!this.welcome){
            let planeWater =  this.plane.getObjectByName('Water');
            if(planeWater !== undefined){
                planeWater.material.normalScale.set( Math.sin(elapsedTime*0.3), Math.cos(elapsedTime*0.3));
            }
        }
        
        this.scene.getObjectByName('Stars').rotation.y = -0.005 * elapsedTime;
        this.scene.getObjectByName('Stars').rotation.x = -0.005 * elapsedTime;

        if (this.movement.camera.init){ //camera movement 
            this.movement.camera.animation();
        }


        if(this.movement.user){ //user animation, currenty unset
            this.userModels.children.forEach(model => {
                model.position.z = 0.3*Math.sin(elapsedTime) 
                model.getObjectByName('Body').rotation.y = 0.5*elapsedTime;
            })
        }

        if(this.movement.payloads.length > 0){ //message sent animation
            this.newsPayloadAnimation();
        }

        if(this.movement.fireworks.length > 0){
            this.fireworkAnimation();
        }

        // if(this.movement.news.length > 0){
        //     this.movement.news.forEach((index) => {
        //         let marker = this.scene.getObjectByName('Sphere').getObjectByName('Markers').getObjectByName('news' + index);
        //         marker.lookAt(this.camera.position);
        //     })
        // }

        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.tick);
    }
}

