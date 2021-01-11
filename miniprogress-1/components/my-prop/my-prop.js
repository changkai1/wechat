// components/my-prop.js
Component({
    /**
     * 组件的属性列表,接受传递过来的属性
     */
    properties: {
        title: {
            type: String,
            value: '默认的内容',
            observer: (newValue, oldValue) => {  // 监听数据的变化
                console.log(newValue, oldValue)
            }
        }
    },
    // 组件的样式传递
    externalClasses: ['titleclass'],
    methods: {
        handleIncrement () {
            // 往外派发事件
            this.triggerEvent('increment', {name: 'why', age: 18})
        }
    }
})
