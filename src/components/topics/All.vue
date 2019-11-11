<template slot="no-more">
    <div class="all">
      <list v-bind:topics="all"></list>
      <infinite-loading v-if="all.length > 20 " v-on:infinite="infiniteHandler">
      </infinite-loading>
    </div>
</template>

<script>
import List from './List'
import {getData} from '@/getData/data.js'
import infiniteLoading from 'vue-infinite-loading'

export default {
    data(){
        return {
            all:[],
            page:1,
        }
    },
    components:{
        List,
        infiniteLoading
    },
    mounted(){
       getData({tab:'all',limit:21,page:this.page}).then((data) => {
           this.all = data.data.data;
       })
    },
    methods:{
        infiniteHandler($state){
            setTimeout(() => {
                getData({tab:'all',limit:10,page:++this.page}).then((data => {
                this.all = this.all.concat(data.data.data)
                $state.loaded();
            }))
      },1000)
        }
    }
}
</script>

<style lang="scss">

</style>



