<template>
    <el-input-number
        v-model.trim='result'
        :placeholder='placeholder'
        :size='size'
        :min='min'
        :max='max'
        :step='step'
        :disabled='disabled'
        @change='changeHandle'
        @blur='blurHandle'
        @focus='focusHandle'></el-input-number>
</template>

<script>
    import formMixin from '@u/mixins/formMixin'
    export default {
        mixins: [formMixin],
        props : {
            value :{
                default : 1
            },
            size : {
                type : String,
                default : 'small'
            },
            disabled :{
                type : Boolean,
                default : false
            },
            //最小值
            min :{
                type : Number,
                default : -Infinity
            },
            //最大值
            max : {
                type : Number,
                default : Infinity
            },
            //计数器步长
            step :{
                type : Number,
                default : 1
            },
            //
            placeholder : {
                type :String,
                default : '请输入数量'
            },
            changeCallBack : {
                type : Function
            },
            blurCallBack :{
                type : Function
            },
            focusCallBack :{
                type : Function
            }
        },
        data() {
            return {
                result : this.value
            };
        },
    }
</script>