import Vue from 'vue'
import VueRouter from 'vue-router'
// 在Vue原型上挂一个属性$axios
import axios from 'axios'
axios.defaults.baseURL = 'http://47.106.148.205:8899/'
axios.defaults.withCredentials=true;//让ajax携带cookie
Vue.prototype.$axios = axios
Vue.use(VueRouter)
const goodslist = () => import(/* webpackChunkName: "goodslist" */ '../components/goods/goodslist.vue')
const goodsinfo = () => import(/* webpackChunkName: "goodsinfo" */ '../components/goods/goodsinfo.vue')
const shopcar = () => import(/* webpackChunkName: "shopcart" */ '../components/shopcar/shopcar.vue')
const order = () => import(/* webpackChunkName: "order" */ '../components/order/order.vue')
const login = () => import(/* webpackChunkName: "login" */ '../components/aaccount/login.vue')
const payorder = () => import(/* webpackChunkName: "payorder" */ '../components/pay/payorder.vue')
const paySuccess = () => import(/* webpackChunkName: "paySuccess" */ '../components/pay/paySuccess.vue')
const vipCenter = () => import(/* webpackChunkName: "vipCenter" */ '../components/vip/vipCenter.vue')
const myOrder = () => import(/* webpackChunkName: "myOrders" */ '../components/vip/myOrder.vue')
const orderInfo = () => import(/* webpackChunkName: "orderInfo" */ '../components/vip/orderInfo.vue')
// import goodslist from '../components/goods/goodslist.vue'
// import goodsinfo from '../components/goods/goodsinfo.vue'
// import shopcar from '../components/shopcar/shopcar.vue'
// import order from '../components/order/order.vue'
// import login from '../components/aaccount/login.vue'
// import payorder from '../components/pay/payorder.vue'
// import paySuccess from '../components/pay/paySuccess.vue'
// import vipCenter from '../components/vip/vipCenter.vue'
// import myOrder from '../components/vip/myOrder.vue'
// import orderInfo from '../components/vip/orderInfo.vue'


const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/goodslist'},
        {path:'/goodslist',component:goodslist},
        {path:'/goodsinfo/:goodsId',component:goodsinfo},
        {path:'/shopcar',component:shopcar},        
        {path:'/login',component:login},          
        // 需要进行检验是否登录
        {path:'/order',component:order,meta:{ checkoutLogin: true }},        
        {path:'/pay',component:payorder,meta:{ checkoutLogin: true }},        
        {path:'/paySuccess',component:paySuccess,meta:{ checkoutLogin: true }},        
        {path:'/vipCenter',component:vipCenter,meta:{ checkoutLogin: true }},        
        {path:'/myOrder',component:myOrder,meta:{ checkoutLogin: true }},        
        {path:'/orderInfo',component:orderInfo,meta:{ checkoutLogin: true }},        
    ]
})

// 配置路由守卫
router.beforeEach((to, from, next)=>{
    // 记录登录前的页面
    console.log(to);
    
    if(to.path!='/login') {
        localStorage.setItem('wantToVisitPath',to.fullPath)
    }
    if(to.meta.checkoutLogin){
        const url = `site/account/islogin`  
        axios.get(url).then(res=>{
            if( res.data.code=='logined'){
                console.log(res.data.code);
                next()
            }else{
                router.push({path:'/login'})
            }
        })
    }else{
        next()
    }
})
export default router