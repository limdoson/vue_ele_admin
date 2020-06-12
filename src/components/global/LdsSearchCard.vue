<!--
 * @Author: leem
 * @Date: 2020-06-09 23:05:28
 * @LastEditTime: 2020-06-09 23:58:33
 * @Description: file content
--> 
<template>
    <div class='search-card'>
        <el-card class="search-card">
            <lds-form 
                v-model='formData'
                :options='searchFormOption'
                :show-submit-button='false'
                inline
                label-width='70px'>
                <el-from-item slot='form-slot'>
                    <el-button size='mini' type='primary' icon='el-icon-search' @click='searchHandle'>搜索</el-button>
                    <el-button size='mini' type='default' icon='el-icon-more' @click='showDrawer = true' v-if='isShowMoreCondition'>更多搜索条件</el-button>
                </el-from-item>
            </lds-form>
        </el-card>
        <!-- 更多搜索条件 -->
        <el-drawer
            :visible.sync="showDrawer"
            direction="ltr"
            append-to-body
            :close-on-press-escape='false'
            :show-close='false'
            :wrapperClosable='false'
            custom-class='search-drawer'>
            <lds-form 
                v-model='formData'
                :options='drawerFormOption'
                :show-submit-button='false'
                label-width='70px'>
                <el-form-item slot='form-slot'>
                    <el-button size='small' type='primary' icon='el-icon-search' @click='searchHandle'>搜索</el-button>
                    <el-button size='small' type='default' icon='el-icon-circle-close' @click='searchCancel'>取消</el-button>
                </el-form-item>
            </lds-form> 
        </el-drawer>
    </div>
</template>

<script >
    export default {
        props : {
            //form表单数据
            value : {
                type : Object,
                required : true
            },
            //form表单配置项
            options : {
                type : Array,
                required : true
            }
        },
        data () {
            return {
                formData : this.value,//表单绑定的值
                showDrawer : false,//是否显示更多搜索条件
                searchFormOption : this.options.filter(item => !item.inDrawer),//显示在搜索card中的搜索表单配置项
                drawerFormOption : this.options.filter(item => item.inDrawer),//显示在更多搜索中的表单配置项
            }
        },
        computed : {
            isShowMoreCondition () {
                return this.options.some(item => item.inDrawer)
            }
        },
        watch : {
            value (n) {
                this.formData = n;
            }
        },
        methods : {
            searchHandle () {
                this.$emit('input', this.formData)
                this.$emit('search', this.formData)
                this.showDrawer = false;
            },
            //取消搜索
            searchCancel () {
                this.$emit('cancle', this.formData)
                this.showDrawer = false;
            },
            //重置搜索条件
            resetHandle () {
                
            }
        }
    }
</script>
<style lang="less">
    .search-card {
        margin-bottom: 10px;
        .el-card__body {
            padding: 10px;
        }
        .el-form-item {
            margin-bottom: 0;
        }
    }
    .search-drawer {
        .el-drawer__body {
            padding-right: 15px;
        }
    }
</style>
