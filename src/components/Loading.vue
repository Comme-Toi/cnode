<template>
    <div class="loading">
        <img src="../assets/images/loading.gif">
    </div>
</template>

<script>
export default {
   
}
</script>


<style lang="scss">
@import '../../static/css/base.scss';

.loading{
    width:rem(150px);
    height: rem(150px);
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    img{
        width:100%;
    }
}
</style>



