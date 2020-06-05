<template>
  <div class="nav">
    <router-link to="/home">
      <img src="../assets/cnodejs_light.svg" alt="LikeCNode">
    </router-link>

    <ul>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>


  </div>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped>

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 32px;
    background: #444;
  }

  img {
    height: 32px;
    background-color: #444;
  }

  ul {
    display: flex;
  }

  li {
    padding: 8px;
  }
</style>