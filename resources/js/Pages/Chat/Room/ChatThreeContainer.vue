<template>
    <div ref="canvas" class="h-screen w-full relative overflow-hidden">
        <div class=" h-full w-full absolute grid grid-cols-4 grid-rows-2">
            <div class="mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-row w-full justify-center col-start-2 col-span-2">
                <slot name="header"></slot>
            </div>
            <div class="mx-auto py-6 px-4 sm:px-6 lg:px-8 content-end flex flex-wrap w-full justify-center col-start-2 col-span-2 row-start-2">
                <slot name="footer"></slot>
            </div>
            <div class="h-full w-full flex flex-col col-start-1 row-start-1 row-span-2 relative">
                <slot name="activeUsersContainer"></slot>
            </div>
            <div class="h-full w-full flex flex-col col-start-4 row-start-1 row-span-2 relative">
                <slot name="messagesContainer"></slot>
            </div>
        </div>
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
            switch(newVal.changeType){
                case 'default':
                    newVal.usersList.forEach(user => this.generateUserModel(user));
                    break;
                case 'create':
                    this.generateUserModel(newVal.subjectUser);
                    break;
                case 'remove':
                    this.removeUserModel(newVal.subjectUser);
                    break;
            }
        },
        messages(newVal, oldVal){
            if(oldVal.length > 0 && newVal[0].id === oldVal[0].id){
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
        generateUserModel(user) {
            threeSetup2.createUserModel(user, this.$page.props.user.name, this.room.photo);
            console.log('generated model for ', user);
        },
        removeUserModel(user){
            threeSetup2.removeUserModel(user);
            console.log('removed usermodel for ', user);
        },
        createMessagePayload(message){
            if(message.link){
                threeSetup2.createNewsPayload(message);
            }else {
                let user = this.activeUsers.usersList.find(activeUser => activeUser.id == message.user.id);
                console.log("from ", user);
                threeSetup2.createMessageAnimation(message, user.pivot.region);
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