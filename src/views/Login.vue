<template>
<div>
  <el-input placeholder="请输入内容" v-model="uname" clearable></el-input>
  <el-input placeholder="请输入密码" v-model="upwd" show-password></el-input>
  <el-button @click="login">登录</el-button>
</div>
</template>

<script>
  export default {
    data() {
      return {
        uname : '',
        upwd: ''
      }
    },
    methods:{
      login(){
        this.axios.post("users/v1/login",{
          params:{
            uname:this.uname,
            upwd:this.upwd
          }
        }).then(result=>{
          if(result.data.code==200){
            this.$message({
              type: 'success',
              message: '登录成功!'
            });
            this.$router.push("/index");
          }else{
            this.$message({
              type: 'info',
              message: '用户名或者密码错误!'
            });
          }
        })
      }
    }
  }
</script>