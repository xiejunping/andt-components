# andt-components
include ant-design-vue iview admin-front-framework

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 项目描述
这是一个`vue-cli 3.x` 构建的vue框架，按需加载 `andt-design-vue` 和 `iview` 处理了不兼容的问题。


andt-design-vue  中的spin的用法很有局限性，

不支持相对位置显示
不支持全局方法显示与关闭
可以包裹，但不能在子组件中关闭

### 接口请求
- 优化原有的三种方式的请求 `json`,`x-www-form-urlencoded`,`form-data`

- 分别对应 `request.class.js` 里的 `reqJson`,`reqData`,`reqFormData` 同时在这次优化请求中增加了取消方法，并深度测试了其取消功能，在单接口或是多接口的同时，都可以使用取消机制

- 优化请求全屏遮罩动画，并增加取消按钮功能，在前后端开发的功能中，如出现错误，及接口等待时间过长，用户可手动取消，增加用户的体验度。