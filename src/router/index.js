import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld' 这是之前的自动构建的引用方式

Vue.use(Router)

// 建议使用这种方式引用，打包的时候会分块打包，这样再前端页面会按需加载，不会一次性加载全部，定义变量的时候建议使用驼峰，首字母大写
const PageOne = (resolve) => {
  import('components/page-one/page-one').then((module) => {
    resolve(module)
  })
}

const PageTwo = (resolve) => {
  import('components/page-two/page-two').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      // name可有可无
      name: 'PageOne',
      component: PageOne
    },
    {
      path: '/pageTwo',
      component: PageTwo
    }
  ]
})
