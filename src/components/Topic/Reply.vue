<!--suppress HtmlUnknownTarget -->
<template>
  <el-card class="replies">
    <div slot="header" class="reply_title">
      <span>{{topic.reply_count}} 回复</span>
    </div>
    <div v-for="(reply,index) in topic.replies" :key="index" class="reply markdown-body">
      <div class="reply_info">
        <router-link :to="{path:`/user/${reply.author.loginname}`}">
          <img :src="reply.author.avatar_url" alt="">
        </router-link>
        <router-link :to="{path:`/user/${reply.author.loginname}`}">
          <span>{{reply.author.loginname }}</span>
        </router-link>
        <span></span>
        <span class="reply_time">{{index+1}}楼•{{reply.create_at|formatDate}}</span>
        <span v-if="reply.ups.length>0">👍{{reply.ups.length}}</span>
        <span v-else></span>
      </div>
      <p class="reply_content" v-html="reply.content"></p>
      <!--      todo   回复内容里面的@作者，应该把html里的内容重定向到https://cnodejs.org/api/v1/user/:username-->
    </div>
  </el-card>
</template>

<script>
  import "github-markdown-css"

  export default {
    name: "Reply",
    props: ["topic"]
  }
</script>

<style scoped>
  .reply_info {
    display: flex;
    align-items: start;
  }

  .reply_info > * {
    margin-right: 8px;
  }

  .reply > .reply_info > a {
    font-weight: bold;
    color: #666;
  }

  .reply > .reply_info > a:hover {
    text-decoration-line: none;
    color: #385f8a;
  }

  .reply > .reply_info > a > img {
    height: 30px;
    width: 30px;
    border-radius: 3px;
  }

  .reply_time {
    color: #005580;
    font-size: 11px;
    padding: 2px;
  }

  .reply > .reply_content {
    padding-left: 50px;
  }

  .markdown-body {
    box-sizing: border-box;
    width: 100%;
  }

  .markdown-text > * {
    text-align: left;
  }

  .markdown-text > ul, ol, li {
    list-style: disc outside none;
  }
</style>