<template>
     <div>
            <ul class="types">
                <!-- <li :class="value==='-'&& 'selected'" 
                @click="selectType('-')">支出</li>
                <li :class="value==='+'&& 'selected'"
                 @click="selectType('+')">收入</li> -->

                  <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='-'}"
                @click="selectType('-')">支出</li>
                <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='+'}"
                 @click="selectType('+')">收入</li>
            </ul>
        </div>
</template>

<script lang="ts">
//   你必须从'vue-property-decorator'引入叫Compoent的装饰器，
//   然后把装饰器装饰到你的class上
//   然后你的class可以申明data，，函数，声明周期等
    import Vue from 'vue';
    import { Component,Prop} from 'vue-property-decorator';
    


    @Component    
    export default class Types extends Vue{
        //Number告诉Vue ，propA是个Number 运行时
        // propA是个属性名
        // number|undefined 就是 propA的类型，编译时
        @Prop(Number) propA: number | undefined
        // @Prop(String) readonly value: string | undefined
        @Prop({default:'-'}) readonly value!: string
        @Prop(String) classPrefix?: string
        
        // type='-';//'-表示支出，‘+’表示收入
        
        selectType(type: string){
            if(type!=='-'&&type!=='+'){
                throw new Error('type is nunkonw')
            }
            // this.type=type 
               this.$emit('update:value',type)
        }

        // mounted(){
        //     console.log(this.propA)
        // }
        // @Watch('type')
        // onTypeChange(value: string){
        //     this.$emit('update:value',value)
        // }


   }
  
    /*js方式写的
    export default {
        props:['xxx'],
        data(){
            return{
                type:'-',//'-表示支出，‘+’表示收入
            }
        },
        methods:{
            selectType(type){
                if(type!=='-'&&type!=='+'){
                    throw new Error('type is nunkonw')
                }
                this.type=type
            }
        },
        mounted(){
            console.log(this.xxx)  
        }
        
    }*/
</script>

<style lang="scss" scoped>
.types{
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    >li{
        width: 50%;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center; 
        position: relative;
        &.selected::after{
            content:'';
            position: absolute;
            bottom:0;
            left:0;
            width:100%;
            height:4px;
            background:#333;
        }   
    }
}
</style>