<template>
  <div class="headtab">
    <el-menu class="el-menu-demo" mode="vertical" >
      <el-menu-item v-for="idx in headtitles" :key="idx" >{{idx}}</el-menu-item>
    </el-menu>
  </div>
</template>
<style scoped>
</style>
<script>
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: "Tab",
  data() {
    return {
      headtitles: [
        "首页",
        "舆情分析",
        "预警通报",
        "数据报告",
        "系统设置",
        "下载中心"
      ]
    };
  }
};
</script>