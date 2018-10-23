var pageDatas = require("./data/pageDatas.js")
function OnPageInfo(content) {
  var bizContent = JSON.parse(content);
  for (var index in bizContent.pageInfo){
    var biz = bizContent.pageInfo[index];
    if (biz.showId == 1 && biz.pageId == 1){
      pageDatas.userHomeTopBar.push(JSON.parse(biz.content));
    } else if (biz.showId == 2 && biz.pageId == 1){
      pageDatas.userHomeItemBar.push(JSON.parse(biz.content));
    } else if (biz.showId == 3 && biz.pageId == 1) {
      pageDatas.userHomeTipsBar.push(JSON.parse(biz.content));
    } else if (biz.showId == 2 && biz.pageId == 3){
      pageDatas.userMineMoreBar.push(JSON.parse(biz.content));
    } else if (biz.showId == 4 && biz.pageId == 3){
      pageDatas.userMineFunBar.push(JSON.parse(biz.content));
    }
  }
}

module.exports = {
  OnPageInfo: OnPageInfo,
}