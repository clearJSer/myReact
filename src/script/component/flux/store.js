export default {
  count: 3,

  getCount: function () {
    return this.count
  },

  setCount: function (payload) {
    this.count++
    //console.log(payload);
  }
}
