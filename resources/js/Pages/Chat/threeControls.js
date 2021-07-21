import * as THREE from 'three';

export class ThreeSetup {
    constructor(width, height, canvas) {
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({ alpha: true});
        this.clock = new THREE.Clock();
    }
}

// export const JapanRegionsCoors = {
//     'Hokkaido': {
//         maxX:
//         minX:
//         maxY:
//         minY:
//     },
//     'Tohoku': {
//         maxX:
//         minX:
//         maxY:
//         minY:
//     }, 
//     'Kanto': {
//         maxX:
//         minX:
//         maxY:
//         minY:
//     }, 
//     'Chubu': {
//         maxX:
//         minX:
//         maxY:
//         minY:
//     },
//     'Kansai': {
//         maxX:
//         minX:
//         maxY:
//         minY:
//     }, 
//     'Chugoku': {
//         maxX:
//         minX:
//         maxY:
//         minY:
//     }, 
//     'Shikoku': {
//         maxX:
//         minX:
//         maxY:
//         minY:
//     }, 
//     'Kyushu': {
//         maxX:
//         minX:
//         maxY:
//         minY:
//     }, 
//     'Okinawa': {
//         maxX:
//         minX:
//         maxY:
//         minY:
//     },
// }

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