<!--
 * @Author: leem
 * @Date: 2020-06-08 22:41:47
 * @LastEditTime: 2020-06-08 23:40:29
 * @Description: file content
--> 
<template>
    <grid-manager :option="tableOption" :callback="callback" ref="grid"></grid-manager>
</template>
<script>
    //默认配置项，如需修改，请传入option 进行覆盖
    let defaultOption = {
        supportAjaxPage: true,
        // 表格唯一标识
        gridManagerName: 'test-gm',
        // 高度
        height: '300px',
        // 首次是否加载
        firstLoading: false,
        // 使用分页
        supportAjaxPage: true,
        // 数据来源，类型: string url || data || function return[promise || string url || data]
        ajaxData: (settings, params) => {
            return tenantRelateShop(params);
        },
        // 请求失败后事件
        ajaxError: err => {
            console.log(err);
        },
        // checkbox选择事件
        checkedAfter: rowList => {
            this.selectedCheck(rowList);
        },
        // 每页显示条数
        pageSize: 20
    }

    export default {
        props : {
            //表格配置
            option : {
                type : Object,
                default : () => {
                    return {}
                }
            },
            //表格数据
            columnData :{
                type : Array,
                default : () => {
                    return [
                        //api全配置
                        {
                            key: 'shopId', //字段key
                            width: '180px', //列宽 ->仅支持px单位，且最少要保留一列不设置width
                            text: '店铺id', //表头名称
                            align: 'center',//文字对齐方式 可选值：['left', 'center', 'right']
                            fixed : 'left',//是否固定在左侧或右侧 可选值：['left', 'right']
                            isShow : true, //列显示隐藏
                            disableCustomize : false,//该列是否禁止使用个性配置功能(宽度调整、位置更换、列的显示隐藏)
                            disableMoveRow: false,// 指定当前列禁止触发行移动事件，默认为:false
                            disableRowCheck: false,// 指定当前列禁止触发行选中事件，默认为:false
                        }
                    ]
                },
                required :true
            }
        },
        data () {
            return {
                tableOption : null,
                propsOption : this.option,
            }
        },
        created () {
            if (this.propsOption) {
                for (let key in this.propsOption) {
                    defaultOption[key] = this.propsOption[key]
                }
            }
            defaultOption.columnData = this.columnData
            this.tableOption = defaultOption
        }
    }
</script>
