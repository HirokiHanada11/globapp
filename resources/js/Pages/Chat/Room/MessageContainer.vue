<template>
    <div class="h-full p-2 flex flex-col overflow-y-scroll no-scrollbar mt-3 w-11/12" id="chat" ref="chat">
        <div v-for="(message, index) in messages" :key="index" class="space-y-20" >
            <message-item :message="message" v-on:resend="passEvent"/>
        </div>
        <div v-if="showNewMessage" @click="scrollToBottom" class="w-11/12 absolute bottom-0 right-4 p-1 rounded bg-gray-500 bg-opacity-50 hover:bg-opacity-70 hover:cursor-pointer text-center grid grid-cols-6">
            <div class="col-span-4 truncate ">
                <b>{{newestMessage.user.name}}: </b>{{newestMessage.message}}
            </div>
            <div v-show="newMessagesCounter > 0" class="col-start-5 ">
                +{{newMessagesCounter}}
            </div>
            <div class="colstart-6">
                <button class="outline-none rounded-full bg-grey-700" @click="hideNewMessage">x</button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../../../Jetstream/Button.vue';
import MessageItem from './MessageItem.vue'
export default {
    components: { MessageItem, Button },
    data () {
        return {
            newMessagesCounter: -1,
            showNewMessage: false,
            newestMessage: new Object(),
            ticking: false,
            scrollPosition: 0,
            prevHeight: 0,
            newHeight: 0,
            atBottom: true,
        }
    },
    props: ['messages', 'fetching'],
    watch:{
        messages(newVal,oldVal){
            console.log('updated',this.$refs.chat.scrollHeight, this.$refs.chat.scrollTop);
            this.prevHeight = this.newHeight;
            this.newHeight = this.$refs.chat.scrollHeight;
            if(this.atBottom){
                this.$nextTick(()=>{
                    this.scrollToBottom();
                })
            }else if(newVal[0].id !== oldVal[0].id){
                this.$refs.chat.scrollTop = this.newHeight - this.prevHeight ;
            }else if(newVal[newVal.length-1].user.id !== this.$page.props.user.id){
                this.showNewMessage = true;
                this.newestMessage = newVal[newVal.length-1];
                this.newMessagesCounter += 1;
            }else{
                this.$nextTick(()=>{
                    this.scrollToBottom();
                })
            }
        }
    },
    methods: {
        passEvent(value){
            this.$emit('resend',value);
        },
        hideNewMessage(){
            this.showNewMessage = false;
            this.newMessagesCounter = -1;
        },
        scrollToBottom(){
            this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
            this.atBottom = true;
            this.hideNewMessage();
        },
        scrollCheck(){
            this.scrollPosition = this.$refs.chat.scrollTop;
            // console.log(this.scrollPosition);
            if(!this.ticking){
                window.requestAnimationFrame(() => {
                    if(this.scrollPosition == 0){
                        this.fetchMoreMessages();
                        this.atBottom = false;
                    }else{
                        this.atBottom = false;
                    }
                    this.ticking = false;
                });

                this.ticking = true; 
            }
        },
        fetchMoreMessages(){
            if(!this.fetching){
                this.$emit('fetchmoremessages');
            }
        }
    },
    mounted(){
        this.newHeight = this.$refs.chat.scrollHeight; 
        this.scrollToBottom();
        this.$refs.chat.addEventListener('scroll', this.scrollCheck);
    }
}
</script>