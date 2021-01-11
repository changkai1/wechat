// components/my-cpn/my-cpn.js
Component({
    options: {
        // shared: 自定义组件的样式和wxss的样式会互相影响
        // styleIsolation: 'shared',

        // apply-shared: wxss样式会影响到自定义组件，自定义组件的样式不会影响到wxss中的样式
        // styleIsolation: 'apply-shared',

        // isolated: 默认值 互相不影响
        styleIsolation: 'isolated'
    }
})
