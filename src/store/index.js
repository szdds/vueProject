import Vue from 'vue'
import Vuex from 'vuex'
// 按需导入localStorage中的方法
import {addLocalGoods,getTotalCount,updateLocalGoods,deleteLocalGoods} from '../common/localStorage.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        buyCount: 0
    },
    mutations: {
        // 增加商品到购物车
        addGoods(state,goods) {
            state.buyCount = addLocalGoods(goods)
        },
        // 更改购物车的数量
        updateGoods(state,goods) {
            state.buyCount = updateLocalGoods(goods)
        },
        // 删除购物车的某件商品
        deleteGoods(state,id) {
            state.buyCount = deleteLocalGoods(id)
        }
    },
    getters: {
        getBuyCount(state){
            // 为什么state.buyCount = 0还需要判断？去本地获取购物车的总数？
            // 1、界面一打开的时候，state.buyCount就被赋值为0了，但是用户之前可能就有添加商品进购物车过。
            // 2、看是否刷新浏览器


            return state.buyCount === 0?getTotalCount():state.buyCount
        }
    }
})

export default store