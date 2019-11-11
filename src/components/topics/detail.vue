<template>
      <div class="show-detail">
        <div class="title">
          <span v-if="detailData.top">置顶</span>
          <span v-else-if="detailData.good">精华</span>
          <h2>{{detailData.title}}</h2>
          <p>
            发布于 {{detailData.create_at | getDates}} 个月前  作者 {{loginname}}  {{detailData.visit_count}} 次浏览
            来自 分享 {{tabs[detailData.tab]}}
          </p>
        </div>
        <div class="line"></div>
        <div class="detail-content">
          <div v-html="detailData.content"></div>
        </div>
        <div class="comment-item">
          <h2>{{detailData.reply_count}} 回复</h2>
          <ul>
            <li v-for="(item,index) in commentData">
              <div class="comment-info">
                <img :src="item.author.avatar_url" alt="">
                <strong>{{item.author.loginname}}</strong>
                <span>1楼 {{item.create_at | getDates}}</span>
                <a><i class="iconfont icon-dianzan"></i> {{item.ups.length}}</a>
              </div>
              <div class="comment-content" v-html="item.content"></div>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
  import {getDetailData} from "../../getData/data";
  import {getDateDiff} from "../../getData/getTime";

  export default {
        data(){
          return {
            detailData:'',
            loginname:'',
            tabs:{
              share:'分享',
              ask:'问答'
            },
            commentData:[]
          }
        },
    filters:{
          getDates:function (val) {
            return getDateDiff(new Date(val))
          }
    },
       mounted(){
          let id = this.$route.params.id
          getDetailData(id).then((data) => {
            this.detailData = data.data.data;
            this.loginname = data.data.data.author.loginname;
            this.commentData = data.data.data.replies;
          })
       }
    }
</script>

<style lang="scss">
  @import '../../../static/css/base.scss';
  .show-detail{
    width: rem(700px);
    background-color: #fff;
    margin:rem(30px) auto;
    padding:rem(15px);
    .title{
      width: 90%;
      margin-bottom: rem(26px);
      span{
        display: inline-block;
        padding: rem(3px) rem(7px);
        background-color: #80bd01;
        border-radius: rem(5px);
        color: #fff;
      }
      h2{
        display: inline;
        font-size: 22px;
        font-weight: 700;
        color: #333;
        margin-left:rem(10px);
        margin-top: rem(10px);
      }
      p{
        margin-top:rem(18px);
      }
    }
    .line{
      width: 100%;
      height: rem(2px);
      background-color:#e5e5e5;
      margin-bottom: rem(26px);
    }
    .detail-content{
      width: 100%;
      overflow: auto;
      border-bottom:1px solid #ccc;
      margin-bottom: rem(26px);
      padding-bottom: rem(27px);
      h2{
        font-size: 25px;
        font-weight: 700;
        color: #333;
        padding: rem(6px);
        border-bottom: 1px solid #ccc;
        margin-bottom: rem(26px);
      }
      p{
        line-height: rem(50px);
        font-size: rem(28px);
        margin-bottom: rem(20px);
      }
      strong{
        display: block;
        color: #333;
      }
      img{
        width: 100%;
      }
      pre{
        overflow: auto;
      }

    }
    .comment-item{
      width: 100%;
      h2{
        font-size: rem(25px);
        font-weight: bold;
        color: #333;
        margin-bottom: rem(18px);
      }
      ul{
        li{
          border-bottom: 1px solid #ccc;
          margin-bottom: rem(28px);
          .comment-info{
            line-height: rem(50px);
            img{
              width: rem(60px);
              height: rem(60px);
              border-radius: rem(8px);
              margin-right: rem(12px);
            }
            span{
              color: #0088CC;
            }
            a{
              float: right;
              margin-right: rem(28px);
            }
          }
          .comment-content{
              padding:rem(20px);
            p{
              font-size: rem(27px);
            }
          }
        }
      }
    }
  }

</style>
