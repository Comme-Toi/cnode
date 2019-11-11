<template>
        <div class="topic_list">
       <loading v-if="!topics.length"></loading>
       <div v-for="(item,index) in topics" :item="item" :key="index" class="cell">
        <router-link :to="{path:'/detail/' + item.id}" class="user_avatar">
        <img v-lazy="item.author.avatar_url" alt="">
        <span class="topics-item-top" v-if="item.top">置顶</span>
        <span class="topics-item-top" v-else-if="item.good">精华</span>
        <span class="topics-item-share" v-else-if="item.tab == 'share'">分享</span>
        <span class="topics-item-ask" v-else-if="item.tab == 'ask'">问答</span>
        <span v-else> </span>
        </router-link>
        <router-link :to="{path:'/detail/' + item.id}"  class="topic_title">
         <span>{{item.title}}</span>
         <i>{{item.reply_count}}/{{item.visit_count}}</i>
        </router-link>
        <div class="last_active_time">{{item.last_reply_at | times}}</div>
       </div>
       </div>
</template>

<script>
import Loading from '../Loading'
import {getDateDiff} from "../../getData/getTime";

export default {
    props:['topics','showTips'],
    data(){
        return {

        }
    },
    filters:{
        times:function (val) {
          return getDateDiff(new Date(val))
        }
    },
    components:{
        Loading
    }
}
</script>

<style lang="scss">
@import '../../../static/css/base.scss';
@import '../../../static/css/list.scss';

</style>



