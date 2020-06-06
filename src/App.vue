<template>
  <div id="app">
    <div class="content">
      <div class="back_top">
        <router-view/>
      </div>
      <el-backtop
        style="
        box-sizing: content-box;
        right: 0;
        bottom: 80px;
        width: 24px;
        height: 80px;
        line-height: 20px;
        font-size: 14px;
        color:grey;
        border: 1px solid #ccc;
        border-right: 0;
        background-color:#f5f5f5;
        border-radius: 12px 0 0 12px;
        padding: 12px 0 12px 5px;"
        target=".content .backtop">
        回到顶部
      </el-backtop>
    </div>
  </div>
</template>


<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  ul, ol, li {
    list-style: none
  }

  a {
    text-decoration: none;
    text-shadow: none;
    color: #ccc;
    font-size: 14px;
  }

  #app {
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .content {
    height: 100%;
  }

  html, body {
    height: 100%;
  }

  .back_top {
    overflow: scroll;
    height: 100%;
  }

</style>
