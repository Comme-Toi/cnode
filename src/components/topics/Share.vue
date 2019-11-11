<template>
    <div class="share">
       <list v-bind:topics="share"></list>
       <infinite-loading v-if="share.length > 19" v-show="isLoad" @infinite="infiniteHandler">
       </infinite-loading>
       <div class="foot-tips" v-show="isShow">人家也是有底线的</div>
    </div>
</template>

<script>
import List from './List'
import {getData} from '@/getData/data.js'
import infiniteLoading from 'vue-infinite-loading'

export default {
    data(){
        return {
            share:[],
            page:1,
            isLoad:true,
            isShow:false
        }
    },
    components:{
        List,
        infiniteLoading
    },
    mounted(){
        getData({tab:'share',limit:20,page:++this.page}).then((data) => {
            this.share = data.data.data;
        })
    },
    methods:{
        infiniteHandler($state){
            setTimeout(() => {
                getData({tab:'share',limit:20,page:this.page}).then((data) => {
                    this.share = this.share.concat(data.data.data)
                    if(data.data.data == 0){
                        this.isLoad = false
                        this.share = true
                    }
                    $state.loaded()
                })
            },1000)
        }
    }
}
</script>

<style lang="scss">

</style>
