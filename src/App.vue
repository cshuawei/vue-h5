<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition :name="routerSlider">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { Config } from 'vue-superset'

export default {
  data () {
    return {
      routerSlider: ''
    }
  },
  watch: {
    // 监听路由变化
    $route (to, from) {
      console.log('监听路由变化-')
      console.log('路由变化目标：', to)
      console.log('路由变化来源：', from)
      if (to.meta.index === from.meta.index || !to.meta.index) { // 层级相同或到达页面未配置index
        this.routerSlider = ''
      } else if (to.meta.index > from.meta.index) { // 进入下一页
        this.routerSlider = 'slide-left'
      } else { // 返回上一页
        this.routerSlider = 'slide-right'
      }
    }
  },
  created () {
    // 加载facebook sdk
    // this.$facebook.loadSdk({
    //   appId: '415591949374662',
    //   version: 'v4.0',
    //   lang: 'en_US'
    // })

    // 全局配置
    Config.custom = {
      appId: 'paas-ui-admin',
      timeout: 10000,
      lang: 'zh'
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  /**
* 路由切换动画
*/
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
