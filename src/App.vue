<template>
  <div id="app">
    <el-row class="head-row">
      <el-col :span="3">Logo EXIF Viewer</el-col>
      <el-col :offset="21" :span="3">Buttons</el-col>
    </el-row>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.head-row {
  min-height: 10vh;
}
html body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
  min-height: max(600px, calc(100vh));
}
</style>
