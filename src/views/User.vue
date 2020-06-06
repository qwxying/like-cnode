<template>
  <div>
    <Loading v-if="loading"/>
    <Layout v-else>
      <el-main>
        <el-card>
          <img class="own_img" :src="user.avatar_url" alt="">
          <span>{{user.loginname}}</span>
          <span>{{user.score}} 积分</span>
          <span>注册时间：{{user.create_at|formatDate}}</span>
        </el-card>
        <el-card>
          <div class="recent_topic" v-for="(recent_topic,index) in user.recent_topics" :key="index">
            <img :src="recent_topic.author.avatar_url" alt="">
            <span>
                {{recent_topic.title}}
              </span>
            <span>
              {{recent_topic.last_reply_at}}
            </span>
          </div>
        </el-card>
        <el-card>
          <div class="recent_reply" v-for="(recent_reply,index) in user.recent_replies" :key="index">
            <img :src="recent_reply.author.avatar_url" alt="">
            <span>
                {{recent_reply.title}}
              </span>
            <span>
              {{recent_reply.last_reply_at}}
            </span>
          </div>
        </el-card>
      </el-main>
    </Layout>
  </div>
</template>

<script>
  import Layout from "../components/Layout"
  import Loading from "../components/Loading"

  export default {
    name: "User",
    components: {Loading, Layout},
    data() {
      return {
        loading: false,
        user: {}
      }
    },
    methods: {
      getData() {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
              if (res.data.success) {
                console.log(res)
                this.loading = false
                this.user = res.data.data
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

<style scoped>
  .el-main {
    max-width: 60%;
    margin: 0 auto;
  }

  .el-card {
    margin-bottom: 16px;
  }

  .el-card * {
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  div img {
    display: block;
    width: 30px;
    height: 30px;
  }

  .own_img {
    width: 40px;
    height: 40px;
  }
</style>