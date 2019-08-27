<template>
    
        <div class="service">
          <div class="s1">
              <div class="service1">
                  <a href=""><img src="../assets/kefu.png" alt=""></a>
                   <p>Tel:400-660-4299</p>
               </div>
                <div class="service2" >
                   <p style="margin-bottom:10px;">日常服务时间</p>
                   <p>周一到周日8:30-21:00</p>
                </div>
          </div> 
          <div class="service3">
            <h3 style="margin-top:10px;margin-left:0px;">*内容描述</h3>
            <!-- <textarea style=" margin-left:25px;min-width:250px;max-width:250px;min-height:100px;" placeholder="请输入需求、改进建议。反馈程序缺陷。及投诉、举报，200字以内。"></textarea> -->
            <el-input
             type="textarea"
             :rows="5"
              placeholder="请输入内容"
              v-model="textarea">
              </el-input>

            <table>
              <tr >
                <td colspan="2" style="padding-left:20px;padding-top:10px;">选择分类:
                  <!-- <select   style="width:180px;" name="city" size="1" >
                    <option value="xq">需求</option>
                    <option value="gj">改进建议</option>
                    <option value="cx">程序错误</option>
                    <option value="ts">投诉</option>
                    <option value="jubao">举报</option>
            </select> -->
             <el-select v-model="value4" clearable placeholder="请选择">
                  <el-option
                   v-for="item in options"
                 :key="item.value"
                  :label="item.label"
                  :value="item.value">
                 </el-option>
            </el-select>
                </td>
               
              </tr>
              <tr>
                <td style="padding:20px;padding-right:0">联系电话:</td>
                <td><el-input
                      placeholder="请输入手机号"
                       v-model="input"
                     clearable>
                     </el-input>
                </td>
              </tr>
              <tr>
                <td colspan="2"><input type="file" name="pic"  id='file'
                   style="visibility:hidden;height:0px;display:block">
                   <button id='upload' style="margin-left:90px;font-size:5px;">上传图片</button><span style="font-size:5px;">仅限"jpg","png"图片</span>
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
      return {
        options: [{
          value: '选项1',
          label: '改进建议'
        }, {
          value: '选项2',
          label: '个人需求'
        }, {
          value: '选项3',
          label: '程序错误'
        }, {
          value: '选项4',
          label: '投诉举报'
        }],
        value4: '' ,
        input:""       
      }
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
  font-size:2px;}
  .service-Tel{
  margin-top:18px;
  font-size:2px;
}
.service>td{
  font-size:2px;
}
.service1{
  margin-top:20px;
  margin-left:30px;
  float: left;
  position: relative;
  clear:left;
  font-size: 15px;
}
.service2{
  float: right;
  position: absolute;
  clear:left;
  margin-top: 30px;
    margin-left: 175px;
    font-size: 2px;
}
.s1{display:flex;}
</style>