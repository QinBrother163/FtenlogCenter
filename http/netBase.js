var md5 = require('../utils/md5.js') 
var APPKEY = "1000";
var APPSECRET = "RcOFhtAYzwCGo91PGHdV";
var WXAPPKEY = "wx8d9e0a1d9cc2763f";

// var ORIGINURL = "http://192.168.88.101/ftenlog/FtenlogServer/public"; //双动环境地址
//var ORIGINURL ="http://192.168.179.1/ftenlog/FtlService/public" //宿舍环境地址 cyl
var ORIGINURL = "http://192.168.1.82/FtlService/public"; //建富环境地址
// var ORIGINURL = "http://192.168.1.108/FtlService/public"; //建富环境地址



var UpperId = "";
var Token = "";

function requestLoading(path, method, params, message,callback,success){
    var url = ORIGINURL + path;
    console.log(url);
    console.log(params);
    wx.showNavigationBarLoading()
    if(message != ""){
      wx.showLoading({
        title: message,
      })
    }
    wx.request({
      url: url,
      data:params,
      header: {
        'Content-Type': 'application/json'
        // 'content-type':'application/x-www-form-urlencoded'
      },
      method: 'post',
      success:function(res){
        console.log(res.data);
        wx.hideNavigationBarLoading()
        if (message != "") {
          wx.hideLoading()
        }
        if (res.statusCode == 200) {
          if (res.data.bizContent){
            var bizJson = JSON.parse(res.data.bizContent);
            if (bizJson.token) Token = bizJson.token;
          }
          if(callback != null)callback(0,res.data,success)
        } else {
          wx.showToast({
            title: '请检查网络',
            icon: 'fail',
            duration: 1000,
            mask: true
          })
          if (callback != null) callback(-1, res.data, success)
        }
      },
      fail:function(res){
        console.log(res);
        wx.hideNavigationBarLoading()
        if (message != "") {
          wx.hideLoading()
        }
        wx.showToast({
          title: '请检查网络',
          icon: 'fail',
          duration: 1000,
          mask: true
        })
        if (callback != null) callback(-1, res.data, success)
      },
      complete: function (res) {

      },
    })
}


function Send(url,method,params,callback,success,message){
    var BinIn = {};
    BinIn.appId = APPKEY
    BinIn.method = method
    BinIn.format = "JSON"
    BinIn.charset = "utf-8"
    BinIn.signType = "MD5"
    BinIn.timestamp = new Date().format("yyyy-MM-dd hh:mm:ss")
    BinIn.version = "1.0"
    BinIn.appAuthToken = ""
    BinIn.bizContent = params == null ? "" : params
    BinIn.signCode = SignCodeIn(BinIn)

    url += "?token=" + Token;
  requestLoading(url, method, BinIn, message,callback,success);
}

function SignCodeIn(body) {
  var str = "";
  str += body.appAuthToken;
  str += body.appId;
  str += body.bizContent;
  str += body.charset;
  str += body.format;
  str += body.method;
  str += body.timestamp;
  str += body.version;
  str += APPSECRET;

  str = "Ftenlog"
  return md5.hexMD5(str);
}


Date.prototype.format = function (format) {
  var args = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
    "S": this.getMilliseconds()
  };
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var i in args) {
    var n = args[i];
    if (new RegExp("(" + i + ")").test(format))
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
  }
  return format;
};


module.exports = {
  APPKEY:APPKEY,
  APPSECRET: APPSECRET,
  WXAPPKEY: WXAPPKEY,
  Send: Send,
}

