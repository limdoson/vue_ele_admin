<!--
 * @Author: leem
 * @Date: 2020-06-08 23:13:05
 * @LastEditTime: 2020-06-08 23:37:14
 * @Description: file content
--> 
<template>
    <div class="login c-c">
        <div class="login-wrapper">
            <h1 class="center bold">
                数字图像设计管理系统
            </h1>
            <el-form >
                <el-form-item>
                    <el-input v-model.trim='username' placeholder='请输入登录账户' type='text'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model.trim='password' placeholder='请输入账户密码' type='password'></el-input>
                </el-form-item>
            </el-form>
            <div class="center">
                <el-button type='primary' size='small' @click='$router.push(`/index`)'> 立 即 登 录  </el-button>
            </div>
        </div>
    </div>
</template>

<script >
    export default {
        data () {
            return {
                username : null,
                password : null,
            }
        }
    }
</script>
