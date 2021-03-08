<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld :msg="msg" @custom-event="onCustomEvent($event)">
      <template v-slot:h3>
        <h3>我是具名插槽的动态内容</h3>
      </template>
    </HelloWorld>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // 自定义事件示例
    onCustomEvent (e) {
      console.log('子组件数据传入：', e)
    }
  }
}
</script>
