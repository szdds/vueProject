<template>
<div class="el-row">
                <div class="el-col el-col-24">
                    <div class="comp">
                        <div class="tmpl routeanimate">
                            <div class="section">
                                <div class="location">
                                    <span>当前位置：</span>
                                    <a href="/index.html">首页</a> &gt;
                                    <a href="#/site/member/center" class="">会员中心</a>&gt;
                                    <a href="#/site/member/orderlist" class="router-link-exact-active ">我的订单</a>
                                </div>
                            </div>
                            <div class="section clearfix">
                                <div class="left-260">
                                    <div class="bg-wrap">
                                        <div class="avatar-box">
                                            <a href="/user/center/avatar.html" class="img-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </a>
                                            <h3>

                                                ivanyb

                                            </h3>
                                            <p>
                                                <b>注册会员</b>
                                            </p>
                                        </div>
                                        <div class="center-nav">
                                            <ul>
                                                <li>
                                                    <h2>
                                                        <i class="iconfont icon-order"></i>
                                                        <span>订单管理</span>
                                                    </h2>
                                                    <div class="list">
                                                        <p>
                                                            <a href="#/site/member/orderlist" class="router-link-exact-active ">
                                                                <i class="iconfont icon-arrow-right"></i>交易订单</a>
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h2>
                                                        <i class="iconfont icon-user"></i>
                                                        <span>账户管理</span>
                                                    </h2>
                                                    <div class="list">
                                                        <p>
                                                            <a href="#/site/member/center" class="">
                                                                <i class="iconfont icon-arrow-right"></i>账户资料</a>
                                                        </p>
                                                        <p>
                                                            <a href="#/site/member/center" class="">
                                                                <i clrouter-linkss="iconfont icon-router-linkrrow-right"></i>头像设置</a>
                                                        </p>
                                                        <p>
                                                            <a href="#/site/member/center" class="">
                                                                <i class="iconfont icon-arrow-right"></i>修改密码</a>
                                                        </p>
                                                        <p>
                                                            <a href="javascript:void(0)">
                                                                <i class="iconfont icon-arrow-right"></i>退出登录</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="right-auto">
                                    <div class="bg-wrap" style="min-height: 765px;">
                                        <div class="sub-tit">
                                            <ul>
                                                <li class="selected">
                                                    <a href="/user/order-list.html">交易订单</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="table-wrap">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="ftable">
                                                <tbody>
                                                    <tr>
                                                        <th width="16%" align="left">订单号</th>
                                                        <th width="10%">收货人</th>
                                                        <th width="12%">订单金额</th>
                                                        <th width="11%">下单时间</th>
                                                        <th width="10%">状态</th>
                                                        <th width="12%">操作</th>
                                                    </tr>
                                                    <tr v-for="item in orderList" :key="item.id">
                                                        <td>{{item.order_no}}</td>
                                                        <td align="left">{{item.accept_name}}</td>
                                                        <td align="left">
                                                            <strong style="color: red;">￥{{item.order_amount}}</strong>
                                                            <br> {{item.paymentTitle}}
                                                        </td>
                                                        <td align="left">{{item.add_time|dateFmt('YYYY-MM-DD-hh-mm-ss')}}</td>
                                                        <td align="left">
                                                            {{item.statusName}}
                                                        </td>
                                                        <td align="left">
                                                            <router-link :to="'/orderInfo?orderid='+item.id">查看订单</router-link>
                                                            <br>
                                                            <a href="#/site/goods/payment/12" class="">|去付款</a>
                                                            <br>
                                                            <a href="javascript:void(0)">|取消</a>
                                                            <br>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="page-foot">
                                                <el-pagination
                                                    @size-change="handleSizeChange"
                                                    @current-change="handleCurrentChange"
                                                    :current-page="pageIndex"
                                                    :page-sizes="[10, 20, 30, 40]"
                                                    :page-size="10"
                                                    layout="total, sizes, prev, pager, next, jumper"
                                                    :total="totalCount">
                                                </el-pagination>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [], //订单列表
      pageIndex: 1, //页码
      pageSize: 10, //页容量
      totalCount: -1 //总数量
    };
  },
  created() {
    this.getMyOrderList();
  },
  methods: {
    getMyOrderList() {
      const url = `site/validate/order/userorderlist?pageIndex=${
        this.pageIndex
      }&pageSize=${this.pageSize}`;
      this.$axios.get(url).then(res => {
        if (res.data.status === 0) {
          this.orderList = res.data.message;
          console.log(this.orderList);
          this.totalCount = res.data.totalcount
        }
      });
    },
    //   分页相关
    // 改变了页容量
    handleSizeChange(pageSize) {
        this.pageSize = pageSize
        this.pageIndex = 1
        this.getMyOrderList()
    },
    // 改变了当前页
    handleCurrentChange(pageIndex) {
        this.pageIndex = pageIndex
        this.getMyOrderList()
    }
  }


};
</script>

<style scoped>
</style>


