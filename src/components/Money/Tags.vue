<template>
    <div class="tags">
             <div class="new">
                <button @click="create">新增标签</button>
            </div>
            <ul class="current">
                <li  @click="toggle(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}"
                 v-for="tag in tagList" :key="tag.id">{{tag.name}}</li>
               
            </ul>
           
        </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component} from 'vue-property-decorator';

// import oldstore from '@/store/index2.ts'; 被vuex代替

    @Component({
        computed:{
            
        }
    })   
    export default class Tags extends Vue{
    //    tagList=oldstore.fetchTags() //变成22行的$store的写法
        selectedTags: string[]=[];
        get tagList(){
                return  this.$store.state.tagList
               
            }
        created(){
            this.$store.commit('fetchTags')
        }
        // 选中元素，不选中元素
        toggle(tag: string){
            const index=this.selectedTags.indexOf(tag)
            if(index>=0){
                this.selectedTags.splice(index, 1) //1代表删除的个数

            }else{
                this.selectedTags.push(tag)     
            }   
            this.$emit('update:value',this.selectedTags)         
        }
        /*创建元素 */
        create(){
            const name=window.prompt('请输入标签名');
            if(!name){
                window.alert('标签名不能为空')

            // }else if(this.tagList){                
            //     oldstore.createTag(name)
            //     }

                }else if(this.$store.state.tagList){                
                this.$store.commit('createTag',name)                
                }
            if(this.$store.state.createTagError){
                   window.alert(this.$store.state.createTagError.message)
               }
           
            
        }

    }
</script>

<style lang="scss" scoped>
.tags{  
    background: #fff;       
    font-size: 14px;
    padding:16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    >.current{
        display: flex;
        flex-wrap:wrap;        
        >li{
            $bg:#d9d9d9;
            background:$bg;
            $h:24px;
            height: $h;
            line-height: $h;
            border-radius:$h/2;
            padding:0 16px;
            margin-right: 12px;
            &.selected{
                background:darken($bg,50%);
                color: white;
            }
        }
    }
    >.new{
        padding-top:16px;
        button{
            background: transparent;
            border:none;
            color:#999;
            border-bottom: 1px solid;
            padding:0 4px;
        }
    }
}

</style>


