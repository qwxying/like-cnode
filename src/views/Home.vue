<template>
  <Layout>
    <el-main>
      <h1>首页</h1>
    </el-main>
    <el-aside width="25%">
      <h1>首页侧边栏</h1>
    </el-aside>
  </Layout>
</template>

<script>
  import Layout from "../components/Layout"
  export default {
    name: "Home",
    components: {Layout},
  }
</script>

<style scoped>

  .el-aside {
    border: 1px solid red;;
  }

</style>