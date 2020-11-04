// import tagListModel from '@/models/tagListModel.ts';
// import recordListModel from '@/models/recordListModel.ts'
import recordStore from '@/store/recordStore.ts';
import tagStore from './tagStore';
const store={
    //record store
    /* 
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem)=>{
      recordListModel.create(record)
    },
    */
   ...recordStore,
   ...tagStore,
    //tag store
    /*
    tagList : tagListModel.fetch(),
    findTag(id: string){
       return this.tagList.filter(t=>t.id===id)[0]
    },
    createTag:(name: string)=>{
      const message=tagListModel.create(name) // 知识点2，最小知识原则
      if(message==='duplicated'){
          window.alert('标签名重复')
      }else if(message==="success"){
          window.alert('添加成功')
      }           
    },
    removeTag:(id: string)=>{
    
        if(tagListModel.remove(id) ){
          // this.$router.back()
          return true
        }else{
            // window.alert('删除失败')
            return false
        }  
    
    },
    updateTag :(id: string, name: string)=>{
      return tagListModel.update(id, name)
    
    },
    */
    
    };
    export default store;