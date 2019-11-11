<template>
    <div class="ask">
      <list v-bind:topics="ask"></list>
      <infinite-loading v-if="ask.length > 19" v-show="isLoad" @infinite="infiniteHandler">
      </infinite-loading>
      <div class="foot-tips" v-show="isShow">人家也是有底线的</div>
    </div>
</template>

<script>
/* 引入获取数据的模块 */
import {getData} from '@/getData/data.js'
import List from './List'
import infiniteLoading from 'vue-infinite-loading'

export default {
    data(){
        return {
            ask:[],
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
        getData({tab:'ask',page:this.page,limit:20}).then((data) => {
            this.ask = data.data.data;
        })
    },
    methods:{
         infiniteHandler($state){
            setTimeout(() => {
                getData({tab:'ask',limit:20,page:++this.page}).then((data) => {
                    this.ask = this.ask.concat(data.data.data)
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
