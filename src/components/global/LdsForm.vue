<template>
    <el-form
        :class='className'
        ref='ldsForm'
        :inline='inline'
        :size='size'
        :label-width="labelWidth"
        :label-position="labelPosition"
        :disabled="disabled"
        :show-message='showMessage'
        :model='formData'
        :rules='rules'
        :style='{width : width}'>
        <template v-for='item in options'>
            <template v-if='!item.slot'>
                <lds-form-item 
                    :option='item' 
                    :key='item.prop'
                    v-model='formData[item.prop]'></lds-form-item>
            </template>
            <template v-else>
                <slot :name='item.prop'></slot>
            </template>
        </template>
        <el-form-item>
            <el-button type='primary' @click='submit'>提交数据</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import ldsFormItem from '@c/useing-import/LdsFormItem'
    export default {
        components : {ldsFormItem},
        props : {
            //表单元素的类名
            className : {
                type :String,
                default : 'lds-form'
            },
            //是否行内表单样式
            inline : {
                type : Boolean,
                default : false
            },
            size :{
                type : String,
                default : 'small'
            },
            labelWidth : {
                type : String,
                default : '120px'
            },
            labelPosition : {
                type : String,
                default : 'right'
            },
            //表单是否禁用
            disabled : {
                type : Boolean,
                default : false
            },
            //是否显示校验错误信息
            showMessage : {
                type : Boolean,
                default : true
            },
            //options配置
            options : {
                type : Array,
                required :true
            },
            //表单form的宽度
            width : {
                type :String,
                default :'100%'
            },
            //表单绑定的值
            value :{
                type : Object
            },
            //提交函数
            submitHandle : {
                type :Function
            },
            validateErrorHandle : {
                type :Function
            }
        },
        data() {
            return {
                formData : this.value,
                defaultRequiredVld : {
                    required :true,
                    message : '该内容必填',
                    trigger: 'blur'
                }
            };
        },
        computed : {
            rules () {
                //判断options是否有某项配置有required属性或validate函数
                let flag  = this.options.some(v => {
                    return v.required || v.validate
                })
                if (flag) {
                    return this.validateHandle(this.options)
                } else {
                    return {}
                } 
            }
        },
        mounted () {
            
        },
        created () {
            
        },
        methods :{
            //验证规则处理函数
            validateHandle (options) {
                //为了节省遍历的数量，取出只有required属性或validate属性的配置项
                let arr = this.options.filter( v => {
                    return v.required || v.validate
                })
                let obj = {}

                arr.map(v => {
                    //如果有自定义的校验规则，优先使用自定义的校验规则
                    if (v.validate) {
                        obj[v.prop] = [
                            {
                                validator : v.validate,
                                trigger : 'blur'
                            }
                        ]
                    } else {
                        if (v.assignVlds) {
                            if (!Array.isArray(v.assignVlds)) {
                                throw new Error('assginVlds必须为一个数组');
                                return;
                            }
                            //如果有需要合并的校验规则，则合并
                            obj[v.prop] = [this.defaultRequiredVld, ...v.assignVlds]
                        } else {
                            //没有则使用默认的
                            obj[v.prop] = [this.defaultRequiredVld]
                        }
                    }
                })
                return obj;
            },
            submit () {
                this.$refs.ldsForm.validate( (valid,rules) => {
                    if (valid) {
                        if (this.submitHandle) {
                            this.submitHandle()
                        }
                    } else {
                        //如果有验证错误的方法，进执行该方法
                        if (this.validateErrorHandle) {
                            this.validateErrorHandle(rules)
                        }
                        return false;
                    }
                })
            }
        },
        watch : {
            value (n) {
                this.formData = n
            },
        }
    }
</script>