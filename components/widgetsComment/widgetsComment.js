// components/widgetsComment/widgetsComment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentData: Array,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.hiddenUserName();
  },
  // 隐藏用户名称
  hiddenUserName: function() {

    let commentData = [{
        name: '张三李四',
        date: '2018-10-26',
        info: '衣服品质很好 我个人非常满意 合身又舒服 关键价格公道',
        comment: '套餐一'
      },
      {
        name: '张三李四',
        date: '2018-10-26',
        info: '衣服品质很好 我个人非常满意 合身又舒服 关键价格公道',
        comment: '套餐一'
      }
    ];

    for (let i = 0; i < commentData.length; i = i + 1) {
      commentData[i].name = commentData[i].name.substr(0, 1) + '****' + commentData[i].name.substr(-1);
    }

    this.setData({
      commentData: commentData
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})