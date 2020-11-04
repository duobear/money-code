type RootState={
    recordList: RecordItem[];
    createRecordError: Error|null;
    createTagError: Error|null;   
      tagList: Tag[];
      currentTag? : Tag;
  }

type RecordItem={
    tags: Tag[];
    notes: string;
    type: string;
    amount: number;//数据类型
    createAt?: string; //类、构造函数

}
// xxx.t.ts,xx是无所谓的

type Tag={
    id: string;
    name: string;
}
type TagListModel={
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated'; //联合类型success表示成功，duplicated表示name重复   
    update: (id: string,name: string) => 'success' | 'not found'|'duplicated';
    remove: (id: string) => boolean;
    save: () => void;
    
}

interface Window{
    store:{
        tagList: Tag[];
        findTag:(id: string)=> Tag | undefined;
        createTag: (name :string)=> void;
        removeTag:(id :string)=> boolean;
        //updateTag:( id:string,name:string)=>'success' | 'not found'|'duplicated';
        updateTag: TagListModel['update'];
        recordList: RecordItem[];
        createRecord: (record: RecordItem)=>void
    }
}

