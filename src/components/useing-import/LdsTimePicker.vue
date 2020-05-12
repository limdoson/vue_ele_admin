<template>
    <el-time-picker
        v-model="result"
        :type='pickerType'
        :size='size'
        :placeholder='placeholder'
        :format='format'
        :is-range='isRange'
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :picker-options="pickerOptions"
        :value-format='valueFormat'
        :disabled='disabled'
        :clearable='clearable'
        @change='changeHandle'
        @blur='blurHandle'
        @focus="focusHandle"></el-time-picker>
</template>

<script>
    import formMixin from '@u/mixins/formMixin'
    export default {
        mixins : [formMixin],
        props :{
            value : {},
            pickerType : {
                type : String,
                default : 'date'  //<week, month, year, dates, daterange, monthrange, datetime, datetimerange>
            },
            size :{
                type : String,
                default : 'small'
            },
            isRange :{
                type : Boolean,
                default :false
            },
            placeholder :{
                type : String,
                default :'选择日期'
            },
            //日期格式
            format : {
                type : String,
                default : 'HH:mm:ss'
            },
            valueFormat : {
                type : String,
                default : 'HH:mm:ss'
            },
            disabled :{
                type : Boolean,
                default : false
            },
            //是否允许清除
            clearable :{
                type : Boolean,
                default : false
            },
            //快捷选项
            pickerOptions : {
                type : Object,
                default : () => {}
            },
            //change回调
            changeCallBack :{
                type :Function
            },
            blurCallBack :{
                type : Function
            },
            focusCallBack : {
                type : Function
            },
            changeCallBack : {
                type :Function
            }
        },
        data() {
            return {
                result : this.value
            };
        },
    }
</script>