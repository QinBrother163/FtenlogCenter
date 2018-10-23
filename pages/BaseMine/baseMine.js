// pages/BaseMine/baseMine.js
var UserDatas = require('../../logic/data/userDatas.js');
var PageDatas = require('../../logic/data/pageDatas.js');
let volumeDatas = require('../../logic/data/volumeDatas.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userType: UserDatas.userType,
    userInfo: {},
    userStatusInfo: [],
    orderStatusData:[],
    moreDiscount:[],
    moreTool:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      userInfo: app.globalData.userInfo,

      userStatusInfo: [{
        num: UserDatas.collectionNum,
          name: '收藏夹',
          url: ''
        },
        {
          num: UserDatas.userCoin,
          name: '金币',
          url: ''
        },
        {
          num: UserDatas.shoppingCartNum,
          name: '购物车',
          url: ''
        },
        {
          num: volumeDatas.userValidVolumes.length,
          name: '红包卡卷',
          url:'/pages/VoucherMain/voucherMain'
        },
      ],


      orderStatusData:[
        { icon:'icon iconfont icon-daifukuan',title:'待付款'},
        { icon:'icon iconfont icon-daifahuo',title:'待发货'},
        { icon:'icon iconfont icon-daishouhuo',title:'待收货'},
        { icon:'icon iconfont icon-comment',title:'待评价'},
      ],

      moreDiscount: PageDatas.userMineMoreBar,
      moreTool: PageDatas.userMineFunBar,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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

  },
  /*
    普通用户状态栏页面跳转
  */
  onUserStatusClick: function(e){
    var url = e.target.dataset.url;
    if(url === null || url === "") return;
    wx.navigateTo({
      url: url
    })
  }
})