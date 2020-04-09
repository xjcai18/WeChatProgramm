// pages/detail/detail.js
var common = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data:{
    article:{
      id:'356412',
      title:'特写：2019，天安门城楼前的中国',
      poster:'http://image1.chinanews.com.cn/cnsupload/big/2019/10-01/4-426/a7e426b0dd6c43d2bc710fafe810a0d5.jpg',
      add_date:'2019-10-01',
      content:'  中新网北京10月5日电(郭超凯 赵金龙)北京时间10月5日2时51分，中国在太原卫星发射中心用长征四号丙运载火箭，成功将高分十号卫星发射升空，卫星顺利进入预定轨道，任务获得圆满成功.'
    },
    isAdd:false,
    },

    /**
     * 添加收藏
     * @param {获取到参数} e 
     */
  addFavorite:function(e){
    let article = this.data.article;
    //将数据添加到缓存
    wx.setStorageSync(article.id,article);
    this.setData({
      isAdd:true
    })

  },



/**
 * 取消收藏函数
 */
  cancelFavorite:function(){
    let article = this.data.article;
    wx.removeStorageSync(article.id);
    this.setData({
      isAdd:false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //options是传递进来的参数
    console.log(options.id)
    let id = options.id;

    //检查当前新闻是否在收藏夹中
    var  newArticle = wx.getStorageSync(id);
    //新闻已存在
    if(newArticle!=''){
      this.setData({
        isAdd:true,
        article:newArticle
      })
    }
    //如果缓冲区里面没有，那么我们从列表里面去获取到文章。
    else{
      let result = common.getNewsContent(id);
      if(result.code=='200'){
        console.log("设置了result.news的值")
        console.log(result.news.id)
        this.setData({
          article:result.news
        })
  
      }

    }

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