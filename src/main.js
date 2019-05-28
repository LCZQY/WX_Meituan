import Vue from 'vue'
import App from './App'
import { openWin, redirectTo, backBeaforWin, Ajax } from './utils/common'
import store from './utils/store'
//调用样式表
import './css/common.css' 
import './css/iconfont.css'
import Fly from 'flyio/dist/npm/wx'

let fly = new Fly
fly.interceptors.request.use((config,promise)=>{
  config.headers["Content-Type"]="application/json";
  config.headers["authorization"] = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVDNjlGRjAxRUVBNzRFMzU2NDk4RUIzNjU4ODU4M0YwQTQ4Q0Y3QjMiLCJ0eXAiOiJKV1QifQ.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQ5Y2QzOWVlLTAxZmQtNDk2NC1hZGFhLWUwMWViYmM3YjM1OCIsIm5hbWUiOiIwMDAxNyIsInJvbGUiOlsi6aG555uu5oC755uRIiwi5oi_5rqQ5a6h5qC45LiT5ZGYIiwi5bm_5ZGK566h55CG5ZGYIiwi5YiG5YWs5Y-45oi_5rqQ566h55CGIiwi5rWL6K-V546v5aKD5YiH5o2iIiwi6ZSA5ZSu56eY5LmmIiwi57O757uf566h55CG5ZGYIiwi5bCP56iL5bqP55m76ZmGIiwi57uE57uH5Lq65ZGY5p-l6K-iIiwi5aSW6IGU5LiT5ZGYIiwi5oi_5rqQ6YeH6ZuG5ZGYIiwi5Lq65LqL5oC755uRIiwi6JCl6ZSA566h55CG5LiT5ZGYIiwi5Z-O5biC5oC757uP55CGIiwi6aOO5o6n5Lit5b-DIiwi6am75Zy657uP55CGIiwi6L-Q6JCl6YOo57uP55CGIiwi5qW855uY5qOA57SiIiwi5oC757uP55CG5Yqp55CGIiwi5Lit5LuL5YWs5Y-4566h55CG5ZGYIiwiIOWIhuWFrOWPuOWHuue6syIsIuW8gOWPkeWVhueuoeeQhuWRmCIsIuaKpeWkh-aVsOaNrue7n-iuoSIsIuaAu-ijgSIsImFkbWluIiwi5oqA5pyv5oC755uRIiwi5pWw5o2u6L-Q6JCl5oC755uRIiwi6LSi5Yqh5oC755uRIiwi6aG555uu5Lya6K6h5Li7566hIiwi6JCl6ZSA6L-Q6JCl5oC755uRIiwi6auY57qn5rWL6K-V6KeS6ImyIiwi5YiG5YWs5Y-45Li75Yqe5Lya6K6hIiwi6JGj5LqL6ZW_Iiwi5Z-O5biC566h55CG5ZGYIiwi5Z-65pys6KeS6ImyIiwi5Zyw5Yy6Iiwi6JGj5LqL6ZW_5Yqp55CGIiwi6Iu55p6c5a6h5qC4Iiwi5pWw5o2u5YiG5p6Q5biIIl0sIm9yZyI6IjNjN2IxODFhLTUwOTctNDI0ZC05MzNmLWYxYTM5OWMzYTNmNSIsInN1YiI6IjQ5Y2QzOWVlLTAxZmQtNDk2NC1hZGFhLWUwMWViYmM3YjM1OCIsIm5pY2tuYW1lIjoi6YOR5by65YuHIiwiZmlsaWFsZSI6IjNjN2IxODFhLTUwOTctNDI0ZC05MzNmLWYxYTM5OWMzYTNmNSIsIlR5cGUiOiIzIiwiZmlsaWFsZW5hbWUiOiLmioDmnK_noJTlj5HkuK3lv4MiLCJ0b2tlbl91c2FnZSI6ImFjY2Vzc190b2tlbiIsImp0aSI6Ijk0MzY5NGMyLWZiYTQtNGRlMC04ZGRlLTg5MGExYTAwMWM5NCIsImNmZF9sdmwiOiJwcml2YXRlIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImF6cCI6ImFwaWdhdGV3YXkiLCJuYmYiOjE1NTg5NDY0NTgsImV4cCI6MTU1OTAxODQ1OCwiaWF0IjoxNTU4OTQ2NDU4LCJpc3MiOiJodHRwOi8vMTkyLjE2OC4xMDAuMTQ2OjUwMDEvIn0.E6qgFnVDcAG0abLYqOYRG3cpomFH-DbfIsgRER9Ua-asdtK0gDOdRPpq1JYJyn_pKf6VV3sxZro8HF_G5VksNXDMm_OxaR_cvzTRZZ8niVuoEQNfTmS3LJwBOnkD69XFW7sX5YSmljg5-YLmeP_0HFSpJKzfOc0F-QU-XsOxFuyZFojfd-3B9lBIM9Jj3oxVFO-Jj3gmDn7N2BJST-prZXOy2dmBuA0IkM0hlYXsKF5oyfG8l3whrRrdfBW9JIGZjPbV_JO8XH_K3fC77HsCE0Lwbs8sfX-4X6cWUy9hsUSdPeIccd-k7rU2qzzft0jJ52J_qNk6yExYtcsmNXzbUQ"

  return config;
})
Vue.prototype.$fly = fly

Vue.config.productionTip = false
App.mpType = 'app'
// 把通用方法挂载到Vue原型上 
Vue.prototype.$openWin = openWin
Vue.prototype.$redirectTo = redirectTo
Vue.prototype.$backBeaforWin = backBeaforWin
Vue.prototype.$ajax = Ajax
// 把store挂载到Vue原型上
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main', //index
      'pages/orderList/main',
      'pages/self/main',
      'pages/orderDetail/main',
      'pages/goodDetail/main',
      'pages/comment/main',
      'pages/submit/main',
      'pages/citySelect/main',
      'pages/search/main',
      'pages/error/main',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '郑强勇的美团',
      navigationBarTextStyle: 'black',
      // enablePullDownRefresh: true
    },
    tabBar: {
      borderStyle: 'white',
      backgroundColor: '#fff',
      selectedColor: '#06c1ae',
      color: '#666',
      list: [{
        pagePath: "pages/index/main",
        iconPath: 'static/images/tab1.png',
        selectedIconPath: 'static/images/tab1-s.png',
        text: "首页"
      },{
        pagePath: "pages/orderList/main",
        selectedIconPath: 'static/images/tab2-s.png',
        iconPath: 'static/images/tab2.png',
        text: "订单"
      },{
        pagePath: "pages/self/main",
        selectedIconPath: 'static/images/tab3-s.png',
        iconPath: 'static/images/tab3.png',
        text: "我的"
      }]
    }
  }
}
