/*import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
*/

import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import createId from '@/lib/createld';
import router from '@/router';
Vue.use(Vuex) //把store 帮到Vue.prototype.$store=store


const store= new Vuex.Store({
  state: {//Vue中的date
    recordList:[] ,
    createRecordError:null,
    createTagError:null,
    tagList: [],
    currentTag :undefined,  
  } as RootState,
  mutations: {//Vue中的method,防止大家用this，因此一个参数是state
    setCurrentTag(state,id){
      
      const tag=state.tagList.filter(t=>t.id===id)[0]
      state.currentTag=tag

    },
    updateTag(state, payload){
      const id=payload.id;
      const name=payload.name;
      const idList=state.tagList.map(item=>item.id);
      if(idList.indexOf(id)>=0){
          const names=state.tagList.map(item=>item.name);
          if(names.indexOf(name)>=0){
              return 'duplicated'
          }else{
            const tag=  state.tagList.filter(item=>item.id===id)[0]
            tag.name=name  
            tag.id=name  
            store.commit('saveTags')           
            // this.saveTags()
            return 'success'
          }
      }else{
          return "not found"
      }
          
     },
     removeTag(state,id: string){   
      let index=-1
      for(let i=0;i<state.tagList.length;i++){
          if(state.tagList[i].id===id){
              index=i;
              break;
          }
          
      }
      if(index>=0){
        state.tagList.splice(index,1)
        store.commit('saveTags')  
        // this.saveTags()
        router.back()  
      }else{
        window.alert('删除失败')
      }

      
         
     },
    fetchRecords(state){
      const recordList=JSON.parse(window.localStorage.getItem('recordList')||'[]') as RecordItem[];
       state.recordList=recordList
     },
    createRecord (state,record: RecordItem){
      const record2: RecordItem=clone(record)
          // record2.createAt=new Date();
          record2.createAt=new Date().toISOString()
          state.recordList&&state.recordList.push(record2);
          store.commit('saveRecords')
          // window.alert('已保存') 移动到money。vue组件
          // recordStore.saveRecords()
    },
    saveRecords(state){ 
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList))  
    },
    fetchTags(state){
      const tagList= JSON.parse(window.localStorage.getItem("tagList")||'[]') ;
      state.tagList=tagList
      if(!state.tagList||state.tagList.length===0){
        store.commit('createTag','衣')
        store.commit('createTag','衣')
        store.commit('createTag','衣')
        store.commit('createTag','衣')

      }

     },    
     createTag(state,name: string){
      state.createTagError=null
      const names=state.tagList.map(item=>item.name)
        if(names.indexOf(name)>=0){
          // window.alert('标签名重复')
          state.createTagError = new Error('tag name duplicated');
          return

          // return "duplicated"
        }
        const id=createId().toString()
        state.tagList.push({id:id, name:name});
        store.commit('saveTags')
        // this.saveTags();
        window.alert('添加成功')
        // return "success";                 
     },
     saveTags(state){
      window.localStorage.setItem('tagList',JSON.stringify(state.tagList))  
     },
    
  },
  actions: {
  },
  modules: {
  }
})
export default store;