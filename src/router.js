import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  /**
   * index为页面顺序
   * 通过index参数判断页面前进后退
   * index用于页面切换动画，存在缺陷，暂不推荐使用，可将index设置删除
   */
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: { default: Home },
      meta: {
        title: '首页',
        index: 1
      },
      children: [
        {
          path: 'subPage',
          name: 'subPage',
          components: {
            default: () => import('./views/Home/SubPage')
          },
          meta: {
            title: '子页面'
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About'),
      meta: {
        title: '关于',
        index: 2
      }
    }
  ]
})
