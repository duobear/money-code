<template>
    <Layout class-prefix="layout">
        
        <!-- <p> money.vue</p> -->
        <NumberPad @update:value="onUpdataAmout" @submit="saveRecord"></NumberPad>
        <!-- <Types :value.sync="record.type" xxx='dfdfd'  @update:value="onUpdataType"></Types> -->
          <Tabs   :data-source="recordTypeList" :value.sync="record.type" ></Tabs>   
        
        
        <div class="notes">            
            <FormItem   filed-name="备注" 
                        placeholder="在这里输入备注" 
                        :value="record.notes"
                        @update:value="onUpdatNotes">
            </FormItem>
        </div>
        <Tags @update:value='record.tags=$event'></Tags>       
    </Layout>
</template>

<script lang='ts'>

import NumberPad from '@/components/Money/NumberPad.vue'
// import Types from '@/components/Money/Types.vue'
import FormItem from '@/components/Money/FormItem.vue'
import Tags from '@/components/Money/Tags.vue'
import Tabs from '@/components/Tabs.vue';

 import Vue from 'vue';
 import { Component} from 'vue-property-decorator';
 import recordTypeList from '@/constants/recordTypeList.ts';
//  import oldstore from '@/store/index2.ts'; 被vuex代替
 

/* ts引入js文件
 const model = require('@/model.js').default
 console.log(model)
*/

/*ts引入ts文件
 import model from '@/model.ts';
 const recordList=model.fetch()
*/


// import recordListModel from '@/models/recordListModel.ts'; //全部用window代替
// import tagListModel from '@/models/tagListModel.ts'; //没有引用

//  const recordList=recordListModel.fetch() //68行，用window.recordList
//   const tagList=tagListModel.fetch()  //65行的值，用window.tagList变量代替

/*数据库的更新
const version =window.localStorage.getItem('version')||'0'
const recordList: Record[]=JSON.parse(window.localStorage.getItem('recordList')||'[]');
if(version==='0.0.1'){
    recordList.forEach(record => {
        record.createAt=new Date(0)
    });
    //保存数据
    window.localStorage.setItem('version',JSON.stringify(recordList))      
}
 window.localStorage.setItem('version','0.0.2')  //数据迁移
*/

    @Component({   
        components:{NumberPad,Tags,FormItem,Tabs},
        computed:{
            
        }
    })  
    export default class Money extends Vue{
        recordTypeList=recordTypeList
        // tags=['衣','食'];
        // tags=tagList;

        // tags=oldstore.tagList

        // recordList: Record[]=JSON.parse(window.localStorage.getItem('recordList')||'[]');
        // recordList: RecordItem[]=recordList;
        // recordList =oldstore.recordList;
        record: RecordItem={
            tags:[],
            notes:'',
            type:'-',
            amount:0,
           
        }
        get recordList(){
                return this.$store.state.recordList;
            }
        created(){
             this.$store.commit("fetchRecords")
        }
      
        onUpdatNotes(value: string){
            this.record.notes=value
           
        }
        onUpdataType(value: string){            
            this.record.type=value
           
        }
        onUpdataAmout(value: string){
            this.record.amount=parseFloat(value)
            
        }
        saveRecord(){
            // const record2: RecordItem=JSON.parse(JSON.stringify(this.record))
          /*   const record2: RecordItem=recordListModel.clone(this.record)
            record2.createAt=new Date()
            this.recordList.push(record2)
            */
            // recordListModel.create(this.record) //用window里的数据
          
        //   oldstore.createRecord(this.record)
        if(!this.record.tags||this.record.tags.length===0){
        return window.alert('请至少选择一个标签')
        }

        this.$store.commit("createRecord",this.record)
        if( this.$store.state.createRecordError===null){
                    window.alert('已保存')    
                    this.record.notes=''     
            }
       
        }
       /*没有用，删除这一块watch
        @Watch('recordList')
        onRecordListChange(){
            //   localStorage.setItem('recordList',JSON.stringify(this.recordList))
            // recordListModel.save(this.recordList)
            recordListModel.save()
        }
     */

        // @Watch('tags')
        // zqf(){
        //     console.log('检测tags数据niupi')
        //     console.log(this.tags)
        //  window.localStorage.setItem("tagList",JSON.stringify(this.tags))  
        //   //bug：tag的序号有重复，money的标签和label的标签
        // }
    }
   
</script>
<style lang="scss"  scoped>
.layout-wrapper{
    
}
::v-deep .layout-content{    
    display: flex;
    flex-direction: column-reverse;;
}
.notes{
    padding:12px 0;
}

</style>
