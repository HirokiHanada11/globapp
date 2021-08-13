<template>
    <div ref="canvas" class="h-full w-full">
    </div>
</template>

<script>
import { ThreeSetup2 } from '../ThreeJS/threeControls2';
let threeSetup2;

export default {
    props: ['messages', 'room', 'activeUsers', 'news', 'cameraNum'],
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
            console.log("room changed", oldVal.name, "->", newVal.name);
            this.renderThree();
        },
        activeUsers(newVal, oldVal){
            console.log("activeusers changed", oldVal,"->",newVal);
            let filtered = newVal.filter(user => !(oldVal.includes(user)));
            console.log('filtered array',filtered)
            filtered.forEach((user)=>{
                this.generateUserModel(user, this.$page.props.user.name);
            })
        },
        messages(newVal, oldVal){
            if(oldVal.length > 0){
                console.log('new message', newVal[newVal.length-1]);
                this.createMessagePayload(newVal[newVal.length-1]);
            }
        },
        news(newVal, oldVal){
            if(typeof newVal !== 'undefined'){
                console.log('new fetched', newVal);
                this.createNewsMarkers(newVal);
            }
        },
        cameraNum(newVal, oldVal){
            this.setCamera(newVal);
        }
    },
    methods: {
        calculateDimension() {
            this.componentHeight = this.$refs.canvas.clientHeight;
            this.componentWidth = this.$refs.canvas.clientWidth;
        },
        initThree() {
            threeSetup2 = new ThreeSetup2( this.componentWidth, this.componentHeight, this.$refs.canvas );
            threeSetup2.init();
        },

        createPlane() {
            threeSetup2.createGlobe();
            threeSetup2.createPlane();
            threeSetup2.createPointLight();
            threeSetup2.createParticles();
        },
        animate() {
            threeSetup2.tick()
        },
        renderThree() {
            this.calculateDimension();
            this.initThree();
            this.createPlane();
            this.animate();
        },
        generateUserModel(user, sessionUser) {
            threeSetup2.createUserModel(user, sessionUser);
        },
        createMessagePayload(message){
            if(message.link){
                threeSetup2.createNewsPayload(message);
            }else {
                let user = this.activeUsers.find(activeUser => activeUser['user_id'] == message.user.id);
                console.log("from ", user);
                threeSetup2.createMessageAnimation(message, user.region);
            }
        },
        createNewsMarkers(articles){
            threeSetup2.createNewsMarkers(articles);
        },
        setCamera(cameraNum){
            threeSetup2.moveCamera(cameraNum);
        }
        
    },
}
</script>