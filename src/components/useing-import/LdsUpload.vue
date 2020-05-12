<template>
    <el-upload
        :action='action'
        :accept='acceptFileType'
        :file-list="fileList"
        :name='name'
        :headers='headers'
        :limit='fileCountLimit'
        list-type="picture"
        :before-upload='beforeUploadHandle'
        :on-success='uploadSuccess'
        :on-remove='removeHandle'
        :on-error='errorHandle'
        :on-exceed='exceedHandle'>
        <el-button size="small" type="primary" icon='el-icon-upload'>点击上传</el-button>
    </el-upload>
</template>

<script>
    /* 
        图片类型
        @：用来beforeUpload之前判断上传的是图片还是其他文件
        @todo：类型可能不全，发现遗漏补充
    */
    const imgTypes = ['image/png','image/jpeg','image/jpg','image/gif']

    export default {
        props : {
            value :{},
            //设置上传的请求头部
            headers :{
                type : Object,
                default :() => {
                    return {

                    }
                }
            },
            //上传的文件字段名
            name :{
                type : String,
                default : process.env.VUE_APP_FILE_UPLOAD_NAME || 'uploadFile'
            },
            //上传时附带的额外参数
            data : {

            },
            //上传请求路径
            uploadUrl : {
                type : String,
                default : null
            },
            //最大允许上传个数
            limit :{
                type : Number,
                default : null
            },
            //允许上传的文件类型
            accept :{
                type : String,
                default : null
            }
        },
        data() {
            return {
                fileList : [],
                //上传的路径
                action : this.uploadUrl || process.env.VUE_APP_FILE_UPLOAD_API,
                //上传最大数量
                fileCountLimit : this.limit || process.env.VUE_APP_FILE_UPLOAD_COUNT_LIMIT,
                //图片大小限制
                imgLimitSize  : process.env.VUE_APP_IMG_SIZE_UPLOAD_LIMIT,
                //其他文件大小限制
                fileLimitSize : process.env.VUE_APP_FILE_SIZE_UPLOAD_LIMIT,
                //允许上传的文件类型
                acceptFileType : this.accept || process.env.VUE_APP_FILE_UPLOAD_ACCEPT_TYPE,
                //最终的提交结果
                result : this.value
            };
        },
        created () {
            
        },
        methods: {
            //上传文件之前的钩子
            beforeUploadHandle (file) {
                //如果是图片，则限制不能超过imgSize的大小，如果不是图片，则不能超过fileSize的大小，单位为兆
                let fileType = file.type;
                let fileSize = file.size / 1024 / 1024
                let isImg = imgTypes.includes(fileType) ? true :false;
                if (isImg) {
                    if (fileSize > this.imgLimitSize) {
                        this.$message({
                            message :`图片大小不能超过${this.imgLimitSize}兆`,
                            type :'error'
                        })
                        return false;
                    }
                } else {
                    if (fileSize > this.fileLimitSize) {
                        this.$message({
                            message :`文件大小不能超过${this.imgLimitSize}兆`,
                            type :'error'
                        })
                        return false;
                    }
                }
            },
            //上传成功的钩子
            uploadSuccess (response, file, fileList) {
                /* 
                    @todo:配合后端验证上传所需要的业务逻辑，如：需要登录等其他业务
                */
                this.fileList = fileList;

                /* 
                    @toto: 根据后端需要的数据格式，构造emit出去的结果
                    这里模拟提交一份
                */

                
                this.emitHandle()
                // console.log(response, file, fileList)
            },
            //上传失败钩子
            errorHandle (err,file, fileList) {
                this.$message({
                    message :`文件${file.name}上传失败，请重试`,
                    type :'error'
                })
            },
            //文件处处个数限制的钩子
            exceedHandle (files, fileList) {
                this.$message({
                    message :`最多允许上传${this.fileCountLimit}个文件或图片`,
                    type :'error'
                })
            },
            //移除文件的钩子
            removeHandle (file, fileList) {
                /* 
                    @toto：通知后端删除文件
                */
                this.fileList = fileList;
                this.emitHandle()
            },
            //emit业务逻辑
            emitHandle() {
                this.$emit('input',[1,2])
            }
        }
    }
</script>