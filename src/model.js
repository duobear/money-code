const localStorageKeyName='rrecordList'

const model={
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName)||'[]');

    },
    save(data){
        window.localStorage.setItem('version',JSON.stringify(data))  
    
    }
}
export default model

