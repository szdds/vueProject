(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["myOrders"],{"15e6":function(t,a,e){"use strict";var s=e("31c0"),i=e.n(s);i.a},"31c0":function(t,a,e){},a2d8:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"el-row"},[e("div",{staticClass:"el-col el-col-24"},[e("div",{staticClass:"comp"},[e("div",{staticClass:"tmpl routeanimate"},[t._m(0),e("div",{staticClass:"section clearfix"},[t._m(1),e("div",{staticClass:"right-auto"},[e("div",{staticClass:"bg-wrap",staticStyle:{"min-height":"765px"}},[t._m(2),e("div",{staticClass:"table-wrap"},[e("table",{staticClass:"ftable",attrs:{width:"100%",border:"0",cellspacing:"0",cellpadding:"0"}},[e("tbody",[t._m(3),t._l(t.orderList,function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.order_no))]),e("td",{attrs:{align:"left"}},[t._v(t._s(a.accept_name))]),e("td",{attrs:{align:"left"}},[e("strong",{staticStyle:{color:"red"}},[t._v("￥"+t._s(a.order_amount))]),e("br"),t._v(" "+t._s(a.paymentTitle)+"\r\n                                                        ")]),e("td",{attrs:{align:"left"}},[t._v(t._s(t._f("dateFmt")(a.add_time,"YYYY-MM-DD-hh-mm-ss")))]),e("td",{attrs:{align:"left"}},[t._v("\r\n                                                            "+t._s(a.statusName)+"\r\n                                                        ")]),e("td",{attrs:{align:"left"}},[e("router-link",{attrs:{to:"/orderInfo?orderid="+a.id}},[t._v("查看订单")]),e("br"),e("a",{attrs:{href:"#/site/goods/payment/12"}},[t._v("|去付款")]),e("br"),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("|取消")]),e("br")],1)])})],2)]),e("div",{staticClass:"page-foot"},[e("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,30,40],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section"},[e("div",{staticClass:"location"},[e("span",[t._v("当前位置：")]),e("a",{attrs:{href:"/index.html"}},[t._v("首页")]),t._v(" >\r\n                                    "),e("a",{attrs:{href:"#/site/member/center"}},[t._v("会员中心")]),t._v(">\r\n                                    "),e("a",{staticClass:"router-link-exact-active ",attrs:{href:"#/site/member/orderlist"}},[t._v("我的订单")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"left-260"},[e("div",{staticClass:"bg-wrap"},[e("div",{staticClass:"avatar-box"},[e("a",{staticClass:"img-box",attrs:{href:"/user/center/avatar.html"}},[e("i",{staticClass:"iconfont icon-user-full"})]),e("h3",[t._v("\r\n\r\n                                                ivanyb\r\n\r\n                                            ")]),e("p",[e("b",[t._v("注册会员")])])]),e("div",{staticClass:"center-nav"},[e("ul",[e("li",[e("h2",[e("i",{staticClass:"iconfont icon-order"}),e("span",[t._v("订单管理")])]),e("div",{staticClass:"list"},[e("p",[e("a",{staticClass:"router-link-exact-active ",attrs:{href:"#/site/member/orderlist"}},[e("i",{staticClass:"iconfont icon-arrow-right"}),t._v("交易订单")])])])]),e("li",[e("h2",[e("i",{staticClass:"iconfont icon-user"}),e("span",[t._v("账户管理")])]),e("div",{staticClass:"list"},[e("p",[e("a",{attrs:{href:"#/site/member/center"}},[e("i",{staticClass:"iconfont icon-arrow-right"}),t._v("账户资料")])]),e("p",[e("a",{attrs:{href:"#/site/member/center"}},[e("i",{attrs:{"clrouter-linkss":"iconfont icon-router-linkrrow-right"}}),t._v("头像设置")])]),e("p",[e("a",{attrs:{href:"#/site/member/center"}},[e("i",{staticClass:"iconfont icon-arrow-right"}),t._v("修改密码")])]),e("p",[e("a",{attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"iconfont icon-arrow-right"}),t._v("退出登录")])])])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sub-tit"},[e("ul",[e("li",{staticClass:"selected"},[e("a",{attrs:{href:"/user/order-list.html"}},[t._v("交易订单")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",{attrs:{width:"16%",align:"left"}},[t._v("订单号")]),e("th",{attrs:{width:"10%"}},[t._v("收货人")]),e("th",{attrs:{width:"12%"}},[t._v("订单金额")]),e("th",{attrs:{width:"11%"}},[t._v("下单时间")]),e("th",{attrs:{width:"10%"}},[t._v("状态")]),e("th",{attrs:{width:"12%"}},[t._v("操作")])])}],r=(e("cadf"),e("551c"),e("097d"),{data:function(){return{orderList:[],pageIndex:1,pageSize:10,totalCount:-1}},created:function(){this.getMyOrderList()},methods:{getMyOrderList:function(){var t=this,a="site/validate/order/userorderlist?pageIndex=".concat(this.pageIndex,"&pageSize=").concat(this.pageSize);this.$axios.get(a).then(function(a){0===a.data.status&&(t.orderList=a.data.message,console.log(t.orderList),t.totalCount=a.data.totalcount)})},handleSizeChange:function(t){this.pageSize=t,this.pageIndex=1,this.getMyOrderList()},handleCurrentChange:function(t){this.pageIndex=t,this.getMyOrderList()}}}),n=r,c=(e("15e6"),e("2877")),l=Object(c["a"])(n,s,i,!1,null,"8383a25e",null);l.options.__file="myOrder.vue";a["default"]=l.exports}}]);