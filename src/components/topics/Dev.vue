<template>
    <div class="dev">
        <list v-bind:topics="dev"></list>
         <infinite-loading v-if="dev.length > 19" v-show="isLoad" @infinite="infiniteHandler">
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
            dev:[],
            page:1,
            isShow:false,
            isLoad:true                   
        }
    },
    components:{
        List,
        infiniteLoading
    },
    mounted(){
        getData({tab:'dev',limit:20,page:this.page}).then((data) => {
            this.dev = data.data.data;
        })
    },
    methods:{
        infiniteHandler($state){
            setTimeout(() => {
                getData({tab:'dev',limit:20,page:++this.page}).then((data) => {
                    this.dev = this.dev.concat(data.data.data)
                    if(data.data.data == 0){
                        this.isLoad = false
                        this.isShow = true
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