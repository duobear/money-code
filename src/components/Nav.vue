<template>
    <nav class="nav">
        <router-link to="/money" class="item" active-class="selected">
        <!-- <svg><use xlink:href="#money" /></svg> -->
        <Icon name="money"></Icon>
        记账
        </router-link>

        <router-link to="/labels" class="item" active-class="selected">
         <!-- <svg><use xlink:href="#labels" /></svg> -->
         <Icon name="labels"></Icon>     
        标签</router-link>

        <router-link to="/statistics" class="item" active-class="selected">
         <!-- <svg><use xlink:href="#statisitics" /></svg> -->
          <Icon name="statisitics"></Icon>         
         统计
        </router-link> 
        
    </nav>
</template>

<script >
// import '../assets/icons/money.svg';
// import '@/assets/icons/labels.svg';
// import '@/assets/icons/statisitics.svg';
 export default {
       
        
    }

</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
.nav{
    // border:1px solid red;
}
// nav{}
// nav >.item{}

.nav{
    @extend %outterShadow;
    display:flex;
    flex-direction:row;
    box-shadow:0 0 3px rgba(0,0,0,0.25);
    font-size: 12px;
    >.item{
        padding:2px 0;
        width:33.3333%;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;

        .icon{
            width:32px;
            height:32px;
        }
    }
    >.item.selected{
        color: $color-highlight;
    }
}


</style>