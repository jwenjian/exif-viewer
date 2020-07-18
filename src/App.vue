<template>
  <div id="app">
    <div class="head-row">
        <div><img id="logo" src="/EXIF.gif" alt="EXIF Viewer"></div>
        <div class="title-wrapper">
          <span class="title">EXIF Viewer</span>
          <span class="description">View all EXIF info for your jpg, jpeg, heic images</span>
        </div>
        <div class="btn-wrapper">
          <a href="https://www.buymeacoffee.com/jwenjian" target="_blank" rel="noopener noreferrer">Buy me a coffee</a>
        </div>
    </div>
    <router-view></router-view>
    <el-row class="footer-row">
      <el-col :span="12">Made with ❤️ by  <a target="_blank" href="https://github.com/jwenjian">jwenjian</a></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.title-wrapper {
  text-align: center;
}
.description {
  display: block;
  font-size: smaller;
}
.title {
  display: block;
  font-size: larger;
  font-weight: bolder;
}
.btn-wrapper {
  justify-self: flex-end;
  padding-right: 2em;
}
#logo {
  padding-left: 2em;
  height: 15vh;
}
.head-row {
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdfcfc;
}
.footer-row {
  padding: 2em;
  color: white;
  bottom: 0;
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
