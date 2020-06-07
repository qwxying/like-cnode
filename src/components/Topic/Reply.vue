<!--suppress HtmlUnknownTarget -->
<template>
  <el-card class="replies">
    <div slot="header" class="reply_title">
      <span>{{topic.reply_count}} 回复</span>
    </div>
    <div v-for="(reply,index) in topic.replies" :key="index" class="reply markdown-body">
      <router-link :to="{path:`/user/${reply.author.loginname}`}">
        <img :src="reply.author.avatar_url" alt="pic">
      </router-link>
      <span>{{reply.author.loginname }}</span>
      <span>第{{index+1}}楼</span>
      <span>{{reply.create_at|formatDate}}</span>
      <span v-if="reply.ups.length>0">👍{{reply.ups.length}}</span>
      <span v-else></span>
      <p v-html="reply.content"></p>
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