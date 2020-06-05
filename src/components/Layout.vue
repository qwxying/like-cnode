<template>
  <div>
    <el-container>
      <el-header height="auto">
        <Nav/>
      </el-header>
      <el-container>
      <slot/>
      </el-container>
      <el-footer height="auto">
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
  .el-header, .el-footer {
    padding: 0;
    background-color: #fff;
  }
  .el-container {
    background-color: #e1e1e1;
    height: 100%;
    margin: 0;
  }
</style>