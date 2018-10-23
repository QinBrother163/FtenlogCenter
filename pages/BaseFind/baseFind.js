// pages/BaseFind/baseFind.js
var UserDatas = require('../../logic/data/userDatas.js');
var ShopDatas = require('../../logic/data/shopDatas.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    currentInfo: null,
    userType: UserDatas.userType,
    GoodsTypeDatas: null,
    GoodsInfoDatas: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      GoodsTypeDatas: ShopDatas.goodTypeList,
      GoodsInfoDatas: ShopDatas.goodInfoList,
      currentTab: ShopDatas.goodTypeList[0].goodsTypeId,
      currentInfo: ShopDatas.goodTypeList[0]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /*
    左边导航栏点击切换事件
  */
  toogleLeftBar: function(event){
    var biz = event.currentTarget.dataset.menuitem;
    var that = this;
    if (this.data.currentTab === biz.goodsTypeId) {
        return false; 
    } else {
      that.setData({ 
        currentTab: biz.goodsTypeId,
        currentInfo: biz 
      }) 
    }
  },

  /*
    右边商品点击事件
  */
  clickGoodInfo: function(){

  },
  /*
    右边商品大广告图点击事件
  */
  clickGoodBg:function(){

  }
})