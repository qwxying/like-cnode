<template>
  <el-card class="topic">
    <div slot="header" class="topic_header">
      <div class="topic_title">{{topic.title}}</div>
      <ul class="topic_info">
        <li>• 发布于：{{topic.create_at | formatDate}}</li>
        <li>• 作者：
          <router-link :to="{path:`/user/${topic.author.loginname}`}">
            {{topic.author.loginname}}
          </router-link>
        </li>
        <li>• {{topic.visit_count}} 次浏览</li>
        <li>• 来自 {{topic | tabFormatter}}</li>
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
  .topic {
    margin-bottom: 20px;
  }

  .topic_title {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;
  }

  .topic_info {
    display: flex;
    color: #838383;
    font-size: 12px;
    line-height: 20px;
  }

  .topic_info > li {
    list-style-type: none;
    padding-right: 4px;
  }

  .topic_info > li > a {
    color: inherit;
    font-size: inherit;
  }

  .topic_info > li > a:hover {
    text-decoration-line: underline;
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