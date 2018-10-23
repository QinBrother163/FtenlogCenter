//去除微信名字的表情
function WxUserNickUtils(nick){
  var strArr = nick.split(""),
    result = "",
    totalLen = 0;
  for (var idx = 0; idx < strArr.length; idx++) {
    // 超出长度,退出程序
    if (totalLen >= 16) break;
    var val = strArr[idx];
    // 英文,增加长度1
    if (/[a-zA-Z]/.test(val)) {
      totalLen = 1 + (+totalLen);
      result += val;
    }
    // 中文,增加长度2
    else if (/[\u4e00-\u9fa5]/.test(val)) {
      totalLen = 2 + (+totalLen);
      result += val;
    }
    // 遇到代理字符,将其转换为 "口", 不增加长度
    else if (/[\ud800-\udfff]/.test(val)) {
      // 代理对长度为2,
      if (/[\ud800-\udfff]/.test(strArr[idx + 1])) {
        // 跳过下一个
        idx++;
      }
      // 将代理对替换为 "口"
      result += "口";
    }
  }

  return result;
}

module.exports = {
  WxUserNickUtils: WxUserNickUtils,
}