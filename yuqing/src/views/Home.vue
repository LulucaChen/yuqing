<template>
  <div class="home">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item v-for="idx in headtitles" :key="idx" route>{{idx}}</el-menu-item>
    </el-menu>
    <div class="centercontext">
      <el-menu class="el-menu-demo" mode="vertical">
        <el-menu-item v-for="idx in headtitles" :key="idx">{{idx}}</el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "home",
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
<style scoped>
.centercontext {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>