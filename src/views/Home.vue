<template>
  <Layout>
    <el-main>
      <Loading v-if="loading"/>
      <ul v-else>


        <li v-for="(topic,index) in topics" :key="index">
          <!--头像-->
          <img :src="topic.author.avatar_url" alt="avatar">
          <!--回复/浏览-->
          <!--帖子的分类-->
          <!--帖子标题-->
          <span>{{topic.title}}</span>
          <!--最終回复时间-->

        </li>

      </ul>
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
  }

  ul {
    border: 1px solid blue;

    display: flex;
    flex-direction: column;

    align-items: flex-start;

  }
  ul>li{
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid red;

  }
  ul>li>span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all
  }
  ul > li > img {
    width: 30px;
    height: 30px;
  }

</style>