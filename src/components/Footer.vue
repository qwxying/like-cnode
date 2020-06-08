<template>
  <div class="footer">
    <p>
      本站作者：qwxying
    </p>
    <p>
      源码地址：<a href="https://github.com/qwxying/like-cnode">https://github.com/qwxying/like-cnode</a>
    </p>
    <p>
      本网站LikeCNode为
      <a href="https://cnodejs.org/api">CNode社区</a>
      的镜像站，所有
      <a href="https://cnodejs.org/api">API</a>
      均由CNODE开源提供。
    </p>
    <p>
      CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
    </p>

  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer {


    display: flex;
    flex-direction: column;
  }

  .footer > p {
    margin: 0 auto 0 15%;
    text-align: start;
    padding: 8px 0 8px 8px;
  }

  @media (max-width: 767px) {
    .footer > p {
      margin: 0 auto 0 5%;
    }
  }

</style>