<template>
    <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <!--购物车头部-->
                    <div class="cart-head clearfix">
                        <h2>
                            <i class="iconfont icon-cart"></i>我的购物车</h2>
                        <div class="cart-setp">
                            <ul>
                                <li class="first active">
                                    <div class="progress">
                                        <span>1</span>
                                        放进购物车
                                    </div>
                                </li>
                                <li class="active">
                                    <div class="progress">
                                        <span>2</span>
                                        填写订单信息
                                    </div>
                                </li>
                                <li class="last">
                                    <div class="progress">
                                        <span>3</span>
                                        支付/确认订单
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--购物车头部-->
                    <div class="cart-box">
                        <h2 class="slide-tit">
                            <span>1、收货地址</span>
                        </h2>
                        <div id="orderForm" name="orderForm" url="">
                            <div class="form-box address-info">
                                <el-form :model="order" status-icon :rules="rules" ref="ruleForm" label-width="150px" >
                                    <el-form-item label="收货人姓名：" prop="accept_name">
                                        <el-input v-model="order.accept_name"></el-input>
                                    </el-form-item>
                                    <el-form-item label="所属地区：" prop="area">
                                        <v-distpicker @selected="onSelected" :province="order.area.province.value" :city="order.area.city.value" :area="order.area.area.value"></v-distpicker>
                                    </el-form-item>
                                    <el-form-item label="详细地址：" prop="address">
                                        <el-input v-model="order.address"></el-input>
                                    </el-form-item>
                                    <el-form-item label="联系电话：" prop="mobile">
                                        <el-input v-model="order.mobile"></el-input>
                                    </el-form-item>
                                    <el-form-item label="电子邮箱：" prop="email">
                                        <el-input v-model="order.email"></el-input>
                                    </el-form-item>
                                    <el-form-item label="邮政编码：" prop="post_code">
                                        <el-input v-model="order.post_code"></el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <h2 class="slide-tit">
                                <span>2、支付方式</span>
                            </h2>
                            <ul class="item-box clearfix">
                                <!--取得一个DataTable-->
                                <li>
                                    <el-radio v-model="order.payment_id" label="6">在线支付</el-radio>
                                </li>
                            </ul>
                            <h2 class="slide-tit">
                                <span>3、配送方式</span>
                            </h2>
                            <ul class="item-box clearfix">
                                <!--取得一个DataTable-->
                                <li>
                                   <el-radio-group @change="expressChange" v-model="order.express_id">
                                        <el-radio label="1">顺丰快递</el-radio>
                                        <el-radio label="2">圆通快递</el-radio>
                                        <el-radio label="3">韵达快递</el-radio>
                                    </el-radio-group>
                                </li>
                            </ul>
                            <h2 class="slide-tit">
                                <span>4、商品清单</span>
                            </h2>
                            <div class="line15"></div>
                            <table width="100%" border="0" align="center" cellpadding="8" cellspacing="0" class="cart-table">
                                <tbody>
                                    <tr>
                                        <th colspan="2" align="left">商品信息</th>
                                        <th width="84" align="left">单价</th>
                                        <th width="84" align="center">购买数量</th>
                                        <th width="104" align="left">金额(元)</th>
                                    </tr>
                                    <tr v-for="item in goodsList" :key="item.id">
                                        <td width="68">
                                            <a target="_blank" href="/goods/show-89.html">
                                                <img :src="item.img_url" class="img">
                                            </a>
                                        </td>
                                        <td>
                                            <a target="_blank" href="/goods/show-89.html">{{item.title}}</a>
                                        </td>
                                        <td>
                                            <span class="red">
                                                ￥{{item.sell_price}}
                                            </span>
                                        </td>
                                        <td align="center">{{item.buycount}}</td>
                                        <td>
                                            <span class="red">
                                                ￥{{item.sell_price*item.buycount}}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="line15"></div>
                            <h2 class="slide-tit">
                                <span>5、结算信息</span>
                            </h2>
                            <div class="buy-foot clearfix">
                                <div class="left-box">
                                    <dl>
                                        <dt>订单备注(100字符以内)</dt>
                                        <dd>
                                            <textarea v-model="order.message" name="message" class="input" style="height:35px;"></textarea>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="right-box">
                                    <p>
                                        商品
                                        <label class="price">{{totalCount}}</label> 件&nbsp;&nbsp;&nbsp;&nbsp; 商品金额：￥
                                        <label id="goodsAmount" class="price">{{totalPrice}}</label> 元&nbsp;&nbsp;&nbsp;&nbsp;
                                    </p>
                                    <p>
                                        运费：￥
                                        <label id="expressFee" class="price">{{order.expressMoment}}</label> 元
                                    </p>
                                    <p class="txt-box">
                                        应付总金额：￥
                                        <label id="totalAmount" class="price">{{order.expressMoment+totalPrice}}</label>
                                    </p>
                                    <p class="btn-box">
                                        <a class="btn button" href="/cart.html">返回购物车</a>
                                        <a id="btnSubmit" @click="goToOrder" class="btn submit">确认提交</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
import { getLocalGoods } from "../../common/localStorage.js";
import VDistpicker from "v-distpicker";
export default {
  components: { VDistpicker },
  data() {
    var checkMobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      }
      setTimeout(() => {
        if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(value)) {
          return callback(
            new Error("不是完整的11位手机号或者正确的手机号前七位")
          );
        } else {
          callback();
        }
      }, 300);
    };
    return {
      goodsList: [],
      totalCount: 0, //总商品数
      totalPrice: 0, //总费用
      order: {
        accept_name: "zhangsan",
        area: {
          province: {
            code: "440000",
            value: "广东省"
          },
          city: {
            code: "440300",
            value: "深圳市"
          },
          area: {
            code: "440306",
            value: "宝安区"
          }
        },
        address: "庭威大厦402",
        mobile: "13688888888",
        email: "123456@qq.com",
        post_code: "3549872", //收货人编码
        payment_id: "6", //支付方式
        express_id: "1", //运送方式
        expressMoment: 20, //快递费用
        message: "麻烦快点发货", //订单备注信息
        goodsids: "", //购买商品的id
        cargoodsobj: {
          id: 0
        } //购买商品的数量，id为key，购买数量为值
      },
      rules: {
        accept_name: [
          { required: true, message: "请输入收货人姓名", trigger: "blur" },
          { min: 1, max: 12, message: "长度在 1 到 12 个字符", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入详细地址", trigger: "blur" },
          { min: 1, max: 30, message: "长度在 1 到 30 个字符", trigger: "blur" }
        ],
        mobile: [{ validator: checkMobile, trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { min: 1, max: 30, message: "长度在 1 到 30 个字符", trigger: "blur" }
        ],
        post_code: [
          { required: true, message: "请输入邮政编码", trigger: "blur" },
          { min: 1, max: 11, message: "长度在 1 到 11 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {
      const localGoods = getLocalGoods();
      console.log(localGoods);
      
      if(localGoods=={}) {
          this.$router.push({path:'/goodslist'})
          return
      }
    this.getGoodsListData();
  },
  methods: {
    // 获取商品清单
    getGoodsListData() {
      // 为什么要获取本地存储的商品？不是有接口的吗？
      // 因为顾客操作商品数目等信息，都只被存在了本地，而没有返回给接口，修改后台的数据
      const localGoods = getLocalGoods();
      this.order.goodsids = this.$route.query.ids;
      const tmpObj = {};
      this.$axios
        .get(`site/validate/order/getgoodslist/${this.$route.query.ids}`)
        .then(res => {
          console.log(res);

          res.data.message.forEach(item => {
            item.buycount = localGoods[item.id];
            this.totalCount += item.buycount;
            this.totalPrice += item.buycount * item.sell_price;
            tmpObj[item.id] = item.buycount;
            this.order.cargoodsobj = tmpObj;
          });
          //   商品总额
          this.order.goodsAmount = this.totalPrice;
          this.goodsList = res.data.message;
          console.log(this.order.cargoodsobj);
        });
    },
    // 省区市重新选择了，就会触发
    onSelected(data) {
      return (this.order.area = data);
    },
    // 切换了快递方式
    expressChange(label) {
      switch (label) {
        case "1":
          this.order.expressMoment = 20;
          break;
        case "2":
          this.order.expressMoment = 10;
          break;
        case "3":
          this.order.expressMoment = 8;
          break;
        default:
          break;
      }
      console.log(this.order.expressMoment);
    },
    goToOrder() {
      this.$axios.post(`site/validate/order/setorder`, this.order).then(res => {
        this.$refs["ruleForm"].validate(valid => {
          if (!valid) {
            console.log("error submit!!");
            return false;
          }
          if (res.data.status === 0) {
            //   删除本地商品
            const delArray = this.$route.query.ids.split(",");
            delArray.forEach(id => {
              // deleteLocalGoods(id)
              this.$store.commit("deleteGoods", id);
            });
            //   跳转到支付页面
            console.log(res.data.message.orderid);
            
            this.$router.push({
              path: "/pay",
              query: { plan: res.data.message.orderid }
            });
          }
        });
      });
    }
  }
};
</script>

<style>
</style>

