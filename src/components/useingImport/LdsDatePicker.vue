<template>
    <el-date-picker
        v-model='result'
        :type='pickerType'
        :size='size'
        :placeholder='placeholder'
        :format='formatComputed'
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :picker-options="pickerOptions"
        :value-format='valueFormatComputed'
        :disabled='disabled'
        :clearable='clearable'
        @change='changeHandle'
        @blur='blurHandle'
        @focus="focusHandle"></el-date-picker>
</template>

<script>
    import formMixin from '@u/mixins/formMixin'
    //定义不同类型的value-format对象
    const pickerValueFormat = {
        date : 'yyyy-MM-dd',
        year : 'yyyy',
        month :'yyyy-MM',
        daterange : 'yyyy-MM-dd',
        monthrange :'yyyy-MM'
        //@todo 由于elementui type为week时，使用valueformat会报错，这里要使用moment.js做一下处理
        //考虑到目前使用周时间单位的较少，暂不处理
        // moment.js : http://momentjs.cn/docs/
    }

    //定义不同类型的format
    const pickerFormat = {
        date : 'yyyy-MM-dd',
        year : 'yyyy',
        month :'yyyy-MM',
        week : 'yyyy 第 WW 周',
        daterange : 'yyyy-MM-dd',
        monthrange :'yyyy-MM'
    }

    export default {
        mixins : [formMixin],
        props :{
            value : {},
            pickerType : {
                type : String,
                default : 'date'  //<week, month, year, dates, daterange, monthrange>
            },
            size :{
                type : String,
                default : 'small'
            },
            placeholder :{
                type : String,
                default :'选择日期'
            },
            //日期格式
            format : {
                type : String,
                default : null
            },
            valueFormat : {
                type : String,
                default : null
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
                result :this.value
            };
        },
        computed : {
            valueFormatComputed () {
                if (this.valueFormat) {
                    //如果有传prop进来，则使用props的值
                    return this.valueFormat
                } else {
                    //没有传prop就根据picketype来区分情况赋值
                    return pickerValueFormat[this.pickerType]
                }
                
            },
            formatComputed () {
                if (this.format) {
                    return this.format;
                } else {
                    return pickerFormat[this.pickerType]
                }
            }
        }
    }
</script>