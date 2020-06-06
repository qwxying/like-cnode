<template>
  <div>
    <Loading v-if="loading"/>
    <Layout v-else>
      <el-main class="main">
        <!--        帖子内容-->
        <el-card class="topic">
          <div slot="header" class="topic_title">
            <div class="topic_title">{{topic.title}}</div>
            <ul class="topic_info">
              <li>发布于：{{topic.create_at | formatDate}}</li>
              <li>作者：
                {{topic.author.loginname}}
              </li>
              <li>{{topic.visit_count}} 次浏览</li>
              <li>来自 {{topic | tabFormatter}}</li>
            </ul>
          </div>
          <div class="markdown-body">
            <div v-html="topic.content" class="topic_content"></div>
          </div>
        </el-card>
        <!--        回复内容-->
        <el-card class="replies">
          <div slot="header" class="topic_title">
            <span>{{topic.reply_count}} 回复</span>
          </div>
          <div v-for="(reply,index) in topic.replies" :key="index" class="reply">
            <router-link :to="{
              path:`/user/${reply.author.loginname}`,
               params:{
                name:reply.author.loginname
              }
            }">

              <img :src="reply.author.avatar_url" alt="pic">
            </router-link>

            <span>
            {{reply.author.loginname }}
            </span>
            <span>
              第{{index+1}}楼
            </span>
            <span>
              {{reply.create_at|formatDate}}
            </span>
            <span v-if="reply.ups.length>0">👍{{reply.ups.length}}</span>
            <span v-else></span>
            <p v-html="reply.content">

            </p>
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

  .topic_info {
    display: flex;
  }

  .topic_info > li {
    margin-left: 32px;
  }

  .el-aside {
    border: 1px solid red;
  }

  .markdown-body {
    box-sizing: border-box;
    width: 100%;
    /*margin: 0 auto;*/
    /*padding: 0;*/
  }

  @media (max-width: 767px) {
    .main, .markdown-body {
      padding: 0 !important;
    }

    .topic_info {
      display: block;
    }

    .topic_info > li {
      list-style: none;
    }

    .el-aside {
      display: none;
    }
  }

  .markdown-text > * {
    text-align: left;
  }

  .markdown-text > ul, ol, li {
    list-style: disc outside none;
  }

  .replies {
    border: none !important;
  }

  .reply {
    text-align: start;
  }

  .reply img {
    height: 30px;
    width: 30px;
  }

  .el-card__header {
    background-color: #e1e1e1;
  }
</style>