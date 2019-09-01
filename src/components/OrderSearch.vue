<template>
  <el-select v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in search_options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    props:["search_options"],
    data(){
        return{
            value:""
        }
    }
  }
</script>