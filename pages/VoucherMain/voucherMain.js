// pages/VoucherMain/voucherMain.js
let volumeDatas = require('../../logic/data/volumeDatas.js');
var network = require("../../http/netUrl.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    validList:[],//有效期的list
    notValidList:[],//已过期
    usedList:[],//已使用,
    notValidStart:0,//已过期起点
    usedStart:0,//已使用起点
    isLoadNotValid:false,
    isUsed:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      validList: volumeDatas.userValidVolumes
    });
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
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
    this.netGetData();
  },
  //点击切换 
  clickTab: function (e) {
     var that = this;
     if (this.data.currentTab === e.target.dataset.current) {
        return false; 
     } else {
        that.setData({
           currentTab: e.target.dataset.current 
        }) 
     } 
  },
  netGetData:function(){
    var that = this;
    if (that.data.currentTab == 1 && !that.data.isLoadNotValid) {
      network.SendGetUserVolumes(2, 0, function (code, msg, bizContent) {
        if(code == 0){
          var arr = [];
          var biz = JSON.parse(bizContent)
          for (var index in biz.info){
            var json = biz.info[index];
            json.term = JSON.parse(json.numDiscount).term;
            json.discount = JSON.parse(json.numDiscount).discount;
            arr.push(json);
          }
          that.setData({
            notValidList: arr,
            isLoadNotValid:true
          }) 
        }
      });
    }
    if (that.data.currentTab == 2 && !that.data.isUsed) {
      network.SendGetUserVolumes(3, 0, function (code, msg, bizContent) {
        if (code == 0) {
          var arr = [];
          var biz = JSON.parse(bizContent)
          for (var index in biz.info) {
            var json = biz.info[index];
            json.term = JSON.parse(json.numDiscount).term;
            json.discount = JSON.parse(json.numDiscount).discount;
            arr.push(json);
          }
          that.setData({
            usedList: arr,
            isUsed: true
          }) 
        }
      });
    }
  }
})