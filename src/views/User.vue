<!--suppress HtmlUnknownTarget -->
<template>
  <Loading v-if="loading"/>
  <Layout v-else>
    <el-main>
      <!--        用户基本信息-->
      <el-card>
        <a slot="header" class="to_home" href="/">主页/</a>
        <div class="user_info">
          <img class="own_img" v-lazy="user.avatar_url" alt="">
          <span>{{user.loginname}}</span>
        </div>
        <p class="score">{{user.score}} 积分</p>
        <p class="registration_time">注册时间：{{user.create_at|formatDate}}</p>
      </el-card>
      <!--        用户近期文章-->
      <el-card>
        <div slot="header">用户近期文章</div>
        <ul>
          <li v-for="(recent_topic,index) in user.recent_topics.slice(0,5)" :key="index">
            <img v-lazy="recent_topic.author.avatar_url" alt="">
            <router-link :to="{path:`/topic/${recent_topic.id}`}">
              {{recent_topic.title}}
            </router-link>
            <span class="reply_time">{{recent_topic.last_reply_at|formatDate}}</span>
          </li>
        </ul>
      </el-card>
      <!--        用户近期回复-->
      <el-card>
        <div slot="header">用户回复的文章</div>
        <ul>
          <li class="reply" v-for="(recent_reply,index) in user.recent_replies.slice(0,5)" :key="index">
            <router-link class="img" :to="{path:`/user/${recent_reply.author.loginname}`}">
              <img v-lazy="recent_reply.author.avatar_url" alt="">
            </router-link>
            <router-link :to="{path:`/topic/${recent_reply.id}`}">
              {{recent_reply.title}}
            </router-link>
            <span class="reply_time">
              {{recent_reply.last_reply_at|formatDate}}
            </span>
          </li>
        </ul>
      </el-card>
    </el-main>
  </Layout>
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
        user_url: "https://cnodejs.org/api/v1/user/",
        user: {}
      }
    },
    methods: {
      getData() {
        this.$http
          .get(`${this.user_url}${this.$route.params.name}`)
          .then(res => {
              if (res.data.success) {
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
    watch: {
      $route: "getData"
    }
    ,
    beforeMount() {
      this.loading = true
      this.getData()
    }
  }
</script>

<style scoped>

  .to_home {
    color: #80bd01;
  }

  .reply_time {
    font-size: 11px;
    color: #777;
    white-space: nowrap;
  }

  li {
    display: flex;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #f0f0f0;
  }

  .reply .img {
    padding: 0;
    margin: 0;
    height: 30px;
    width: 30px;
  }

  .el-card li > a {
    max-width: 100%;
    font-size: 16px;
    line-height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    color: #0088cc;
    margin-right: auto;
    padding-left: 12px;
  }

  .el-card li > a:hover {
    color: #005580;
    text-decoration: underline;
  }


  .el-card {
    margin-bottom: 16px;;
  }


  .score {
    font-size: 14px;
    padding: 4px;
  }

  .registration_time {
    font-size: 14px;
    padding: 4px;
    color: #ababab;
  }

  .user_info {
    display: flex;
    align-items: center;
  }

  .user_info > img {
    height: 40px;
    width: 40px;
    border-radius: 3px;
  }

  .user_info > span {
    color: #778087;
    margin-left: 16px;
  }

  img {
    height: 30px;
    width: 30px;
    border-radius: 3px;
  }


  .el-main {
    max-width: 70%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    .el-main {
      max-width: 100%;
      padding: 0;
    }
  }

  .el-main * {
    text-align: start;
  }

</style>