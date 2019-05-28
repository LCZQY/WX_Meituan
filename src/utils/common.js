function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}
export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')
  return `${t1} ${t2}`
}
// 封装Ajax
export function Ajax (opts, cb=function(){}) {
  wx.showLoading({title: '请求中...', mask: true})
  const {url, method='POST', data={}} = opts
  console.log(opts,"请求参数是：");
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      header: {
        "content-type": "application/json",
      "authorization":"Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkVDNjlGRjAxRUVBNzRFMzU2NDk4RUIzNjU4ODU4M0YwQTQ4Q0Y3QjMiLCJ0eXAiOiJKV1QifQ.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQ5Y2QzOWVlLTAxZmQtNDk2NC1hZGFhLWUwMWViYmM3YjM1OCIsIm5hbWUiOiIwMDAxNyIsInJvbGUiOlsi6aG555uu5oC755uRIiwi5oi_5rqQ5a6h5qC45LiT5ZGYIiwi5bm_5ZGK566h55CG5ZGYIiwi5YiG5YWs5Y-45oi_5rqQ566h55CGIiwi5rWL6K-V546v5aKD5YiH5o2iIiwi6ZSA5ZSu56eY5LmmIiwi57O757uf566h55CG5ZGYIiwi5bCP56iL5bqP55m76ZmGIiwi57uE57uH5Lq65ZGY5p-l6K-iIiwi5aSW6IGU5LiT5ZGYIiwi5oi_5rqQ6YeH6ZuG5ZGYIiwi5Lq65LqL5oC755uRIiwi6JCl6ZSA566h55CG5LiT5ZGYIiwi5Z-O5biC5oC757uP55CGIiwi6aOO5o6n5Lit5b-DIiwi6am75Zy657uP55CGIiwi6L-Q6JCl6YOo57uP55CGIiwi5qW855uY5qOA57SiIiwi5oC757uP55CG5Yqp55CGIiwi5Lit5LuL5YWs5Y-4566h55CG5ZGYIiwiIOWIhuWFrOWPuOWHuue6syIsIuW8gOWPkeWVhueuoeeQhuWRmCIsIuaKpeWkh-aVsOaNrue7n-iuoSIsIuaAu-ijgSIsImFkbWluIiwi5oqA5pyv5oC755uRIiwi5pWw5o2u6L-Q6JCl5oC755uRIiwi6LSi5Yqh5oC755uRIiwi6aG555uu5Lya6K6h5Li7566hIiwi6JCl6ZSA6L-Q6JCl5oC755uRIiwi6auY57qn5rWL6K-V6KeS6ImyIiwi5YiG5YWs5Y-45Li75Yqe5Lya6K6hIiwi6JGj5LqL6ZW_Iiwi5Z-O5biC566h55CG5ZGYIiwi5Z-65pys6KeS6ImyIiwi5Zyw5Yy6Iiwi6JGj5LqL6ZW_5Yqp55CGIiwi6Iu55p6c5a6h5qC4Iiwi5pWw5o2u5YiG5p6Q5biIIl0sIm9yZyI6IjNjN2IxODFhLTUwOTctNDI0ZC05MzNmLWYxYTM5OWMzYTNmNSIsInN1YiI6IjQ5Y2QzOWVlLTAxZmQtNDk2NC1hZGFhLWUwMWViYmM3YjM1OCIsIm5pY2tuYW1lIjoi6YOR5by65YuHIiwiZmlsaWFsZSI6IjNjN2IxODFhLTUwOTctNDI0ZC05MzNmLWYxYTM5OWMzYTNmNSIsIlR5cGUiOiIzIiwiZmlsaWFsZW5hbWUiOiLmioDmnK_noJTlj5HkuK3lv4MiLCJ0b2tlbl91c2FnZSI6ImFjY2Vzc190b2tlbiIsImp0aSI6Ijk0MzY5NGMyLWZiYTQtNGRlMC04ZGRlLTg5MGExYTAwMWM5NCIsImNmZF9sdmwiOiJwcml2YXRlIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImF6cCI6ImFwaWdhdGV3YXkiLCJuYmYiOjE1NTg5NDY0NTgsImV4cCI6MTU1OTAxODQ1OCwiaWF0IjoxNTU4OTQ2NDU4LCJpc3MiOiJodHRwOi8vMTkyLjE2OC4xMDAuMTQ2OjUwMDEvIn0.E6qgFnVDcAG0abLYqOYRG3cpomFH-DbfIsgRER9Ua-asdtK0gDOdRPpq1JYJyn_pKf6VV3sxZro8HF_G5VksNXDMm_OxaR_cvzTRZZ8niVuoEQNfTmS3LJwBOnkD69XFW7sX5YSmljg5-YLmeP_0HFSpJKzfOc0F-QU-XsOxFuyZFojfd-3B9lBIM9Jj3oxVFO-Jj3gmDn7N2BJST-prZXOy2dmBuA0IkM0hlYXsKF5oyfG8l3whrRrdfBW9JIGZjPbV_JO8XH_K3fC77HsCE0Lwbs8sfX-4X6cWUy9hsUSdPeIccd-k7rU2qzzft0jJ52J_qNk6yExYtcsmNXzbUQ"
      },
      success(res) {     
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
      complete(res) {
        setTimeout(() => {
          wx.hideLoading()
          cb && cb(res)
        }, 1000)
      }
    })
  })
}

// 打开新窗口,可以回退
export function openWin (url) {
  wx.navigateTo({url: url})
}
// 关闭当前页面，跳转到应用内的某个页面
export function redirectTo (url) {
  wx.redirectTo({url: url})
}
// 返回上一级窗口
export function backBeaforWin () {
  wx.navigateBack({delta: 1})
}
// 使用于tabBar页面
export function switchTab () {
  wx.switchTab({delta: 1})
}