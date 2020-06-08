<template>
  <div class="wrapper">
    <el-container class="container">
      <el-header class="header" height="auto">
        <Nav/>
      </el-header>
      <el-container class="main">
        <slot/>
      </el-container>
      <el-footer class="footer" height="160px">
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import Footer from "./Footer"
  import Nav from "./Nav"

  export default {
    name: "Layout",
    components: {Footer, Nav}
  }
</script>

<style scoped>
  .container, .wrapper {
    height: 100%;
    display: flex;
  }

  .el-header, .el-footer {
    padding: 0;
    background-color: #fff;
  }

  .el-container {
    background-color: #e1e1e1;
    height: 100%;
    margin: 0;
    flex-grow: 1;
  }

  @media (max-width: 767px) {
    .footer {
      display: none;
    }

  }
</style>