import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import {
  Button,
  Pagination,
  Input,
  InputNumber,
  Switch,
  Form,
  FormItem,
  Radio,
  RadioGroup,
  MessageBox,
  Message,
  Carousel,
  CarouselItem,
  Row,
  Col
} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import './statics/site/css/style.css';

Vue.config.productionTip = false // 去掉生产环境的警告
// 导入路由
import router from './router'
// 导入管理状态工具
import store from './store'
// 导入过滤器
import './filters'
// 导入懒加载
import VueLazyload from 'vue-lazyload'
// 基于vue的都需要集成
// Vue.use(ElementUI)
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button) //自动导入element-ui/lib/theme-chalk/button.css
Vue.use(Pagination)
Vue.use(InputNumber)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Row)
Vue.use(Col)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

Vue.use(VueLazyload,{
  loading:require('./statics/site/images/01.gif')
})
// 首先需要了解这是 es 6 的语法，表示 Vue 实例选项对象的 render 方法作为一个函数，
// 接受传入的参数 h 函数，返回 h(App) 的函数调用结果。
// createElement 函数是用来生成 HTML DOM 元素的
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
