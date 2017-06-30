// year.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  formSubmitgy: function (event) {

    this.setData({
      pd1: false,
      pd2: false,
      pd3: false,
      pd4: false,
      pd5: false
    })

    var data = event.detail.value;
    var sr = parseInt(data.gongyuan);
    var sc = sr - 1911;

    if(isNaN(sr) || sr < 0 ){
      this.setData({
        pd5: true
      })
    }
    else if(sr < 1911){
      var sc = Math.abs(sc);
      this.setData({
        sr: sr,
        sc: sc,
        pd3: true
      })
    }
    else{
      this.setData({
        sr: sr,
        sc: sc,
        pd1: true,
      })
    }
   
  },

  formSubmitmg: function (event) {
    this.setData({
      pd1: false,
      pd2: false,
      pd3: false,
      pd4: false,
      pd5: false
    })

    var data = event.detail.value;
    var sr = parseInt(data.gongyuan);
    var sc = sr + 1911;

    if (isNaN(sr) || sr < 1) {
      this.setData({
        pd5: true
      })
    }
    else {
      this.setData({
        sr: sr,
        sc: sc,
        pd2: true,
      })
    }
  },


})