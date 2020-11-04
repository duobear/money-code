<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="right" @click="goBack"></Icon>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
                <FormItem :value="tag.name"
                 @update:value="update"
                  filed-name="标签名" 
                  placeholder="请输入标签名">
                </FormItem>         
        </div>
        <div class="button-wrapper">
            <Button class="createTag" @click="remove">删除标签</Button>   
        </div>  
    </Layout>
</template>

<script>
    import Vue from 'vue';
    import { Component} from 'vue-property-decorator';
// import tagListModel from '@/models/tagListModel.ts';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
// import oldstore from '@/store/index2.ts'; 被vuex代替


    @Component({
        components:{FormItem,Button},
        
    })
    export default class EditLabel extends Vue{
        // tag=undefined;   //36行的vue-class-component原生写法
        get tag(){
                return  this.$store.state.currentTag
               
            }     
        created(){
            // const id=this.$route.params.id
            // console.log(id)
            /*  两句合并一句
             tagListModel.fetch()
             const tags=tagListModel.data*/

            // const tag=window.tagList

            // const tag=tags.filter(t=>t.id===id)[0]
            // window.findTag(id)
            
            // if(tag){
            //     this.tag=tag
            // }else{
            //     this.$router.replace('/404')
            // }

             /*this.tag = oldstore.findTag(this.$route.params.id)
            if(!this.tag){
                this.$router.replace('/404')
            }*/
            this.$store.commit("fetchTags")
            this.$store.commit('setCurrentTag',this.$route.params.id)
             
            if(!this.tag){
                this.$router.replace('/404')
            }
            
        }
        update(name){//更新标签名  
            if(this.tag){
                /* 移动到main.ts文件中*/
                // tagListModel.update(this.tag.id, name)
                // oldstore.updateTag(this.tag.id, name)
                 this.$store.commit('updateTag',{id:this.tag.id, name:name})
            }
           

        }
        remove(){
            if(this.tag){
                
               /* 移动到main.ts文件中*/
               //if(tagListModel.remove(this.tag.id) ){

               /*if(oldstore.removeTag(this.tag.id) ){
                    this.$router.back()
                }else{
                    window.alert('删除失败')
                }  */
                this.$store.commit('removeTag',this.tag.id)
           
                
               
            }
            
        }
        goBack(){
            this.$router.back()
        }

    }
</script>

<style lang="scss" scoped>
.navBar{
    text-align: center;
    font-size: 16px;
    padding:12px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >.title{

    }
    >.leftIcon{
width: 24px;
height: 24px;
    }
    >.rightIcon{
width: 24px;
height: 24px;
    }
}
.form-wrapper{
background: white;
margin-top: 8px;
}
.button-wrapper{
    text-align: center;
    padding:16px;
    margin-top: 44-16px;

}
</style>