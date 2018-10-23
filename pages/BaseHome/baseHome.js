// pages/BaseHome/baseHome.js
var UserDatas = require('../../logic/data/userDatas.js');
var ShopDatas = require('../../logic/data/shopDatas.js');
var PageDatas = require('../../logic/data/pageDatas.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userType: UserDatas.userType,
    slideList: new Array(),
    typeBlock: new Array(),
    tipsList: new Array(),
    shopList: new Array(),
    currentTips: 0,
    timer: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      userType: UserDatas.userType,
      slideList: PageDatas.userHomeTopBar,
      typeBlock: PageDatas.userHomeItemBar,
      tipsList: PageDatas.userHomeTipsBar,
      shopList: ShopDatas.goodInfoList,

    })
    this.OnTipsTimer();

  },
  // 跳转goShopMain页面传参
  goShopMain: function(e) {
    let str = JSON.stringify(e.currentTarget.dataset.hi);
    wx.navigateTo({
      url: '/pages/ShopMain/shopMain?goods=' + str,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

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

  },
  OnTipsTimer: function() {
    var owner = this;
    var timer = setInterval(function() {
      var index = owner.data.currentTips + 1;
      if (index >= owner.data.tipsList.length) {
        owner.setData({
          currentTips: 0
        });
      } else {
        owner.setData({
          currentTips: index
        });
      }
    }, 5000);
  }
})