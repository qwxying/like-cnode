import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./plugins/element.js"
import Axios from "axios"

Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")

//帖子分类过滤器
Vue.filter("tabFormatter", (topic) => {
  if (topic.good === true) {
    return "精华"
  } else if (topic.top === true) {
    return "置顶"
  } else if (topic.tab === "ask") {
    return "问答"
  } else if (topic.tab === "share") {
    return "分享"
  } else {
    return "招聘"
  }
})
// 时间=>最终回复时间
Vue.filter("formatDate", (str) => {
    if (!str) return ""
    let date = new Date(str)
    let time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
      return ""
    } else if ((time / 1000 < 30)) {
      return "刚刚"
    } else if (time / 1000 < 60) {
      return Math.trunc((time / 1000)) + "秒前"
    } else if ((time / 60000) < 60) {
      return Math.trunc((time / 60000)) + "分钟前"
    } else if ((time / 3600000) < 24) {
      return Math.trunc(time / 3600000) + "小时前"
    } else if ((time / 86400000) < 31) {
      return Math.trunc(time / 86400000) + "天前"
    } else if ((time / 2592000000) < 12) {
      return Math.trunc(time / 2592000000) + "月前"
    } else {
      return Math.trunc(time / 31536000000) + "年前"
    }
  }
)
