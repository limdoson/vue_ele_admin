<template>
    <el-switch
        v-model='result'
        :disabled='disabled'
        :size='size'
        :active-color='activeColor'
        :inactive-color='inactiveColor'
        @change='changeHandle'></el-switch>
</template>

<script>
    import formMixin from '@u/mixins/formMixin'
    export default {
        mixins : [formMixin],
        props : {
            value :{},
            size : {
                type : String,
                default : 'small'
            },
            disabled : {
                type : Boolean,
                default : false
            },
            //打开时的背景颜色
            activeColor :{
                type : String,
                default : '#409EFF'
            },
            //关闭时的背景颜色
            inactiveColor :{
                type : String,
                default : '#C0CCDA'
            },
            //change触发函数
            changeCallBack : {
                type : Function
            },
        },
        data() {
            return {
                result : this.value
            };
        },
    }
</script>