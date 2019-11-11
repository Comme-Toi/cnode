<template>
      <div>
      <div class="navbar">
         <router-link to="/"><img src="./assets/images/cnodejs_light.svg" alt=""></router-link>
         <div class="navbar-search">
           <form>
             <i class="iconfont icon-search"></i>
             <input type="text" name="querys" class="search-query">
           </form>
         </div>
        <div class="nav-pull-right">
           <ul>
             <li><router-link to="/">首页</router-link></li>
           </ul>
        </div>
      </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '../static/css/base.scss';

body{
  background-color: #e1e1e1;
}
 .navbar{
   width:98%;
   height: rem(230px);
   background-color: #444;
   box-sizing: border-box;
   padding:rem(20px);
   margin: 0 auto;
   a{
     display: block;
     img{
       width:rem(210px);
       height: rem(55px);
     }
   }
   .navbar-search{
     height: rem(28px);
     margin-top:rem(26px);
     form{
       position: relative;
       input{
         width:rem(350px);
         height: rem(28px);
         padding: rem(10px) rem(40px);
         border-radius: rem(28px);
         border:none;
         outline: none;
         color: #666;
         font-size: 13px;
         font-weight: 400;
       };
       i{
         position: absolute;
         left:rem(8px);
         top:50%;
         transform: translateY(-50%);
       }
     }
   }
   .nav-pull-right{
     width: 100%;
     height: rem(40px);
     margin-top:rem(50px);
     ul{
       height: 100%;
       display: flex;
       justify-content:space-between;
       li{
         a{
           color: #ccc;
           font-size: rem(20px);
         }
       }
     }
   }
 }










</style>
