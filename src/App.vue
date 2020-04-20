<template>
    <div id="app">
        <lds-form
            v-model='form_data'
            label-width='100px'
            width ='400px'
            :options='options'>
            <el-form-item label='文字' prop='text' slot='text'>
                <el-input v-model.trim='form_data.text' placeholder="禁止输入空格"></el-input>
            </el-form-item>
        </lds-form>
        <el-button v-test='`123`' @click='test' type='primary'>{{msg | test}}</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg : '按钮',
                form_data : {
                    sex :null,
                    select: null
                },
                options : [
                    {
                        label : 'label',
                        prop : 'number',
                        type : 'input',
                        inputType : 'text',
                        clearable : true,
                        defaultValue : 10,
                        required :true,
                        assignVlds : [
                            {
                                type : 'email',
                                message :'请输入正确的邮箱地址',
                                trigger : 'blur'
                            }
                        ],
                    },{
                        prop :'text',
                        slot : true,
                        required :true
                    },{
                        label : '性别',
                        prop :'sex',
                        type :'radio',
                        optionData : [
                            {
                                id :1,
                                label :'选项1',
                                value :1
                            },{
                                id :2,
                                label :'选项2',
                                value :2
                            }, {
                                id :3,
                                label :'选项3',
                                value :3
                            },{
                                id :4,
                                label :'选项4',
                                value :4
                            }
                        ],
                        required :true,
                        disabled :false,
                        
                    },{
                        label :'下拉框',
                        prop :'select',
                        type : 'select',
                        placeholder : '选择东西',
                        filterable : true,
                        optionLoadMode :'visible',
                        required :true,
                        optionData : [
                            {
                                id :1,
                                label :'苹果',
                                value :1
                            },{
                                id :2,
                                label :'梨子',
                                value :2
                            },{
                                id :3,
                                label : '大师傅'
                            }
                        ],
                        focusCallBack : (e,val) => {
                            console.log('focus',val)
                        }
                    }
                ]
            }
        },
        created () {
            
        },
        methods : {
            test () {
                console.log(this.form_data)
                // this.$store.commit('testMut',1)
            }
        }
    }
</script>