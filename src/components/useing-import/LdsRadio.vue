<template>
    <el-radio-group 
        v-model='result'
        :disabled='disabled'
        @change='changeHandle'>
        <el-radio :label='item.value' v-for='item in options' :key='item.id'>{{item.label}}</el-radio>
    </el-radio-group>
</template>

<script>
    import formMixin from '@u/mixins/formMixin'
    export default {
        mixins : [formMixin],
        props : {
            value  : {
                default :null
            },
            disabled :{
                type : Boolean,
                default :false
            },
            changeCallBack : {
                type : Function
            },
            //我们默认表达空间的数据源来自于字典数据的维护
            code : {
                type : String,
                defualt : 'empty'
            },
            optionData : {
                type : Array,
                default : () => null
            }
        },
        data() {
            return {
                result : this.value,
            }
        },
        mounted () {
            
        },
        methods :{
            
        },
        
    }
</script>