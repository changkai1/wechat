// pages/image/image.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imagePath: '',
    },
    handleChooseAlbum() {
        // 让用户在相册中选择图片或准备和拍照
        wx.chooseImage({
            success: (res) => {
                console.log(res);
                let path = res.tempFilePaths[0];
                this.setData({
                    imagePath: path
                })
            }
        })
    },
    handleImageLoad (event) {
        console.log("图片加载完成")
        // console.log("event", event)
    }
})