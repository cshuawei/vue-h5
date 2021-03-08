import axios from 'axios'
import VConsole from 'vconsole'

const global = require('./global.config')

let baseURL // 接口基础路径

const env = process.env.NODE_ENV
console.log('env:', env)
if (env === 'production') { // 生产环境
  baseURL = 'https://' + global.prodDomain + global.prodPublicPath
} else if (env === 'test') { // 测试环境
  /* eslint-disable no-new */
  new VConsole()
  baseURL = 'https://' + global.testDomain + global.testPublicPath
} else {
  new VConsole()
  if (env === 'mock') {
    baseURL = global.mockPublicPath
  } else {
    baseURL = global.devPublicPath
  }
}

export default {
  install () {
    // 全局配置
    axios.defaults.baseURL = baseURL
    axios.defaults.withCredentials = true // 表示跨域请求时是否需要使用凭证
    axios.defaults.headers.post['Content-Type'] = global.contentType
  }
}
