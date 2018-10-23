var userId = ""; //用户编号
var upperId = "";//用户广告商ID
var userType = 1;//用户类型 1:普通用户 2:广告商用户
var userCoin = 0;//用户金币

//普通用户数据
/*粗略 首界面所需要展示的数据*/
var collectionNum = 0; //收藏夹数量
var shoppingCartNum = 0; //购物车数量

/*详情 用户点进去看详情再获取*/
var orderFail = new Array();//待支付订单
var orderSuccess = new Array(); //交易成功订单
var addressData = new Array(); //用户地址
var collectionData = new Array();//用户收藏夹
var shoppingCartData = new Array();//购物车

//广告商用户数据


module.exports = {
  userId: userId,
  upperId: upperId,
  userType: userType,
  userCoin: userCoin,
  collectionNum: collectionNum,
  shoppingCartNum: shoppingCartNum,
  orderFail: orderFail,
  orderSuccess: orderSuccess,
  addressData: addressData,
  collectionData: collectionData,
  shoppingCartData: shoppingCartData,
}