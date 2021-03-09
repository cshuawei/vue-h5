<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot name="h3">我是具名插槽的默认内容</slot>
    <h4>简易倒计时：{{sec}}</h4>
    <h4>日期格式化：{{date | dateFormat('second', '/', true)}}</h4>
    <h4>时区偏移：{{timezoneOffset}}</h4>
    <h4>数字格式化：{{num | numFormat(3)}}</h4>
    <h4>appId: {{data.appId || '--'}}</h4>

    <!-- 表单模拟示例 start -->
    <van-cell-group>
      <van-field
        v-model="params.phoneNumber"
        clearable
        type="tel"
        placeholder="请输入手机号" />
      <van-field
        v-model="params.verificationCode"
        clearable
        type="tel"
        placeholder="请输入验证码" />
    </van-cell-group>
    <van-button type="primary" @click="onInterface()">接口交互示例</van-button>
    <!-- 表单模拟示例 end -->

    <div class="fun-buttons">
      <van-button type="primary" @click="onEmitEvent()">组件自定义事件</van-button>
      <van-button type="primary" @click="onPush()">路由导航事件</van-button>
      <van-button type="primary" @click="onSubPage()">跳转子页面</van-button>
      <van-button type="primary" @click="onAlert()">消息提示</van-button>
      <van-button type="primary" @click="onFacebook()">FaceBook登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      data: {},
      date: 1564444800000,
      sec: '10s',
      num: 46778.4237,
      timezoneOffset: '',
      params: {
        phoneNumber: '',
        verificationCode: ''
      }
    }
  },
  props: {
    msg: String
  },
  methods: {
    register (params) {
      return this.$http.post('/demo/demoApi', 'register', params, {
        appName: 'paas-app-admin',
        isNeedLoading: true
      })
    },
    // 接口交互示例
    onInterface () {
      if (!this.params.phoneNumber) {
        this.$cux.toast('请输入手机号')
        return
      }
      const myreg = /^1[0-9]\d{9}$/
      if (!myreg.test(this.params.phoneNumber)) {
        this.$cux.toast('请输入正确的手机号')
        return
      }
      if (!this.params.verificationCode) {
        this.$cux.toast('请输入验证码')
        return
      }
      if (this.params.verificationCode.length < 6) {
        this.$cux.toast('请输入6位验证码')
        return
      }
      this.register(this.params).then((d) => {
        if (d.success) {
          this.data = d
        }
      })
    },
    // 子组件发射事件示例
    onEmitEvent () {
      this.$emit('custom-event', {
        name: 'cocmo'
      })
    },
    // 路由导航事件
    onPush () {
      this.$router.push({
        path: '/about'
      })
    },
    onSubPage () {
      this.$router.push({
        path: '/home/subPage',
        query: {
          id: '456'
        }
      })
    },
    // 消息提示示例
    onAlert () {
      this.$cux.asyncConfirm({
        message: '异步关闭'
      }).then((done) => {
        setTimeout(() => {
          done()
        }, 3000)
      })
    },
    onFacebook () {
      this.$cux.loading()
      this.$facebook.checkFB().then(() => {
        /* eslint-disable no-undef */
        FB.getLoginStatus(function (response) {
          if (response.status === 'connected') {
            FB.api('/me', { fields: 'name,email' }, function (response) {
              this.$cux.loadend().then(() => {
                console.log('facebook登录信息：', response)
              })
            })
          } else {
            FB.login(function (response) {
              if (response.status === 'connected') {
                FB.api('/me', { fields: 'name,email' }, function (response) {
                  this.$cux.loadend().then(() => {
                    console.log('facebook登录信息：', response)
                  })
                })
              } else {
                console.log(response)
              }
            }, { scope: 'public_profile,email' })
          }
        })
      })
    }
  },
  created () {
    // 获取时区偏移
    this.timezoneOffset = this.$util.getTimezoneOffset()

    // 简易倒计时示例
    this.$util.countDown(10, (sec) => {
      this.sec = sec + 's'
    }, () => {
      this.sec = '倒计时完毕'
    })
  },
  mounted () {
    this.$nextTick(function () {
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fun-buttons {
  margin: 15px 0;
}
.van-button {
  margin: 5px;
}
</style>
