<template>
<!-- <div>
  <el-input placeholder="请输入内容" v-model="uname" clearable></el-input>
  <el-input placeholder="请输入密码" v-model="upwd" show-password></el-input>
  <el-button @click="login">登录</el-button>
  后期完善：保存密码
</div> -->
  <div class="ms-login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="uname">
            <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="checked">记住密码</el-checkbox>
        <br>
        <br>
        <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
    </el-form>
  </div>
</template>

<script>
import { constants } from 'crypto';
  export default {
    data() {
      return {
        checked:false,
        rules:{},
        ruleForm:{
          username:"",
          password:""
        }
      }
    },
    mounted() {
      this.getCookie();
    },
    methods: {
      submitForm() {
        const self = this;
        //判断复选框是否被勾选 勾选则调用配置cookie方法
        if (self.checked == true) {
          //传入账号名，密码，和保存天数3个参数
          self.setCookie(self.ruleForm.username, self.ruleForm.password, 7);
        }else {
          //清空Cookie
          self.clearCookie();
        }
        //与后端请求代码
        this.login();
      },
      //设置cookie
      setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
      },
      //读取cookie
      getCookie: function() {
        if (document.cookie.length > 0) {
          this.checked=true;
          var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
          for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('='); //再次切割
            //判断查找相对应的值
            if (arr2[0] == 'userName') {
              this.ruleForm.username = arr2[1]; //保存到保存数据的地方
            } else if (arr2[0] == 'userPwd') {
              this.ruleForm.password = arr2[1];
            }
          }
        }
      },
      //清除cookie
      clearCookie: function() {
        this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
      },
      login(){
        this.axios.post("users/v1/login",{
          params:{
            uname:this.ruleForm.username,
            upwd:this.ruleForm.password
          }
        }).then(result=>{
          if(result.data.code==200){
            this.$message({
              type: 'success',
              message: '登录成功!'
            });
            console.log(33333333);
            this.$router.push("/index");
          }else{
            //完善 后期错误信息由后台提供
            this.$message({
              type: 'info',
              message: '用户名或者密码错误!'
            });
          }
        })
    }}
  }
</script>