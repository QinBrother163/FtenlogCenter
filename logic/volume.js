var volumeDatas = require("./data/volumeDatas.js")
function OnUserVolumeInfo(content) {
  var bizContent = JSON.parse(content);
  var type = bizContent.type;

  switch(type){
      case 1:
        for (var index in bizContent.info) {
          var biz = bizContent.info[index];
          biz.term = JSON.parse(biz.numDiscount).term;
          biz.discount = JSON.parse(biz.numDiscount).discount;
          volumeDatas.userValidVolumes.push(biz);
        }
         break;
      case 2:
         break;
      case 3:
         break;
  }
}

module.exports = {
  OnUserVolumeInfo: OnUserVolumeInfo,
}