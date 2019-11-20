<template>
  <div id="app">
    <el-menu class="el-menu-demo" mode="horizontal" default-active="2" router @open="handleOpen" @close="handleClose" style="padding-left:15%">
      <el-menu-item v-for="idx in headtitles" :key="idx" :index = 'idx[Object.keys(idx)[0]]'>{{Object.keys(idx)[0]}}</el-menu-item>
    </el-menu>
    <div class="centercontext">
      <el-menu class="el-menu-demo" mode="vertical" default-active="2" router @open="handleOpen" @close="handleClose" >  
        <el-menu-item v-for="idx in headtitles" :key="idx" :index = 'idx[Object.keys(idx)[0]]'>{{Object.keys(idx)[0]}}</el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "home",
  data() {
    return {
      headtitles: [
        { 首页: "/views/First" },
        { 舆情分析: "/views/Analysis" },
        { 预警通报: "/views/Alert" },
        { 数据报告: "/views/Data" },
        { 系统设置: "/views/System" },
        { 下载中心: "/views/Download" }
      ],
      navroutername: ["Home", "Analysis", "Alert", "Data", "System", "Download"]
    };
  }
};
</script>
<style>
.centercontext {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
