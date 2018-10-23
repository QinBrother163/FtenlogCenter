Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    couponData: Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    is_Show: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    wc_hideDialog() {
      this.setData({
        is_Show: !this.data.is_Show
      })
    },
    //展示弹框
    wc_showDialog() {
      this.setData({
        is_Show: !this.data.is_Show
      })
    },
    //触发选择套餐回调
    wc_getCoupon(e) {
      this.triggerEvent("getCoupon", e);
    },
    /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
    _wc_okEvent() {
      //触发购买回调
      this.triggerEvent("wc_okEvent");
    },
    _wc_closeEvent() {
      //触发取消回调
      this.triggerEvent("wc_closeEvent");
    },
  }
})