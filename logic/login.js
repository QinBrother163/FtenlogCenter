var userDatas = require("./data/userDatas.js")
function OnLogin(content){
  var bizContent = JSON.parse(content);
  userDatas.userId = bizContent.userInfo.userId;
  userDatas.upperId = bizContent.userInfo.userUpper;
  userDatas.userType = bizContent.userInfo.userType;
  userDatas.userCoin = bizContent.userInfo.userCoin;
  if (userDatas.userType == 1){
      //普通用户
    userDatas.collectionNum = JSON.parse(bizContent.userDatas.userCollection).length;
    userDatas.shoppingCartNum = JSON.parse(bizContent.userDatas.userShoppingCart).length;
    userDatas.cartVolumeNum = JSON.parse(bizContent.userDatas.userCartVolume).length;
  }else{
    //广告商
  }
}

module.exports = {
  OnLogin: OnLogin,
}