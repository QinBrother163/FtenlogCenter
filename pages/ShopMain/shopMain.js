// pages/ShopMain/shopMain.js
let ShopDatas = require('../../logic/data/shopDatas.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideList: new Array(),
    shopList: new Array(),
    goodsInfo: null, //商品内容
    goodsTopBarImg: [], //商品导航图
    goodsBriefImg: [], //商品介绍图
    couponData: [{ // 优惠卷
      // 商品价格
      goodsPrice: 60,
      // 限制额度
      limitNumber: 200,
      // 开始时间
      startDate: '2018-10-11',
      // 结束时间
      endDatee: '2018-10-30',
      // 领取状态
      getStatus: 1
    }],
    commentData: [{
      userName: '张三李四',
      date: '2018-10-21',
      info: '超级炒鸡超集好用',
      meal: '套餐一'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var curGoodsId = options.goods;
    // let item = JSON.parse(options.goods);
    // console.log(item);
    var goodInfoList = ShopDatas.goodInfoList;
    for (var index in goodInfoList) {
      var goodsId = goodInfoList[index].goodsId;
      if (goodsId == curGoodsId) {
        this.setData({
          goodsInfo: goodInfoList[index]
        });
        break;
      }
    }
    this.setData({
      shopList: ShopDatas.goodInfoList,
      goodsTopBarImg: JSON.parse(this.data.goodsInfo.barImg),
      goodsBriefImg: JSON.parse(this.data.goodsInfo.briefImg)
    });



  },

  /**
   * 生命周期函数--监听页面初次渲染完成   
   */
  onReady: function() {
    this.widgetsNumber = this.selectComponent("#widgetsNumber");
    this.widgetsCoupon = this.selectComponent("#widgetsCoupon");
  },
  showWidgetsNumber() {
    this.widgetsNumber.showDialog();
  },
  // --------------  套餐   -----------------
  //数量减少事件 
  _numCutEvent(e) {
    console.log(e);
  },
  //数量增加事件 
  _numAddEvent(e) {
    console.log(e);
  },
  //选择套餐事件 
  _setFont(e) {
    console.log(e);
  },
  //购物车事件 
  _addEvent() {
    console.log('你点击了加入购物车');
    this.widgetsNumber.hideDialog();
  },
  //购买事件
  _buyEvent() {
    console.log('你点击了购买');
    this.widgetsNumber.hideDialog();
  },
  //关闭事件
  _cancelEvent() {
    console.log('你点击了关闭');
    this.widgetsNumber.hideDialog();
  },
  // --------------  优惠卷   -----------------
  showWidgetsCoupon() {
    this.widgetsCoupon.wc_showDialog();
  },
  // 选择优惠卷
  _wc_getCoupon(e) {
    console.log(e);
  },
  //确认事件
  _wc_okEvent() {
    console.log('你点击了确认');
    this.widgetsCoupon.wc_hideDialog();
  },
  //关闭事件
  _wc_closeEvent() {
    console.log('你点击了关闭');
    this.widgetsCoupon.wc_hideDialog();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  // 跳转评论
  getComment: function() {
    wx.navigateTo({
      url: '../../components/widgetsComment/widgetsComment'
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})