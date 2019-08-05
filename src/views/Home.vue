<template>
  <div class="home"  :style="note">
    <table></table>
        <div id="h1" style="text-align:right">
                <a id="a1" href="">已有账号？</a>
                <a id="a2" href="">登录</a>
        </div>
        <div>
            
       <div id="black">
            <h4 style="text-align: center">欢迎注册Mhouse</h4>
           <table id="table" >
               <tr>
                   <td colspan="2">
                       <input type="text" onblur="msg1()"  onfocus="msg2()" id="uname" placeholder="请输入登录名">
                       <span id="msg"></span>
                     </td>                
               </tr>
               <tr>
                   <td colspan="2">
                       <input type="text"  id="phone" placeholder="请输入手机号">
                       <span ></span>
                   </td>
                  
               </tr>
               <tr>
                   <td><input type="text" id="cpwd" placeholder="请输入验证码"></td>
                   <td><a class="" href="">获取验证码</a></td>
               </tr>
               <tr>
                   <td colspan="2"><input type="text" id="password" minlength="8" maxlength="18" placeholder="设置8-18位数字和字母组合的密码"></td>
                   
               </tr>
               <tr>
                   <td colspan="2">
                    <input type="checkbox"  name="hobby" value ="eat">同意《用户协议》和《客户隐私》
                   </td>
                   </tr>
               <tr>
                   <td colspan="2">
                       <button>注册</button>
                   </td>
               </tr>
           </table>
       </div>
        </div>
     
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    HelloWorld
  }
}

</script>
<style>
*{margin:0;padding:0;}
    .home{
            width:100%;height:780px;
            margin:0 auto;
            background-image:url("../assets/login_bg.png");
            /* backgroundImage:"url("+require('../assets/login_bg.png')+")"; */
            /* background-image:url(""); */
            background-repeat: no-repeat;
            background-size: cover;
		}
        
        #black{margin:120px auto;}
        .home a{color:#fff;text-decoration:none;font-size:3px;}
        #a1{ margin-right:15px;}
        #a2{border:1px solid #fff;
        background:rgba(0,0,0,0.3);
        padding-left:27px;
        padding-right:27px;
        padding-top:6px;
        padding-bottom:6px;
        font-size:1rem; 
       }
       #h1{margin-top:25px;margin-right:25px;}
      table{margin:auto;}
      
     #uname,#password,#cpwd,#phone{
        width:100%;height:40px;
        background:#fff no-repeat 97% center;
        box-sizing:border-box;
        margin:15px 0;
        font-size:15px;
        padding:5px  10px;
        border-top:0;
        border-left:0;
        border-right:0;
        
        outline: none;
        background:#b3cce2;
}
     table button{
      width:100%;height:37px;
      border:0;
      background:#0aa1ed;
      margin-top:10px;
      color:#fff;}
      
     
    </style>
    <script>    
    function msg1(){
            //失去焦点时，做非空验证，结果显示在span中
            //1.获取input的value
            var val=uname.value;
            //2.验证是否为空
            if(val==""){
                //3.把结果放入span 
                msg.innerHTML="请输入登录名"
            }else{
                msg.innerHTML="输入正确"
            }
         }
        //获取焦点时，在span中提示用户名6-12位
    </script>



