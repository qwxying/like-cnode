<template>
  <div>
    <Loading v-if="this.loading"/>
    <Layout v-else>
      <el-main class="main">
        <el-card class="topic">
          <div slot="header" class="topic_title">
            <div class="topic_title">{{topic.title}}</div>
            <ul>
              <li>• 发布于：{{topic.create_at | formatDate}}</li>
              <li>• 作者：
                {{topic.author.loginname}}
              </li>
              <li>• {{topic.visit_count}}次浏览</li>
              <li>• 来自{{topic | tabFormatter}}</li>
            </ul>
          </div>
          <div class="markdown-body">
            <div v-html="topic.content" class="topic_content"></div>
          </div>
        </el-card>
      </el-main>
      <el-aside width="25%">
        <h1>666</h1>
      </el-aside>
    </Layout>
  </div>
</template>

<script>
  import Loading from "../components/Loading"
  import Layout from "../components/Layout"
  import "github-markdown-css"

  export default {
    name: "Topic",
    components: {Layout, Loading},
    data() {
      return {
        loading: false,
        topic: {}
      }
    },
    methods: {
      getData() {
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res => {
              if (res.data.success) {
                this.loading = false
                this.topic = res.data.data
                console.log(this.topic.content)
              }
            }
          )
          .catch(error => {
            console.log(error)
          })
      }
    },
    beforeMount() {
      this.loading = true
      this.getData()
    }
  }
</script>

<style>
  .el-aside {
    border: 1px solid red;
  }

  .markdown-body {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .main, .markdown-body {
      padding: 0 !important;
    }

    .el-aside {
      display: none;
    }
  }

  .markdown-text > * {
    text-align: left;
  }
</style>