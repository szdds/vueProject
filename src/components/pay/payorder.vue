<template>
    <!-- <h1>{{$route.query.plan}}</h1> -->
    <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <div class="nav-tit pay">
                        <a href="javascript:;" class="selected">支付中心</a>
                    </div>
                    <div class="form-box payment">
                        <div class="el-row">
                            <div class="el-col el-col-18">
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>订 单 号：</dt>
                                            <dd>{{orderInfo.order_no}}</dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>收货人姓名：</dt>
                                            <dd>{{orderInfo.accept_name}}</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>送货地址：</dt>
                                            <dd>{{orderInfo.area}}
                                                {{orderInfo.address}}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>手机号码：</dt>
                                            <dd>{{orderInfo.mobile}}</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>支付金额：</dt>
                                            <dd>{{orderInfo.order_amount}} 元</dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>支付方式：</dt>
                                            <dd>在线支付</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                        <div class="el-col el-col-12">
                                                <dl class="form-group">
                                                    <dt>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</dt>
                                                    <dd>{{orderInfo.message}}</dd>
                                                </dl>
                                            </div>
                                </div>
                            </div>
                            <div class="el-col el-col-6">
                               <!-- logo图片（不用logo图片，可以不要） -->
                                <img id="imgLogo" src="../../statics/site/images/car.jpg" hidden>
                                
                                <!-- 二维码容器 -->
                                <div id="container">
                                    <canvas width="400" height="400"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import "../../statics/site/jquery_plugins/qrcode/qrcode.js";
export default {
  data() {
    return {
      orderInfo: {},
      timeInterval: -1
    };
  },
  created() {
      /**
       *  这里为什么要清除定时器，后面不是摧毁了吗？
       * 1、用户可能疯狂刷新了多次页面，后面那个清除定时器的操作也只能清除一个，并不能清除多个
       * 所以会导致用户
       */
    // clearInterval(this.timeInterval);
    this.getOrderInfoData();
    this.task();  
    console.log(this.timeInterval);
    
      
  },
  updated() {
      this.timeInterval = setTimeout(() => {
      $("#container").erweima({
        mode: 4,
        mSize: 20,
        image: $("#imgLogo")[0],
        text: `http://47.106.148.205:8899/site/validate/pay/alipay/${
          this.$route.query.plan
        }`
      });
    }, 300);
  },
  methods: {
    getOrderInfoData() {
      this.$axios
        .get(`site/validate/order/getorder/${this.$route.query.plan}`)
        .then(res => {
          // res.data.status = 0 就代表了请求到了数据
          if (res.data.status === 0) {
            this.orderInfo = res.data.message[0];
            console.log(this.orderInfo);
            if (this.orderInfo.status === 2) {
              // status=2说明用户支付成功
              // 进行跳转到支付成功页面
              console.log(this.orderInfo.status);
              
              this.$router.push({ path: "/paySuccess" });
            }
          }
        });
    },
    //   轮询
    task() {
      this.timeInterval = setInterval(() => {
        this.getOrderInfoData();
      }, 3000);
    }
  },

  beforeDestroy() {
    clearInterval(this.timeInterval);
  }
};
</script>

<style scoped>
</style>


