<template>
  <div>
    <Loading v-if="this.loading"/>
    <Layout v-else>
      <el-main>
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
          <div v-html="topic.content" class="topic_content"></div>
        </el-card>
      </el-main>
    </Layout>
  </div>
</template>

<script>
  import Loading from "../components/Loading"
  import Layout from "../components/Layout"

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
  @import url('../assets/markdown-github.css');
</style>