(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["goodslist"],{"2b05":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),a("div",{staticClass:"section"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"wrap-box"},[a("div",{staticClass:"left-220",staticStyle:{margin:"0px"}},[a("div",{staticClass:"banner-nav"},[a("ul",t._l(t.goodsData.catelist,function(s){return a("li",{key:s.id},[a("h3",[a("i",{staticClass:"iconfont icon-arrow-right"}),a("span",[t._v(t._s(s.title))]),a("p",t._l(s.subcates,function(s){return a("span",{key:s.id},[t._v("\n                                            "+t._s(s.title)+" \n                                        ")])}))]),a("div",{staticClass:"item-box"},[a("dl",[a("dt",[a("a",{attrs:{href:"/goods/40.html"}},[t._v(t._s(s.title))])]),a("dd",t._l(s.subcates,function(s){return a("a",{key:s.id,attrs:{href:"/goods/43.html"}},[t._v(t._s(s.title))])}))])])])}))])]),a("div",{staticClass:"left-705"},[a("div",{staticClass:"banner-img"},[a("div",{staticClass:"focus-box",attrs:{id:"focus-box"}},[a("el-carousel",{attrs:{height:"341px",interval:2e3,arrow:"always"}},t._l(t.goodsData.sliderlist,function(t){return a("el-carousel-item",{key:t.id},[a("img",{attrs:{src:t.img_url,alt:""}})])}))],1)])]),a("div",{staticClass:"left-220"},[a("ul",{staticClass:"side-img-list"},t._l(t.goodsData.toplist,function(s,i){return a("li",{key:s.id},[a("div",{staticClass:"img-box"},[a("label",[t._v(t._s(i+1))]),a("img",{attrs:{src:s.img_url}})]),a("div",{staticClass:"txt-box"},[a("a",{attrs:{href:"/goods/show-98.html"}},[t._v(t._s(s.title))]),a("span",[t._v(t._s(t._f("dateFmt")(s.add_time)))])])])}))])])])]),t._l(t.goodsGroup,function(s){return a("div",{key:s.level1cateid,staticClass:"section"},[a("div",{staticClass:"main-tit"},[a("h2",[t._v(t._s(s.catetitle))]),a("p",[t._l(s.level2catelist,function(s){return a("a",{key:s.subcateid,attrs:{href:"/goods/43.html"}},[t._v(t._s(s.subcatetitle))])}),t._m(1,!0)],2)]),a("div",{staticClass:"wrapper clearfix"},[a("div",{staticClass:"wrap-box"},[a("ul",{staticClass:"img-list"},t._l(s.datas,function(s){return a("li",{key:s.artID},[a("router-link",{attrs:{to:"/goodsinfo/"+s.artID}},[a("div",{staticClass:"img-box"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.img_url,expression:"subitem.img_url"}]})]),a("div",{staticClass:"info"},[a("h3",[t._v(t._s(s.artTitle))]),a("p",{staticClass:"price"},[a("b",[t._v(t._s(s.sell_price))]),t._v("元")]),a("p",[a("strong",[t._v("库存 "+t._s(s.stock_quantity))]),a("span",[t._v("市场价：\n                                        "),a("s",[t._v(t._s(s.market_price))])])])])])],1)}))])])])})],2)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section"},[a("div",{staticClass:"location"},[a("span",[t._v("当前位置：")]),a("a",{staticClass:"router-link-active",attrs:{href:"#/"}},[t._v("首页")]),t._v(" >\n            "),a("a",{staticClass:"router-link-exact-active router-link-active",attrs:{href:"#/site/goodslist"}},[t._v("购物商城")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:"/goods/40.html"}},[t._v("更多\n                    "),a("i",[t._v("+")])])}],o={data:function(){return{goodsData:{},goodsGroup:{}}},methods:{getGoodsData:function(){var t=this,s="site/goods/gettopdata/goods";this.$axios.get(s).then(function(s){t.goodsData=s.data.message})},getGoodsGroup:function(){var t=this,s="site/goods/getgoodsgroup";this.$axios.get(s).then(function(s){t.goodsGroup=s.data.message,console.log(t.goodsGroup)})}},created:function(){this.getGoodsData(),this.getGoodsGroup()}},l=o,r=(a("3a1c"),a("2877")),n=Object(r["a"])(l,i,e,!1,null,"35ed84fc",null);n.options.__file="goodslist.vue";s["default"]=n.exports},"3a1c":function(t,s,a){"use strict";var i=a("9ea4"),e=a.n(i);e.a},"9ea4":function(t,s,a){}}]);