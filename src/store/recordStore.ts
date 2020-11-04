/*单独被分离的时候
import recordListModel from "@/models/recordListModel"

export default{
    //record store
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem)=>{
      recordListModel.create(record)
    },
}
*/
//把recordListModel.ts文件中的代码合并到此文件中,如下
/*import clone from "@/lib/clone.ts";
import recordStore from '@/store/recordStore.ts';
const localStorageKeyName='recordList';
let data: RecordItem[] |undefined=undefined
function fetch(){
  data=JSON.parse(window.localStorage.getItem(localStorageKeyName)||'[]') as RecordItem[];
  return data
}
function save(){ 
  window.localStorage.setItem(localStorageKeyName,JSON.stringify(data))  
}
export default{
  //record store
  fetch:fetch,
  save:save,
  recordList: fetch(),
  createRecord: (record: RecordItem)=>{
    const record2: RecordItem=clone(record)
        record2.createAt=new Date();
        data&&data.push(record2);
        save()
  },
}
*/

//缩写的样子，并且改了函数的名字
import clone from "@/lib/clone.ts";
const localStorageKeyName='recordList';

const recordStore={
  recordList: [] as RecordItem[],
  //record store
  fetchRecords(){
   this.recordList=JSON.parse(window.localStorage.getItem(localStorageKeyName)||'[]') as RecordItem[];
    return this.recordList
  },
  saveRecords(){ 
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.recordList))  
  },
  
  createRecord (record: RecordItem){
    const record2: RecordItem=clone(record)
        // record2.createAt=new Date();
        record2.createAt=new Date().toISOString()
        this.recordList&&this.recordList.push(record2);
        recordStore.saveRecords()
  },
}

recordStore.fetchRecords()
export default recordStore;