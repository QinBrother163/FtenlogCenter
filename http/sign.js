var network = require("./netBase.js");
var md5 = require("../utils/md5.js");

var APPKEY = network.APPKEY;
var APPSECRET = network.APPSECRET;
var WXAPPKEY = network.WXAPPKEY;

function md5Sign1(ts,params1){
  return md5.hexMD5(APPKEY + WXAPPKEY + params1 + ts + APPSECRET);
}

function md5Sign2(ts, params1, params2) {
  return md5.hexMD5(APPKEY + WXAPPKEY + params1 + params2 + ts + APPSECRET);
}

function md5Sign3(ts, params1, params2, params3) {
  return md5.hexMD5(APPKEY + WXAPPKEY + params1 + params2 + params3 + ts + APPSECRET);
}

module.exports = {
  md5Sign1: md5Sign1,
  md5Sign2: md5Sign2,
  md5Sign3: md5Sign3,
}