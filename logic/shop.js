var shopDatas = require("./data/shopDatas.js")
function OnShopInfo(content){
  var bizContent = JSON.parse(content);

  for (var index in bizContent.goodsType) {
    var biz = bizContent.goodsType[index];
    shopDatas.typeMap.set(biz.goodsTypeId, biz);
    shopDatas.goodTypeList.push(biz);
  }
  for (var index in bizContent.goodsInfo) {
    var biz = bizContent.goodsInfo[index];
    shopDatas.goodMap.set(biz.productId, biz);
    shopDatas.goodInfoList.push(biz);
  }
}

module.exports = {
  OnShopInfo: OnShopInfo,
}