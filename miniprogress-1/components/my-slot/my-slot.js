// components/my-slot/my-slot.js
Component({
    // 接收传入的数据
    properties: {
        title: {
            type: String,
            value: '',
            observer: function (newVal, oldVal) { // 侦听title的变化
                console.log(newVal, oldVal)
            }
        }
    },

    // 组件内部初始化数据
    data: {
        counter: 0
    },

    // 定义组件内部的函数
    methods: {
        foo () {

        }
    },

    // 定义组件的配置选项
    // multipleSlots: 在使用多插槽时需要设置
    // styleIsolation: 设置样式隔离方式
    options: {
        multipleSlots: true,
        styleIsolation: 'shared',
    },

    // 外界给组件传入额外的样式
    externalClass: [],

    // 可以监听properties/data的改变
    observers: {
        counter: function (newVal) { // 这里拿不到oldVal值
            console.log(newVal)
        }
    },

    // 组建中监听生命周期函数
    // 1、监听所在页面的生命周期
    pageLifetimes: {
        show() {
            console.log("监听组件所在页面显示出来时")
        },
        hide() {
            console.log("监听所在页面隐藏起来时")
        },
        resize() {
            console.log("监听页面尺寸的改变")
        }
    },

    // 2、监听组件本身的生命周期
    lifetimes: {
        created() {
            console.log("组件被创建出来")
        },
        attached() {
            console.log("组件被添加到页面")
        },
        ready() {
            console.log("组件被渲染出来")
        },
        moved() {
            console.log("组件被移动到另外一个节点")
        },
        detached() {
            console.log("组件被移除掉")
        }
    }
})
