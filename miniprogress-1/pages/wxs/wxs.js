// pages/wxs/wxs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        titles:["衣服", "裤子", "鞋子"],
        count: 0
    },
    handlerItemClick (event) {
        // console.log(event);
        let dataset = event.currentTarget.dataset;
        let index = dataset.index;
        let item = dataset.item;
        // console.log(index, item)
    },
    handleBox1 () {
        console.log("handleBox1")
    },
    handleBox2 () {
        console.log("handleBox2")
    },
    handleBox3 () {
        console.log("handleBox3")
    },
    handleBox4 () {
        console.log("handleBox4")
    },
    handleBox5 () {
        console.log("handleBox5")
    },
    handleBox6 () {
        console.log("handleBox6")
    },
    handleIncrement (event) {
        console.log(event)
        this.setData({
            count: this.data.count + 1
        })
    }
})