<template>
  <div id="app">
    <div class="head-row">
      <div>
        <img id="logo" src="/EXIF.gif" alt="EXIF Viewer" />
      </div>
      <div class="title-wrapper">
        <span class="title">EXIF Viewer</span>
        <span class="description">View all EXIF info for your jpg, jpeg, heic images</span>
      </div>
      <div class="btn-wrapper">
        <link
          href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
          rel="stylesheet"
        />
        <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/jwenjian">
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <span style="margin-left:5px;font-size:19px !important;">Buy me a coffee</span>
        </a>
      </div>
    </div>
    <router-view></router-view>
    <el-row class="footer-row">
      <el-col :span="12">
        Made with ❤️ by
        <a target="_blank" href="https://github.com/jwenjian">jwenjian</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.bmc-button img {
  height: 34px !important;
  width: 35px !important;
  margin-bottom: 1px !important;
  box-shadow: none !important;
  border: none !important;
  vertical-align: middle !important;
}
.bmc-button {
  padding: 7px 15px 7px 10px !important;
  line-height: 35px !important;
  height: 51px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  color: #ffffff !important;
  background-color: #ff813f !important;
  border-radius: 5px !important;
  border: 1px solid transparent !important;
  padding: 7px 15px 7px 10px !important;
  font-size: 20px !important;
  letter-spacing: -0.08px !important;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  margin: 0 auto !important;
  font-family: "Lato", sans-serif !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
}
.bmc-button:hover,
.bmc-button:active,
.bmc-button:focus {
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  text-decoration: none !important;
  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  opacity: 0.85 !important;
  color: #ffffff !important;
}
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
