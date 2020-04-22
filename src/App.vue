<template>
    <div id="app">
        <lds-form
            v-model='form_data'
            label-width='100px'
            width='400px'
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
                    select: null,
                    cascader :null,
                    d :null
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
                        label : '计数器',
                        prop : 'count',
                        type : 'input-number',
                        min : 1,
                        max : 3,
                        changeCallBack : (val) => {
                            console.log(val)
                        } 
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
                        changeCallBack : (val) => {
                            console.log(val)

                        }
                    },{
                        label : '联级选择',
                        prop :'cascader',
                        type :'cascader',
                        optionLoadMode :'visible',
                        showAllLevels :true,
                        filterable :true,
                        optionData : [
                            {
                                id : 5,
                                label : '服务端来的',
                                children : [
                                    {
                                        label : '选项1',
                                        id :6
                                    },{
                                        label : '选项2',
                                        id :7
                                    }
                                ]
                            }
                        ]
                    },{
                        label : '开关',
                        prop : 'switch',
                        type : 'switch',
                        
                    },{
                        label : '日期',
                        prop : 'd',
                        type :'date-picker',
                        pickerType : 'date',
                        required :true,
                        changeCallBack :(val) => {
                            console.log(val)
                        }
                    },{
                        label : '日期时间',
                        prop :'dt',
                        type :'date-time-picker',
                        pickerType :'datetimerange',
                        required : true,
                        changeCallBack :(val) => {
                            console.log(val)
                        }
                    }
                ]
            }
        },
        created () {
            
        },
        mounted () {
            
        },
        methods : {
            test () {
                console.log(this.form_data)
                // this.$store.commit('testMut',1)
            }
        }
    }
</script>
