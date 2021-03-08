<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button @click="show = !show">动画示例</van-button>
    <transition name="fade">
      <p v-show="show">范德萨发</p>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  created () {
    console.log('路由查询参数：', this.$route.query)
  }
}
</script>

<style lang="scss" scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
</style>
