//index.js
//获取应用实例
var network = require("../../http/netUrl.js")
var StringUtils = require("../../utils/stringUtils.js")
var userDatas = require("../../logic/data/userDatas.js")
var shopDatas = require("../../logic/data/shopDatas.js")
var pageDatas = require("../../logic/data/pageDatas.js")
const app = getApp()
Page({
  data: {
    motto: '创客平台欢迎您',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      this.wxLogin();
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.wxLogin();
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          this.wxLogin();
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  wxLogin:function(){
    var owner = this;
    var biz = {};
    biz.wxCode = app.globalData.wxCode;
    biz.userName = StringUtils.WxUserNickUtils(app.globalData.userInfo.nickName);
    biz.userSex = app.globalData.userInfo.gender;
    biz.userCity = app.globalData.userInfo.city;
    biz.userProvince = app.globalData.userInfo.province;
    biz.userCountry = app.globalData.userInfo.country;
    biz.userImg = app.globalData.userInfo.avatarUrl;
    network.SendLoginWXUser(biz, function(){
      if (userDatas.userType == 1) {
        owner.initUser(owner);
      } else if (userDatas.userType == 2) {
        owner.initUpper(owner);
      }

    });
  },
  initUser:function(owner){
    network.SendGetGoodsInfo(null, owner.initUserSuccess);
    network.SendGetPagesInfo(null, owner.initUserSuccess);
    network.SendGetUserVolumes(1, 0,owner.initUserSuccess);
  },
  initUpper:function(){

  },
  initUserSuccess:function(){
    if (userDatas.userId == "") return;
    if (shopDatas.goodTypeList.length == 0) return;
    if (shopDatas.goodInfoList.length == 0) return;
    if (pageDatas.userHomeTopBar.length == 0) return;
    if (pageDatas.userHomeItemBar.length == 0) return;
    if (pageDatas.userHomeTipsBar.length == 0) return;

    


    wx.switchTab({
      url: '/pages/BaseHome/baseHome'
    });
  },
  initUpperSuccess:function(){

  }
})
