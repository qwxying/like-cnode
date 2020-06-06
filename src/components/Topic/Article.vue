<template>
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
</template>

<script>
  import "github-markdown-css"

  export default {
    name: "Article",
    props: ["topic"]
  }
</script>

<style scoped>
  .topic_info {
    display: flex;
  }

  .topic_info > li {
    margin-left: 32px;
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

  @media (max-width: 767px) {
    .topic_info {
      display: block;
    }

    .topic_info > li {
      list-style-type: none;
      margin-left: 0;
    }
  }
</style>