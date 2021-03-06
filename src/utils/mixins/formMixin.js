/* 
    该mixin用来处理部分表单组件的一些公用方法以及业务逻辑处理
*/ 
export default {
    
    data () {
        return {
            options : null,//选项数据<radio,select,cascader>,
            props : this.defaultProps,//配置选项 90 <cascader>
        };
    },
    created () {
        
        // if (!this.optionCode && !this.optionData) {
        //     throw new Error(`选项${this.type}缺乏选项数据，请至少传入默认的optionData或者optionCode`);
        // }
        this.init()
    },
    methods : {
        init() {
            //根据code请请求字典数据,code的优先级高于optionData
            if (this.optionCode) {
                if (this.optionLoadMode) {
                    if (this.optionLoadMode == 'init') {
                        //请求数据
                        this.getOptionData()
                    }
                } else {
                    this.option = [
                        {
                            label : '1',
                            value :1,
                            id : 1
                        }
                    ]
                }
                return;
            } else {
                if (this.optionData) {
                    this.options = this.optionData;
                }
            }
        },
         /*
        请求数据的具体处理业务
        */
        getOptionData () {
            // get option Data form server by code
            this.options = [
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
        },
        /*
        修改时触发的函数,
        支持组件：radio, select, cascader, switch, date-picker
        */
        changeHandle (val) {
            if (this.changeCallBack) {
                this.changeCallBack(val)
            }
        },
        /*
        clear 时触发的方法
        支持 type = select , date-picker
        */ 
        clearHandle (val) {
            this.result = null;
            this.$emit('input', this.result)
            if (this.clearCallBack) {
                this.clearCallBack(val)
            }
        },
        /*
        控件blur 时触发的方法
        支持 type = select, date-picker
        */ 
        blurHandle (e) {
            if (this.blurCallBack) {
                this.blurCallBack(e, this.result)
            }
        },
        /*
        控件focus  时触发的方法
        支持 type = select, date-picker
        */ 
        focusHandle (e) {
            if (this.focusCallBack) {
                this.focusCallBack(e,this.result)
            }
        },
        /* 
        选择框显示时触发函数，节省请求资源
        支持 type= select, cascader
        */
        visibleChange (v) {
            if (v && this.optionLoadMode == 'visible') {
                this.getOptionData()
            }
        }
    },
    watch :{
        value (n) {
            this.result = n;
        },
        result (n) {
            this.$emit('input',n)
        }
    }
}