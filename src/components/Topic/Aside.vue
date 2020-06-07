<!--suppress HtmlUnknownTarget -->
<template>
  <div>
    <!--        作者基本信息-->
    <el-card class="author">
      <div slot="header">作者</div>
      <router-link :to="{path:`/user/${topic.author.loginname}`}">
        <div class="author_info">
          <img class="author_img" :src="topic.author.avatar_url" alt="">
          <span class="author_name">{{topic.author.loginname}}</span>
        </div>
      </router-link>
      <p class="score">积分：{{author_info.score}}</p>
      <p class="signature">“ 这家伙很懒，什么个性签名都没有留下。 ”</p>
    </el-card>
    <!--        作者其他文章-->
    <el-card class="recent_topics">
      <div slot="header">作者其他文章</div>
      <ul>
        <li v-for="(recent_topic,index) in author_info.recent_topics.slice(0,5)" :key="index">
          <router-link :to="{path:`/topic/${recent_topic.id}`}">
            {{recent_topic.title}}
          </router-link>
        </li>
      </ul>
    </el-card>
    <!--    作者参与的话题-->
    <el-card class="recent_replies">
      <div slot="header">作者参与的话题</div>
      <ul>
        <li v-for="(recent_reply,index) in author_info.recent_replies.slice(0,5)" :key="index">
          <router-link :to="{path:`/topic/${recent_reply.id}`}">
            {{recent_reply.title}}
          </router-link>
        </li>
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

  /deep/ .el-card__header {
    background-color: #f6f6f6;
  }

  .author_info {
    display: flex;
    align-items: center;
  }

  .author_name {
    margin-left: 16px;
    color: #778087;
    font-size: 16px;
  }

  .author_img {
    width: 48px;
    height: 48px;
    border-radius: 3px;
  }

  .score {
    font-size: 14px;
  }

  .signature {
    font-size: 13px;
    font-style: italic;
  }

  li {
    padding: 8px 0;
  }

  /deep/ a {
    display: inline-block;
    max-width: 100%;
    color: #778087;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>