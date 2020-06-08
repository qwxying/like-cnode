<template>
  <Layout>
    <el-main>
      <el-card><h1>关于</h1>
        <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
        <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
        <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
      </el-card>
    </el-main>
  </Layout>
</template>

<script>
  import Layout from "../components/Layout"

  export default {
    name: "About",
    components: {Layout}
  }
</script>

<style scoped>
  .el-card {
    margin-top: 80px;
  }

  p {
    padding: 12px;
  }
</style>