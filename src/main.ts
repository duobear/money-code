import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
// import tagListModel from '@/models/tagListModel.ts';  
// import recordListModel from '@/models/recordListModel.ts' 被移除到recordStore.tss




Vue.config.productionTip = false


Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)
//1,全局变量太多
//2 严重依赖window
//、、解决就是给什么一个store，下面都挂store里
//、、然后移动到store文件里，把window去掉，其他vue组件直接store使用

/*移动到src》store》index2.ts文件中
window.store={
//record store
recordList: recordListModel.fetch(),
createRecord: (record: RecordItem)=>{
  recordListModel.create(record)
},
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

};
*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.onload=function(){
  setTimeout(function(){
    window.scrollTo(0,10000)
  },0)
}