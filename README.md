# vue-h5前端框架

主要应用于移动端非小程序的前端开发框架
技术栈：vue, vue cli, vue router, vuex, vant, axios, scss

##全局安装vue cli脚手架
```
npm install -g @vue/cli
vue --version
```

## 安装依赖
```
npm install
```

### 开发模式启动
```
npm run serve
```
高级：npx vue-cli-service serve [options] [entry]

选项：

  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)


### 打包构建
```
npm run build:[env]
```
高级：npx vue-cli-service build [options] [entry|pattern]

选项：

  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化


### 代码格式检查
```
npm run lint
```

### ui框架

https://youzan.github.io/vant/#/zh-CN/intro