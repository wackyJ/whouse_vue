<template>
  <div class="ms-login">
    <!-- 最外层背景图片 -->
    <div class="home">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
      <!-- 右上角模块 -->
      <div class="mt-head">
        <a href="">没有账号?</a>
        <a class="black" href="">注册试用</a>
      </div>
      <!-- 登录框 -->
      <div class="login">
      <h1>欢迎登录精斗云</h1>
      <br>
      <br>
        <el-form-item prop="uname">
            <el-input clearable v-model="ruleForm.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input show-password type="password" placeholder="请输入密码"  v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="checked">记住密码</el-checkbox>
        <div class="float">
          <link rel="stylesheet" href="" >忘记密码?
        </div>
        <br>
        <br>
        <br>
        <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <br>
        <div class="more ">
          更多登录方式
        </div>  
        <br>
        <div class="mode">
          <a href="">
            <img src="img/sinablog.png" alt="">
          </a>
          <a href="">
            <img src="img/wechat.png" alt="">
          </a>
        </div>  
      </div>  
    </el-form>
    </div>
  </div>
</template>

<style scoped>
  .home{
    width:100%;height:767px;
		margin:0 auto;
		background:url(../../../login_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .login{
    position: absolute;
    width: 380px;
    height: 300px;
    margin-left:520px;
    margin-top:150px; 
    color: #fff;
    text-align: center;
    }
  .el-form-item{
    margin-bottom: 30px;
  }  
  .float{
    float: right;
  }
  .el-checkbox{
    float: left;
  }
  .el-button{
    width: 100%;
    height: 40px;
    font-size: 18px;
  }
  .mt-head{
    float: right;
    margin-top: 50px;
    margin-right: 30px;
    font-size: 20px;
  }
  .mt-head a{
     color: #fff;  
  }
  .black{
    border: 2px solid #fff;
    background:rgba(0,0,0,0.5);
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 20px;
    color: #fff;
  }
  .more{
    font-size: 20px;
    color: #000;
  }
  .mode a{
    margin:20px; 
  }
  .mode a img{
    width: 20px;
    height: 17px;
  }
</style>

<script>
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