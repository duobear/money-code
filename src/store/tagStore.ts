/*tagListModels的代码合并到这个tagstore的文件里，先把之前单独的时候注释一下
import tagListModel from '@/models/tagListModel'
export default{
     //tag store
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
}
*/

import createId from '@/lib/createld';
const localStorageKeyName='tagList';
const tagStore={
     //tag store
     tagList : [] as Tag[],
     fetchTags(){
      this.tagList= JSON.parse(window.localStorage.getItem(localStorageKeyName)||'[]') ;
      return this.tagList
     },
     findTag(id: string){       
        return this.tagList.filter(t=>t.id===id)[0]
     },
     createTag(name: string){
      const names=this.tagList.map(item=>item.name)
        if(names.indexOf(name)>=0){
          window.alert('标签名重复')
          return "duplicated"
        }
        const id=createId().toString()
        this.tagList.push({id:id, name:name});
        this.saveTags();

        return "success";                 
     },
     removeTag(id: string){   
      let index=-1
      for(let i=0;i<this.tagList.length;i++){
          if(this.tagList[i].id===id){
              index=i;
              break;
          }
          
      }
      this.tagList.splice(index,1)
      this.saveTags()
      return true  
         
     },
     updateTag(id: string, name: string){

      const idList=this.tagList.map(item=>item.id);
      if(idList.indexOf(id)>=0){
          const names=this.tagList.map(item=>item.name);
          if(names.indexOf(name)>=0){
              return 'duplicated'
          }else{
            const tag=  this.tagList.filter(item=>item.id===id)[0]
            tag.name=name  
            tag.id=name             
            this.saveTags()
            return 'success'
          }
      }else{
          return "not found"
      }

          
     },
     saveTags(){
      window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.tagList))  
  
     },
}
    
      tagStore.fetchTags();

export default tagStore;