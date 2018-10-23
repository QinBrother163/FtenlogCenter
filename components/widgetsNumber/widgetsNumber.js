// components/widgetsNumber/widgetsNumber.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 图片路径
    imgName: {
      type: String,
      value: '//img.alicdn.com/imgextra/i1/1020886553/O1CN011yHJsSpSF0Eb62T_!!1020886553.jpg_200x200Q50s50.jpg'
    },
    // 商品价格
    goodsPrice: {
      type: Number,
      value: 368
    },
    // 库存数量
    goodsNumber: {
      type: Number,
      value: 3564
    },
    // 限购数量
    limitNumber: {
      type: Number,
      value: 1
    },
    // 默认选购数量
    initNumber: {
      type: Number,
      value: 1
    },
    // 已经选择的套餐
    goodsMeal: {
      type: String,
      value: '套餐一'
    },
    // 商品套餐
    goodsContert: {
      type: Array,
      value: ['套餐一', '套餐二']
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //触发选择套餐回调
    setFont(e) {
      this.triggerEvent("setFont", e);
    },
    numAddEvent() {
      //触发数量递增回调
      this.setData({
        initNumber: this.data.initNumber + 1
      })
      this.triggerEvent("numAddEvent", { num: this.data.initNumber });
    },
    numCutEvent() {
      //触发数量递减回调
      if (this.data.initNumber > 1) {
        this.setData({
          initNumber: this.data.initNumber - 1
        })
        this.triggerEvent("numCutEvent", {num:this.data.initNumber});
      }
    },
    /*
     * 内部私有方法建议以下划线开头
     * triggerEvent 用于触发事件
     */
    _addEvent() {
      //触发加入购物车回调
      this.triggerEvent("addEvent")
    },
    _buyEvent() {
      //触发购买回调
      this.triggerEvent("buyEvent");
    },
    _cancelEvent() {
      //触发取消回调
      this.triggerEvent("cancelEvent");
    },

  }
})