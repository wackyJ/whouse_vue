<template>
    <div>
         <div class="home">
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
                   	<input name="uname" id="uname" placeholder="请输入登录名">
					           <div id="uname-msg"></div>
                   </td>                
              
               <tr>
                   <td colspan="2">
                        <input type="password" id="phone" name="phone" placeholder="请输入手机号">
					              <div id="password-msg"></div>
                       
                   </td>
              
               <tr>
                   <td>
                   <input type="text" id="cpwd" name="cpwd" placeholder="请输入验证码">
                   </td>
                   <td><a class="" href="">获取验证码</a></td>
               </tr>
               <tr>
                   <td colspan="2"><input type="text" id="password" name="password" minlength="8" maxlength="18" placeholder="设置8-18位数字和字母组合的密码"></td>
                   
               </tr>
               <tr>
                   <td colspan="2">
                    <input type="checkbox"   name="hobby" value ="eat">同意《用户协议》和《客户隐私》
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
    </div>
</template>
 <script>
    export default {
//         $(":text").blur(function(){
// 			//调用验证函数，传入规定的四个参数
// 			vali($(this),3,9,"用户名必须介于3-9位之间")
// 		})
// 		//封装函数
// 		function vali($txt,minlen,maxlen,msg){
// 			//3.查找要修改的元素
// 			var $span=$txt.next();
// 			//4.修改元素
// 			//获得当前文本框的内容
// 			var value=$txt.val();
// 			//没参数就执行获取
// 			//如果验证当前文本框内容正确
// 			if(value.length>=minlen&&value.length<=maxlen){
// 				$span.html(`<img src="src/assets/ok.png">`);
// 				return true;
// 			}else{
// 				$span.html(`<img src="src/assets/err.png">${msg}`);
// 				return false;
// 			}
// 		}
// 		$(":password").blur(function(){
// 			vali($(this),9,11,"请注意手机号格式")
// 		});
//         $(":button").click(function(){
// 			//如果验证姓名文本框不通过
// 			var $txtName=$(":text");
// 			var $txtPwd=$(":password");
// 			if(!vali($txtName,3,9,"用户名必须介于3-9位之间")){
// 				//让姓名文本框获得焦点
// 				$txtName.focus();
// 			}else if(!vali($txtPwd,6,16,"密码必须介于6-16位之间")){
// 				$txtPwd.focus();
// 			}else {
// 				alert("注册成功")
         //	}
// 		})
 }
</script>
<style scoped>
    *{margin:0;padding:0;}
    .home{
            width:100%;height:780px;
            margin:0 auto;
            background-image:url("/img/login_bg.png");
           
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
      
     #uname,#phone,#cpwd,#password{
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
      #uname-msg,#password-msg{
          color:red;
      }
</style>