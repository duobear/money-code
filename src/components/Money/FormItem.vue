<template>
      <div>
            <label class="formItem">
                <!-- {{value}} -->
                <span class="name">{{this.filedName}}</span>
                <!-- :value='xxx' @input="x=$event.target.value" {}{}   v-model="X"-->
                
                <!-- <input type="text" placeholder="在这里输入备注" :value="value"  @input="onInput"> -->
                <input type="text" 
                    :value="value"
                    :placeholder="placeholder"                     
                    @input="onValueChange($event.target.value)">
            </label>
        </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component,Prop} from 'vue-property-decorator';
    @Component    
    export default class FormItem extends Vue{
        // value='';
        @Prop({default:''}) readonly value!: string;
        @Prop({required:true}) filedName!: string;
         @Prop() placeholder?: string;
        // @Watch('value')
        // onValueChange(value: string,oldValue: string){
        onValueChange(value: string){
            this.$emit('update:value',value)
        }
        // onInput(event: KeyboardEvent){
        //     const input=event.target as HTMLInputElement
        //     this.value=input.value
        // }
        
    }
</script>

<style lang="scss" scoped>
.formItem{
    font-size: 14px;
    // background: #f5f5f5;
    padding-left: 16px;    
    display: flex;
    align-items: center;;
    .name{
        padding-right:16px;

    }
    input{
        height: 40px;
        flex-grow: 1;
        background: transparent;
        border:none;
    }

}
</style>