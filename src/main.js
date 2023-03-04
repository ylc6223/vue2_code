import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import DateFilter from './filters/date'

Vue.filter('date', DateFilter)

Vue.use(Vuelidate)

Vue.config.productionTip = false


//批量注册全局组件
// 该函数接收三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式。
/**
 * @description 描述fn的作用或功能
 * @param {String} directory 要搜索的目录
 * @param {Boolean} useSubdirectories 是否还搜索其子目录
 * @param {Object} [c=false] 匹配文件的正则表达式
 * https://webpack.docschina.org/guides/dependency-management/#requirecontext
 * @return {number} 描述返回值
 */
const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)

console.log(requireComponent.keys())

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  //将字符串首字母转大写
  const componentName = upperFirst(
    //将字符串转驼峰命名
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
