<!--suppress HtmlUnknownTarget -->
<template>
<Loading v-if="loading"/>
    <Layout v-else>
      <el-main class="main">
        <ul class="back_top">
          <li v-for="(topic,index) in topics" :key="index">
            <!--头像-->
            <div style="height: 40px;">
              <router-link :to="{path:`/user/${topic.author.loginname}`}">
                <img v-lazy="topic.author.avatar_url" alt=""/>
              </router-link>
            </div>
            <!--回复/浏览-->
            <div class="reply_visit">
              <span class="reply_count">{{topic.reply_count}}</span>
              <span class="visit_count">/{{topic.visit_count}}</span>
            </div>
            <!--帖子的分类-->
            <span class="tag" :class="[{
            good:(topic.good  === true),
            top:(topic.top  === true)}]">
            {{topic | tabFormatter}}
          </span>
            <!--帖子标题-->
            <router-link :to="{path:`/topic/${topic.id}`, params:{id:topic.id}}">
              <span class="title">{{topic.title}}</span>
            </router-link>
            <!--最終回复时间-->
            <span class="last_reply">
            {{topic.last_reply_at | formatDate}}
          </span>
          </li>
        </ul>
        <el-backtop target=".main .back_top"></el-backtop>
      </el-main>
    </Layout>
</template>

<script>
  import Layout from "../components/Layout"
  import Loading from "../components/Loading"

  export default {
    name: "Home",
    components: {Loading, Layout},
    data() {
      return {
        loading: false,
        topics: []
      }
    },
    methods: {
      getData() {
        this.$http
          .get(
            "https://cnodejs.org/api/v1/topics",
            {
              params: {
                page: 1, limit: 40
              }
            })
          .then(res => {
            this.loading = false
            this.topics = res.data.data
          })
          .catch(err => {
            console.log(err)
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
  ul {
    margin: 0 auto;
    background-color: #fff;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border: 1px solid #EBEEF5;
    color: #303133;
    transition: .3s;
    border-radius: 4px;
    line-height: 2em;
  }

  @media (max-width: 800px) {
    ul {
      width: 90%;
      border-radius: 0;
    }
  }

  @media (max-width: 600px) {
    ul {
      width: 100%;
      border-radius: 0;
    }

    .main, .main > ul > li, ul {
      padding: 0;
    }

    .main > ul > li > a {
      max-width: 100%;
    }

    .reply_visit, .last_reply {
      display: none;
    }
  }

  ul > li {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid #f0f0f0;
  }

  ul > li:hover {
    background-color: #f5f5f5;
  }

  ul > li img {
    width: 30px;
    height: 30px;
    margin: 4px;
    border-radius: 3px;
  }

  ul > li > .reply_visit {
    width: 70px;
    text-align: center;
  }

  ul > li .reply_count {
    color: #9e78c0;
    text-align: center;
    font-size: 14px;
  }

  ul > li .visit_count {
    font-size: 10px;
    color: #b4b4b4;
  }

  .tag {
    white-space: nowrap;
    font-size: 12px;
    padding: 2px 4px;
    border-radius: 3px;
    line-height: 1.5;
    margin: 0 4px;
    background: #e5e5e5;
    color: #999;
  }

  .tag.good, .tag.top {
    background-color: #80bd01;
    color: #ffffff;
  }

  ul > li > a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: #333333;
    max-width: 60%;
  }

  ul > li > .last_reply {
    margin-left: auto;
    white-space: nowrap;
    font-size: 12px;
  }
</style>