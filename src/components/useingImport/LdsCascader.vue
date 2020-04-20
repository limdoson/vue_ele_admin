<template>
    <span>
        <el-cascader 
            v-model='result'
            :options='options'>
        </el-cascader>
    </span>
</template>

<script>
    import formMixin from '@u/mixins/formMixin'
    export default {
        mixins :[formMixin],
        props :{
            changeCallBack : {
                type : Function
            },
            clearCallBack :{
                type : Function
            },
            blurCallBack :{
                type : Function
            },
            focusCallBack :{
                type : Function
            },
            //我们默认表达空间的数据源来自于字典数据的维护
            optionCode : {
                type : String,
                defualt : 'empty'
            },
            //空间尺寸 medium/small/mini
            size :{
                type :String,
                default : 'small'
            },
            //option的数据，来自于form-item options传入，如果form-item 有传入option-code 则不生效
            optionData : {
                type : Array,
                default : () => null
            },
            placeholder :{
                type : String,
                default :'请选择'
            },
            //是否禁用
            disabled :{
                type : Boolean,
                default :false
            },
            //是否允许多选
            multiple :{
                type : Boolean,
                default : false
            },
            //是否可搜索
            filterable :{
                type : Boolean,
                default : false
            },
            //是否可清除
            clearable : {
                type : Boolean,
                default : true
            },
            //option的请求时间，init为初始化就请求，visible为下拉框出现时才请求
            optionLoadMode :{
                type : String,
                default : 'init'
            }
        },
        data() {
            return {
                result : this.value
            };
        },
    }
</script>