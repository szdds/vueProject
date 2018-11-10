// 查询本地存储
const KEY = 'GOODS'

const getLocalGoods = ()=> {
    console.log(JSON.parse(localStorage.getItem(KEY)||'{}') );
    
    return JSON.parse(localStorage.getItem(KEY)||'{}')   
}

// 获取商品总数

const getTotalCount = ()=> {
    // 获取存储对象
    const localGoods = getLocalGoods()
    // 设置总商品数为0
    let totalCount = 0
    // for循环遍历
    for(var key in localGoods) {
        totalCount += localGoods[key]
    }
    return totalCount
}

// 添加商品
const addLocalGoods = goods=>{
    // 获得本地商品 goods={goodsId:90,count:2}
    const localGoods = getLocalGoods() // {87:5,88:2}
    // 判断该商品之前是否有过添加
    if(localGoods[goods.goodsId]) {
        localGoods[goods.goodsId] += goods.count
    }else{
        // 该商品第一次被添加进购物车 回忆对象赋值 obj['name'] = '李四' -----> {name:'李四'}
        localGoods[goods.goodsId] = goods.count
    }
    // 重新设置本地存储
    localStorage.setItem(KEY,JSON.stringify(localGoods))
    return getTotalCount()
}

// 更改商品
const updateLocalGoods = goods=> {
    // 获取本地商品
    const localGoods = getLocalGoods()
    // 更改商品
    localGoods[goods.goodsId] = goods.count
    // 重新设置本地存储
    localStorage.setItem(KEY,JSON.stringify(localGoods))
    return getTotalCount()
}

// 删除
const deleteLocalGoods = id=> {
    // 获取本地商品
    const localGoods = getLocalGoods()
    // 更改商品
    delete localGoods[id]
    // 重新设置本地存储
    localStorage.setItem(KEY,JSON.stringify(localGoods))
    return getTotalCount()
}

// 按需求导出函数

export {getTotalCount,addLocalGoods,getLocalGoods,updateLocalGoods,deleteLocalGoods}