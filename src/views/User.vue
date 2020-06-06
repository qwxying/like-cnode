<template>
  <div>
    <Loading v-if="loading"/>
    <Layout v-else>
      <el-main>
        <img class="t666" :src="user.avatar_url" alt="">
        {{user.loginname}}
        {{user.score}} 积分
      </el-main>
      <el-aside>

      </el-aside>

    </Layout>
  </div>
</template>

<script>
  import Layout from "../components/Layout"
  import Loading from "../components/Loading"
  export default {
    name: "User",
    components: {Loading, Layout},
    data(){
      return{
        loading:false,
        user:{}
      }
    },
    methods:{
      getData(){
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
              if (res.data.success) {
                console.log(res)
                this.loading = false
                this.user = res.data.data
              }
            }
          )
          .catch(error => {
            console.log(error)
          })
      }
    },
    beforeMount() {
      this.loading=true
      this.getData()
    }
  }
</script>

<style scoped>
img{
  width: 40px;
  height: 40px;
}
</style>