// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:["安徽省","安庆市","宿松县"],
    now:'20'

  },
  /**
   * 更改位置信息的函数
   * @param {接收到的位置信息} e 
   */
  changeRegion:function(e){
    console.log(e.detail.value)
    this.setData({
      region:e.detail.value})
    this.getWeather()//更新天气
  },


  getWeather:function(){
    /**
     * var是全局的le是快级的
     */
    var that = this;//this不可以在微信api函数内部使用
    wx.request({
      url:'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.region[1],
        key:'472bbec67944417093a3dfec948c42f6',
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          now:res.data.HeWeather6[0].now})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})