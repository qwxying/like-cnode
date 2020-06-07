<template>
  <div>
    <Loading v-if="loading"/>
    <Layout v-else>
      <el-main class="main">
        <!--        帖子内容-->
        <Article :topic="topic"/>
        <!--        回复内容-->
        <Reply :topic="topic"/>
      </el-main>
      <el-aside class="aside" width="25%">
        <!--        侧边栏-->
        <Aside :topic="topic"/>
      </el-aside>
    </Layout>
  </div>
</template>

<script>
  import Loading from "../components/Loading"
  import Layout from "../components/Layout"
  import Article from "../components/Topic/Article"
  import Reply from "../components/Topic/Reply"
  import Aside from "../components/Topic/Aside"

  export default {
    name: "Topic",
    components: {Aside, Reply, Article, Layout, Loading},
    data() {
      return {
        loading: false,
        topic: {},
        topic_url: "https://cnodejs.org/api/v1/topic/"
      }
    },
    methods: {
      getData() {
        this.$http
          .get(`${this.topic_url}${this.$route.params.id}`)
          .then(res => {
              if (res.data.success) {
                this.loading = false
                this.topic = res.data.data
              }
            }
          )
          .catch(error => {
            console.log(error)
          })
      }
    },
    watch: {
      $route: "getData"
    },
    beforeMount() {
      this.loading = true
      this.getData()
    }
  }
</script>

<style>
  .main * {
    text-align: start;
  }

  .el-container > .main {
    padding: 20px 5%;
  }

  .aside {
    padding: 20px;
  }

  .aside * {
    text-align: start;
  }

  @media (max-width: 600px) {
    .main {
      padding: 0 !important;
    }
  }

  @media (max-width: 960px) {
    .aside {
      display: none;
    }
  }
</style>