var network = require("./netBase.js");
var sign = require("./sign.js");
var userDatas = require("../logic/data/userDatas.js");
var loginLogic = require("../logic/login.js");
var shopLogic = require("../logic/shop.js");
var pageLogic = require("../logic/page.js");
var volumeLogic = require("../logic/volume.js");

/*------------------------- 路径分类  -------------------------*/
function SendFtenlog(method, content,callback,success,message){
  network.Send("/api/ftenlog", method, content, callback, success,message);
}

function SendFtenlogUser(method, content, callback, success,message) {
  network.Send("/api/ftenlog/user", method, content, callback, success,message);
}

function SendFtenlogTrade(method, content, callback, success,message) {
  network.Send("/api/ftenlog/trade", method, content, callback, success,message);
}

/*------------------------- 请求接口 -------------------------*/

/*
  BizIn : wxCode 微信登录返回的微信用户Code
  BizOut: userInfo 用户信息
*/
function SendLoginWXUser(content, success) {
  if (userDatas.upperId != "") {
    content.upperId = userDatas.upperId;
    content.ts = new Date().getTime();
    content.sign = sign.md5Sign1(content.ts, content.upperId);
  }
  var biz = JSON.stringify(content);
  SendFtenlog("/ftenlog/wxUser", biz, OnLoginWXUser, success,"用户登录中");
}

/*
  获取商品信息
*/
function SendGetGoodsInfo(content, success){
  SendFtenlogTrade("/ftenlog/trade/getGoodsInfo", null, OnSendGetGoodsInfo, success, "网络请求中");
}

/*
  获取页面信息
*/
function SendGetPagesInfo(content, success){
  SendFtenlogTrade("/ftenlog/trade/getPagesInfo", null, OnSendGetPagesInfo, success, "网络请求中");
}

/*
  获取用户地址
*/
function SendGetAddressInfo(content,success){
  SendFtenlogUser("/ftenlog/user/getAddress", null, OnSendGetAddressInfo, success, "网络请求中");
}

/*
  更新用户地址
*/
function SendUpdateAddressInfo(content, success){
  SendFtenlogUser("/ftenlog/user/updateAddress", null, OnSendUpdateAddressInfo, success, "网络请求中");
}

/*
  获取用户优惠卷
      type 
      1:有效期
      2:已失效
      3:已使用
      start 查询起点
*/
function SendGetUserVolumes(type,start,success){
  var json = {};
  json.type = type;
  json.start = start;
  var biz = JSON.stringify(json);
  SendFtenlogTrade("/ftenlog/trade/getUserVolumes", biz, OnSendGetUserVolumes, success, "");
}

/*
  获取当前发放的优惠卷
*/
function SendGetVolumesInfo(content, success){
  SendFtenlogTrade("/ftenlog/trade/getVolumesInfo", null, OnSendGetVolumesInfo, success, "网络请求中");
}


/*------------------------- callBack -------------------------*/
function OnLoginWXUser(statusCode, obj, success) {
  if (statusCode == 0) {
    if (obj.code == 0) {
      loginLogic.OnLogin(obj.bizContent);
    }
    if (success != null) success(obj.code, obj.msg)
  }
}

function OnSendGetGoodsInfo(statusCode, obj, success){
  if (statusCode == 0) {
    if (obj.code == 0) {
      shopLogic.OnShopInfo(obj.bizContent);
    }
    if (success != null) success(obj.code, obj.msg)
  }
}

function OnSendGetPagesInfo(statusCode, obj, success){
  if (statusCode == 0) {
    if (obj.code == 0) {
      pageLogic.OnPageInfo(obj.bizContent);
    }
    if (success != null) success(obj.code, obj.msg)
  }
}

function OnSendGetAddressInfo(statusCode, obj, success){
  if (statusCode == 0) {
    if (obj.code == 0) {}
    if (success != null) success(obj.code, obj.msg)
  }
}

function OnSendUpdateAddressInfo(statusCode, obj, success) {
  if (statusCode == 0) {
    if (obj.code == 0) { }
    if (success != null) success(obj.code, obj.msg)
  }
}

function OnSendGetUserVolumes(statusCode, obj, success) {
  if (statusCode == 0) {
    if (obj.code == 0) {
      volumeLogic.OnUserVolumeInfo(obj.bizContent);
    }
    if (success != null) success(obj.code, obj.msg, obj.bizContent)
  }
}

function OnSendGetVolumesInfo(statusCode, obj, success) {
  if (statusCode == 0) {
    if (obj.code == 0) { }
    if (success != null) success(obj.code, obj.msg)
  }
}

module.exports = {
  SendLoginWXUser: SendLoginWXUser,
  SendGetGoodsInfo: SendGetGoodsInfo,
  SendGetPagesInfo: SendGetPagesInfo,
  SendGetAddressInfo: SendGetAddressInfo,
  SendUpdateAddressInfo: SendUpdateAddressInfo,
  SendGetUserVolumes: SendGetUserVolumes,
  SendGetVolumesInfo: SendGetVolumesInfo
}