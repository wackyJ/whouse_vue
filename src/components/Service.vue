<template>
  <div class="service">
    <div class="s1">
      <div class="service1">
        <a href="">
          <img src="../assets/kefu.png" alt="">
        </a>
        <p style="font-size:14px">Tel:400-660-4299</p>
      </div>
      <div class="service2" >
        <p class="p1style">日常服务时间</p>
        <p class="p2style">周一到周日8:30-21:00</p>
      </div>
    </div> 
    <div class="service3">
      
      <table>
        <tr>
          <td colspan="2">
              <h4 class="text">*内容描述:</h4>
              <textarea class="textarea" placeholder="请输入需求、改进建议。反馈程序缺陷。及投诉、举报，200字以内。"></textarea>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="select1">
            选择分类:
            <select class="selectstyle" name="city" size="1" >
              <option value="xq">需求</option>
              <option value="gj">改进建议</option>
              <option value="cx">程序错误</option>
              <option value="ts">投诉</option>
              <option value="jubao">举报</option>
            </select>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="phone1">联系电话:
            <input type="phone"  class="phonestyle" placeholder="请输入联系方式">
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding-top:10px;"><input type="file" name="pic" id='file'
              class="file">
            <el-button class="buttonstyle">上传图片</el-button>
            <span style="font-size:8px;">*仅限"jpg","png"图片</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <el-button type="submit" class="submit">提交</el-button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
    data() {
     return {
       
     }
    }
  }
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
    font-size:34px;
  }
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
    clear:left;
    position: relative;
    font-size: 20px;
  }
  .service2{
    float: right;
    position: absolute;
    clear:left;
    margin-top: 30px;
    margin-left: 150px;
    font-size: 12px;
  }
  .s1{
    display:flex;
  }
  .p1style{ margin-bottom:5px;
  margin-top:9px;}
  .p2style{
    margin-top:13px;
    margin-left: 9px;
  }
  .text{
    margin-top:10px;margin-left:-165px;padding-bottom:5px;
  }
  .textarea{margin-left:22px;
      min-width:247px;
      max-width:250px;
      min-height:100px;
      margin-top:10px;}
  .select1{padding-left:22px;
      padding-top:10px;
  }
  .selectstyle{
    width:180px;
    padding:2px;}
  .phone1{
    padding-left:22px;
    padding-top:10px;}
  .phonestyle{
    padding:2px;
    width: 172px;}
  .file{
    visibility:hidden;
    height:0px;
    display:block}
  .submit{
    margin-left:210px;
    margin-top:10px;
    padding:2px;
    border-radius: 5px;
    padding-left:15px;
    padding-right:15px;
 }
  .buttonstyle{
    padding:2px;
    border-radius: 5px;}
</style>