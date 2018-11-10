<template>
        <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a> &gt;
                <a href="/goods/42/1.html">商品详情</a>
            </div>
        </div>
        <div v-if="goods.goodsinfo" class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!-- 放大镜的代码写在这里 -->
                            <div class="pic-box">
                                <div class="magnifier" id="magnifier1">
                                    <div class="magnifier-container">
                                        <div class="images-cover"></div>
                                        <!--当前图片显示容器-->
                                        <div class="move-view"></div>
                                        <!--跟随鼠标移动的盒子-->
                                    </div>
                                    <div class="magnifier-assembly">
                                        <div class="magnifier-btn">
                                            <span class="magnifier-btn-left">&lt;</span>
                                            <span class="magnifier-btn-right">&gt;</span>
                                        </div>
                                        <!--按钮组-->
                                        <div class="magnifier-line">
                                            <ul class="clearfix animation03">
                                                <li v-for="item in goods.imglist" :key="item.id">
                                                    <div class="small-img">
                                                        <img :src="item.original_path" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!--缩略图-->
                                    </div>
                                    <div class="magnifier-view"></div>
                                    <!--经过放大的图片显示容器-->
                                </div>
                            </div>
                            <div class="goods-spec">
                                <h1>{{goods.goodsinfo.title}}</h1>
                                <p class="subtitle">>{{goods.goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{goods.goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">¥{{goods.goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em id="commoditySellPrice" class="price">{{goods.goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">
                                                <div class="el-input-number el-input-number--small">
                                                    <span role="button" class="el-input-number__decrease is-disabled">
                                                        <i class="el-icon-minus"></i>
                                                    </span>
                                                    <span role="button" class="el-input-number__increase">
                                                        <i class="el-icon-plus"></i>
                                                    </span>
                                                    <div class="el-input el-input--small">
                                                        <!---->
                                                        <!-- <input autocomplete="off" size="small" type="text" rows="2" max="60"
                                                            min="1" validateevent="true" class="el-input__inner" role="spinbutton"
                                                            aria-valuemax="60" aria-valuemin="1" aria-valuenow="1" aria-disabled="false"> -->
                                                            <el-input-number :min="1" :max="goods.goodsinfo.stock_quantity" size="small" v-model="buyCount"></el-input-number>
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{goods.goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div id="buyButton" class="btn-buy">
                                                <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                                                <button ref="addToShopCartRef" @click="addToShopCart" class="add">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <Affix>
                                <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                                    <ul>
                                        <li>
                                            <a :class="isShowComment?'':'selected'" @click="isShowComment=false" href="javascript:;" >商品介绍</a>
                                        </li>
                                        <li>
                                            <a :class="isShowComment?'selected':''"  @click="isShowComment=true" href="javascript:;">商品评论</a>
                                        </li>
                                    </ul>
                                </div>
                            </Affix>
                            <!-- 商品介绍 -->
                            <div v-show="!isShowComment" class="tab-content entry" style="display: block;">
                                <div style="5px" v-html="goods.goodsinfo.content"></div>
                            </div>
                            <!-- 商品评论 -->
                            <div v-show="isShowComment" class="tab-content" style="display: block;">
                                <div class="comment-box">
                                    <div id="commentForm" name="commentForm"
                                        class="form-box">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea ref="textareaRef" id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <input id="btnSubmit" @click="postComment" name="submit" type="submit" value="提交评论" class="submit">
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul id="commentList" class="list-box">
                                        <p v-if="commentList.length===0" style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);">暂无评论，快来抢沙发吧！</p>
                                        <li v-for="item in commentList" :key="item.id">
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>{{item.user_name}}</span>
                                                    <span>{{item.add_time|dateFmt('YYYY-MM-DD-HH-mm-ss')}}</span>
                                                </div>
                                                <p>{{item.content}}</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="page-box" style="margin: 5px 0px 0px 62px;">
                                        <div id="pagination" class="digg">
                                            <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page="pageIndex"
                                                :page-sizes="[4, 8, 10, 20]"
                                                :page-size="pageSize"
                                                layout="total, sizes, prev, pager, next, jumper"
                                                :total="total">
                                            </el-pagination>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">
                                    <li v-for="item in goods.hotgoodslist" :key="item.id">
                                        <div class="img-box">
                                            <router-link to="'/goodsinfo/'+item.id" class="">
                                                <img v-lazy="item.img_url">
                                            </router-link>
                                        </div>
                                        <div class="txt-box">
                                            <router-link :to="'/goodsinfo/'+item.id" class="">{{item.title}}</router-link>
                                            <span>{{item.add_time|dateFmt}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!-- 动画元素 -->
            <transition 
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:after-enter="afterEnter">
                <div ref="addToShopCartOffset" class="animateDiv" v-show="isShow" v-if="goods.imglist">
                    <img :src="goods.imglist[0].original_path">
                    <!-- v-if="goods.imglist"存在初次渲染没有图片对的情况，因为生命周期函数并不会等完全取到值才
                    往下走，这是异步的。 等下次取到值了，就会进行再次渲染。这样是为了防止初次渲染报错 -->
                </div>
            </transition>
    </div>
</template>
    
<style>
    .animateDiv {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .animateDiv img {
        width: 100%;
        height: 100%;
    }
</style>


<script>
// 导入放大镜js代码
import "../../statics/site/jquery_plugins/jqimgzoom/js/magnifier.js";
import { Affix } from "iview";

export default {
  components: {
    Affix
  },
  data() {
    return {
      goods: {},
      buyCount: 0,
      isShowComment: false, //是否显示商品评论
      commentList: [], // 评论列表
      pageIndex: 1, //页码
      pageSize: 4 ,//页容量
      total:null, //总条数
      isShow:false, //不显示
      addToShopCartOffset: null,//初始位置
      shopCartOffset: null //结束位置
    };
  },
  created() {
    this.getGoodsData();
    this.getCommentListData();
  },
  updated() {
    //放在这里是因为，我们点击了右边的连接之后，要重新图册
    $("#magnifier1").imgzoon({ magnifier: "#magnifier1" });
  },
  watch: {
    $route() {
      this.getGoodsData();
      this.getCommentListData();
      console.log(this);
    }
  },
  methods: {
    getGoodsData() {
      const url = `site/goods/getgoodsinfo/${this.$route.params.goodsId}`;
      //   console.log(this.$route.params.goodsId);

      this.$axios.get(url).then(res => {
        this.goods = res.data.message;
        setTimeout(()=>{
            // 初始位置
            this.addToShopCartOffset = $(this.$refs.addToShopCartRef).offset()
           $( this.$refs.addToShopCartOffset).css({
               top: this.addToShopCartOffset.top,
               left: this.addToShopCartOffset.left
           })
            // 获取结束位置
            this.shopCartOffset = $('#shoppingCartCount').offset()
            console.log(this.shopCartOffset);
            
        },200)
      });
    },
    getCommentListData() {
      const url = `site/comment/getbypage/goods/${
        this.$route.params.goodsId
      }?pageIndex=${this.pageIndex}
            &pageSize=${this.pageSize}`;
      this.$axios.get(url).then(res => {
          this.total = res.data.totalcount
        this.commentList = res.data.message;
        console.log(this.commentList);
      });
    },
    // 分页相关
    // 改变了页容量
    handleSizeChange(pageSize) {
        this.pageSize = pageSize
        // 为什么要是1？因为可能只有30条数据，但是客户改变了页容量为40，如果之前的当前页为3，3*40！=30
        this.pageIndex = 1
        this.getCommentListData()
    },
    // 改变了页码
    handleCurrentChange(pageIndex) {
        this.pageIndex = pageIndex
        this.getCommentListData()
    },
    // 提交评论
    postComment() {
        const comment = $(this.$refs.textareaRef).val()        
        if(comment.trim().length===0) {
            this.$message({
            message: '警告哦，内容不能为空',
            type: 'warning'
            });
            return
        }
        const url = `site/validate/comment/post/goods/${this.$route.params.goodsId}`;
        // const comment = this.$refs.textareaRef.value
        // console.log(this.$refs.textareaRef);
        this.$axios.post(url,{commenttxt:comment}).then(res => {
        this.commentList = res.data.message;
        // 清空
        $(this.$refs.textareaRef).val('')
        // 提示成功
        // console.log(res);
        
        // console.log(res.status);
        
        if(res.data.status===0){
            this.$message({
                message: '恭喜你，发表成功',
                type: 'success'
            });
            console.log(this.$message);
            
        }
        this.pageIndex = 1        
        this.getCommentListData()
      });
      
        
    },
    // 购物车相关
    addToShopCart(){
        this.isShow = true
        // 准备好载荷
        const goods = {
            goodsId: this.$route.params.goodsId,
            count: this.buyCount
        }
        this.$store.commit('addGoods',goods)
    },
    beforeEnter: function (el) {
       el.style.top = this.addToShopCartOffset.top+'px'
       el.style.left = this.addToShopCartOffset.left+'px'
       el.style.transform = 'scale(1.0)'
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
        // 过渡时长
        el.style.transition = 'all 0.5s'
        // 刷新动画帧
        el.offsetHeight
        el.style.top = this.shopCartOffset.top+'px'
        el.style.left = this.shopCartOffset.left+'px'
        el.style.transform = 'scale(0.4)'
        done()
    },
    afterEnter: function (el) {
        this.isShow = false
    }
  }
};
</script>

<style scoped>
/* 导入插件的样式 */
@import "../../statics/site/jquery_plugins/jqimgzoom/css/magnifier.css";
</style>
