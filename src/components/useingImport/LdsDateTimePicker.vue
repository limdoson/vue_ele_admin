<template>
    <el-date-picker
        v-model="result"
        :editable='false'
        :type="pickerType"
        :size='size'
        range-separator="至"
        :placeholder="placeholder"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :format='format'
        :value-format='valueFormat'
        :picker-options="pickerOptions"
        :disabled='disabled'
        :clearable='clearable'
        @change='changeHandle'
        @blur='blurHandle'
        @focus="focusHandle">
    </el-date-picker>
</template>

<script>
    import formMixin from '@u/mixins/formMixin'

    export default {
        mixins: [formMixin],
        props :{
            value :{},
            pickerType : {
                type : String,
                default : 'datetime'  //<datetime, datetimerange>
            },
            size :{
                type : String,
                default : 'small'
            },
            disabled :{
                type : Boolean,
                default : false
            },
            placeholder :{
                type : String,
                default :'选择日期'
            },
            //日期格式
            format : {
                type : String,
                default : 'yyyy-MM-dd HH:mm:ss'
            },
            valueFormat : {
                type : String,
                default : 'yyyy-MM-dd HH:mm:ss'
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