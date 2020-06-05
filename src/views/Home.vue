<template>
  <Layout>
    <el-main>
      <Loading v-if="loading"/>
      <ul v-else>
        <li v-for="(topic,index) in topics" :key="index">
          <!--头像-->
          <img :src="topic.author.avatar_url" alt="avatar">
          <!--回复/浏览-->
          <div class="reply_vist">

          <span class="reply_count">{{topic.reply_count}}</span>
          <span class="visit_count">/{{topic.visit_count}}</span>
          </div>
          <!--帖子的分类-->
          <span class="tag" :class="[{
            tag_good:(topic.good  === true),
            tag_top:(topic.top  === true),
            tag_normal:(topic.good  !== true && topic.top  !== true)}]">
            {{topic | tabFormatter}}
          </span>
          <!--帖子标题-->
          <span class="title">{{topic.title}}</span>
          <!--最終回复时间-->
          <span class="last_reply">
            {{topic.last_reply_at | formatDate}}
          </span>

        </li>

      </ul>
    </el-main>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
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
        this.$http.get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: 1,
            limit: 20
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

  .el-main {
    border: 1px solid red;
    overflow: auto;

  }
  /*.el-main::-webkit-scrollbar { width: 0 !important }*/
  ul {
    margin: 0 auto;
    background-color: #fff;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border: 1px solid #EBEEF5;
    color: #303133;
    transition: .3s;
    border-radius: 4px;
    padding: 16px;
  }

  ul > li {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid #f0f0f0;

  }
  ul>li:hover{
    background-color: #f5f5f5;
  }

  ul > li > img {
    width: 30px;
    height: 30px;
    margin: 4px;
    border-radius: 3px;
  }

  ul>li > .reply_vist{
    width: 70px;
  }

  ul > li   .reply_count {
    color: #9e78c0;
    text-align: center;
    font-size: 14px;
  }

  ul > li  .visit_count {
    font-size: 10px;
    color: #b4b4b4;
    text-align: center;
  }

  .tag {
    border: 1px solid red;
    white-space: nowrap;
    margin:  8px 8px;
  }

  ul > li > .title {
    border: 1px solid red;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    font-size: 16px;
    line-height: 30px;
    color: #888888;
    max-width: 70%;
  }

  ul > li > .last_reply {
    margin-left: auto;
    white-space: nowrap;
  }

</style>