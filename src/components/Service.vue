<template>
    
        <div class="service">
          <div class="s1">
              <div class="service1">
                  <a href=""><img src="../assets/kefu.png" alt=""></a>
                   <p style="font-size:15px">Tel:400-660-4299</p>
               </div>
                <div class="service2" >
                   <p style="margin-bottom:5px;">日常服务时间</p>
                   <p style="margin-top:15px;">周一到周日8:30-21:00</p>
                </div>
          </div> 
          <div class="service3">
            <h3 style="margin-top:0px;margin-left:-194px;padding-bottom:5px;">*内容描述:</h3>
            <textarea style=" margin-left:0px;min-width:247px;max-width:250px;min-height:100px;" placeholder="请输入需求、改进建议。反馈程序缺陷。及投诉、举报，200字以内。"></textarea>
           
            <table>
              <tr >
                <td colspan="2" style="padding-left:22px;padding-top:10px;">选择分类:
                  <select   style="width:180px;padding:3px;border-radius:5%;" name="city" size="1" >
                    <option value="xq">需求</option>
                    <option value="gj">改进建议</option>
                    <option value="cx">程序错误</option>
                    <option value="ts">投诉</option>
                    <option value="jubao">举报</option>
                    </select>
             
                </td>
               
              </tr>
              <tr>
                <td colspan="2" style="padding-left:22px;padding-top:10px;">联系电话:
                
                  <input type="phone" style="padding:3px;border-radius:5%" placeholder="请输入联系方式">
              </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top:10px;"><input type="file" name="pic"  id='file'
                   style="visibility:hidden;height:0px;display:block">
                  <button>上传图片</button>
                   <span style="font-size:10px;">仅限"jpg","png"图片</span>
               </td>
               </tr>
                <tr>
                  <td colspan="2">
                     <input type="submit" style="margin-left:240px;margin-top:10px;" value="提交">
                  </td>
                </tr>
            </table>
         </div>
        </div>
 
</template>
<script>
export default {
    data() {
     
    }
  }
  //   export default {
  //   data() {
  //     return {
  //       input10: ''
  //     }
  //   }
  // }

</script>
<style scoped>
  .service-img{
  width:25px;
  margin-left:30px;
  margin-top:20px;
}
.service1 a{
  margin-top:30px;
  margin-left:10px;
  font-size:34px;}
  .service-Tel{
  margin-top:18px;
  font-size:2px;
}
.service>td{
  font-size:2px;
}
.service1{
  margin-top:30px;
  margin-left:30px;
  float: left;
  position: relative;
  clear:left;
  font-size: 20px;
}
.service2{
  float: right;
  position: absolute;
  clear:left;
  margin-top: 30px;
    margin-left: 150px;
    font-size: 15px;
}
.s1{display:flex;}
</style>