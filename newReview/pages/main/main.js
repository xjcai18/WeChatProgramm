// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    isLogin:false,
    src:'../../images/index1.png',
    nickName:'未登录',
    newsList:[]
  },
  
/**
 * 获取到登陆的信息更新头像和昵称
 * @param {opendata myinfo} e 
 */
  getMyInfo:function(e){
    console.log(e)
    this.setData({
      src:e.detail.userInfo.avatarUrl,
      nickName:e.detail.userInfo.nickName,
      isLogin:true
    })

    //登陆之后需要更新收藏的新闻
    this.getFavorites();
  },

/**
 * 获取到收藏的数量
 */
  getFavorites:function(){
    //获取到全部的缓存数据
    let info = wx.getStorageInfoSync();
    //获取到全部的key
    let keys = info.keys;
    //获取到key的数量
    let num = keys.length;
    let myList = [];
    for(var i = 0;i<num;i++){
      let obj = wx.getStorageSync(keys[i]);
      myList.push(obj);
    }
    //更新收藏列表
    this.setData({
      newsList:myList,
      num:num-1,
    })
    return num;

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

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
    //需要判断是否登陆了
    if( this.data.isLogin){
      this.getFavorites();
    }

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