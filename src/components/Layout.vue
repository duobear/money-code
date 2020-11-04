<template>
<div class="layout-wrapper" :class="classPrefix&&`${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix&&`${classPrefix}-content`">
        <slot></slot>
    </div>
    <Nav></Nav>
</div>  
</template>

<script>
    export default {
        props:['classPrefix']
        
    }
</script>

<style lang="scss" scoped>
.layout-wrapper{
    // border:1px solid green;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.content{
    // border:1px solid blue;
    overflow: auto;
    flex-grow:1;
}
</style>