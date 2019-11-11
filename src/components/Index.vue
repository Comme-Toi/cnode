<template>
        <div>
       <div class="header">
            <ul>
                <li><router-link to="/all">全部</router-link></li>
                <li><router-link to="/good">精华</router-link></li>
                <li><router-link to="/share">分享</router-link></li>
                <li><router-link to="/ask">问答</router-link></li>
                <li><router-link to="/job">招聘</router-link></li>
                <li><router-link to="/dev">客户端测试</router-link></li>
            </ul>
        </div>

        <div>
           <router-view></router-view>
        </div>
        </div>

</template>

<script>

export default {

}
</script>


<style lang="scss">
@import '../../static/css/base.scss';

.header{
    width:98%;
    height: rem(60px);
    background-color: #f6f6f6;
    margin: rem(20px) auto 0 auto;
    ul{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        li{

            a{
                padding:rem(7px) rem(8px);
                color: #80bd01;
                font-size: rem(25px);
                border-radius: rem(5px);
            }
            a.router-link-active{
                background-color: #80bd01;
                color:#fff;
            }
        }
    }
}


</style>
