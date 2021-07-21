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