<template>
    <Layout>
        <div class="tags">
            <router-link class="tag" :to="`/labels/edit/${tag.id}`"
                v-for="tag in tags" :key="tag.id" >
                <span>{{tag.name}}</span> 
                <Icon name="right"></Icon>
            </router-link>
           
        </div>
        <div class="createTag-wrapper">
            
            <Button class="createTag" @click="createTag">新建标签</Button>
        </div>
    </Layout>   
</template>

<script lang="ts">
 import Vue from 'vue';
 import { Component} from 'vue-property-decorator';
//  import tagListModel from '@/models/tagListModel.ts';//引入后没有使用
import Button from '@/components/Button.vue'
// tagListModel.fetch(); //直接window上拿值,31行
//  import oldstore from '@/store/index2.ts'; 被vuex代替
import store from '../store/index';
  
  @Component({
      components:{Button},
      
  })
    export default class Labels extends Vue{
        // tags=tagListModel.fetch();
        // tags=tagListModel.data;
        //tags=oldstore.tagList  //知识点1 使用29行，vuex的写法
        get tags(){
                return  this.$store.state.tagList
               
            }
        beforeCreate(){
            this.$store.commit('fetchTags')
        }
        createTag(){
            // const name=window.prompt('请输入标签名')  
            // if(name){
            //        /* 移动到main.ts文件中
            //        const message=tagListModel.create(name) // 知识点2，最小知识原则
            //         if(message==='duplicated'){
            //             window.alert('标签名重复')
            //         }else if(message==="success"){
            //             window.alert('添加成功')
            //         } */ 
            //     oldstore.createTag(name)                         
            // }  
           
               const name=window.prompt('请输入标签名')  
               if(!name){return window.alert('标签名不能为空')} 
               this.$store.commit('createTag',name)
               if(this.$store.state.createTagError.message.state.createTagError){
                   if(this.$store.state.createTagError.message==='tag name duplicated')
                   window.alert('标签名重复')
               }
           
        }
    }
</script>

<style lang="scss" scoped>
.tags{
    background:white;
    font-size:16px;
    padding-left:16px;
    > .tag{
        min-height:44px;
        display: flex;
        align-items:center;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;
        svg{
            width:18px;
            height: 18px;
            color:#666;
            margin-right: 16px;
        }
    }
}
.createTag{
    background:#767676;
    color:white;
    border-radius:4px;
    border:none;
    height: 40px;
    padding:0 16px;
    &-wrapper{
        text-align:center;
        padding:16px;
        margin-top: 44-16px;;
    }
}

</style>