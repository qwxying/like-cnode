<!--suppress HtmlUnknownTarget -->
<template>
  <div>
    <!--        作者基本信息-->
    <el-card class="author">
      <div>作者</div>
      <div>
        <img class="author_img" :src="topic.author.avatar_url" alt="">
        <span>{{topic.author.loginname}}</span>
      </div>
      <p>积分：{{author_info.score}}</p>
      <p>“ 这家伙很懒，什么个性签名都没有留下。 ”</p>
    </el-card>
    <!--        作者其他文章-->
    <el-card class="recent_topics">
      <ul v-for="(recent_topic,index) in author_info.recent_topics" :key="index">
        <li>{{recent_topic.title}}</li>
      </ul>
    </el-card>
    <!--    作者参与的话题-->
    <el-card class="recent_replies">
      <ul v-for="(recent_reply,index) in author_info.recent_replies" :key="index">
        <li>{{recent_reply.title}}</li>
      </ul>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Aside",
    props: ["topic"],
    data() {
      return {
        login_name: "",
        user_url: "https://cnodejs.org/api/v1/user/",
        author_info: {}
      }
    },
    methods: {
      getAuthorInfo() {
        this.$http
          .get(`${this.user_url}${this.login_name}`)
          .then(res => {
              this.author_info = res.data.data
            }
          ).catch(err => {
          console.log(err)
        })
      }
    },
    beforeMount() {
      this.login_name = this.topic.author.loginname
      this.getAuthorInfo()
    }
  }
</script>

<style scoped>
  .el-card {
    margin-bottom: 16px;
  }

  .author_img {
    width: 48px;
    height: 48px;
    border-radius: 3px;
  }
</style>