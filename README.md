# andt-components
include ant-design-vue iview admin-front-framework

投放组件DEMO演示 [https://free.jsvue.cn/andt-components/#/about](https://free.jsvue.cn/andt-components/#/about)

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
yarn run build --report
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

### 线上演示地址

DEMO演示 [https://free.jsvue.cn/andt-components](https://free.jsvue.cn/andt-components/)

组件已经开发到 vue2的组件库里去了  advt-ui 稳定版 0.0.9 , https://gitee.com/ChuPiJiang/AdvtUI 


接下来计划把UI库做大做强，让更多做投放的前端开发能获得解放，也希望能够提更多好的建议，或是参与到维护中来

### 项目描述
这是一个`vue-cli 3.x` 构建的vue框架，按需加载 `andt-design-vue` 和 `iview` 处理了不兼容的问题。


andt-design-vue  中的spin的用法很有局限性，

不支持相对位置显示
不支持全局方法显示与关闭
可以包裹，但不能在子组件中关闭

### 字体的替换
字体顺序不对，查看使用了两种UI框架，默认字体，字体顺序都不一样，怎么办

- 方案一 单页应用 入口时 App.vue `#app` 这个样式增加字体可以解决一部分
- iview 的主题更改，官方两种方式 
    - 变量覆盖（推荐）

        增加一个less 的入口文件

        @import '~iview/src/styles/index.less'; // 引入iview样式

        @import './reset.less';
        @import './variable.less';

        // Here are the variables to cover, such as:
        @primary-color: #8c0776;

        main.js 里面不要引用原来的css
        `import 'iview/dist/styles/iview.css';`
        这种方式删除

        使用下面方式
        `import '@/assets/styles/index.less'`

- andt-design-vue 的主题怎么修改，官方方式一三种
    - 变量覆盖 （与iview）一样，但是，如果使用的按需引入，不能使用这种方式
        - 配置 less 变量文件 #
另外一种方式是建立一个单独的 less 变量文件，引入这个文件覆盖 antd.less 里的变量。
```js
__at__import '~ant-design-vue/dist/antd.less'; // 引入官方提供的 less 样式入口文件
__at__import 'your-theme-file.less'; // 用于覆盖上面定义的变量
```
      >注意，这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 babel-plugin-import 的 style 属性一起使用。

      - 在 vue cli 3 中定制主题 #
项目根目录下新建文件vue.config.js
```js

// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  }
}
```

### 接口请求
- 优化原有的三种方式的请求 `json`,`x-www-form-urlencoded`,`form-data`

- 分别对应 `request.class.js` 里的 `reqJson`,`reqData`,`reqFormData` 同时在这次优化请求中增加了`cancelRequest`取消方法，并深度测试了其取消功能，在单接口或是多接口的同时，都可以使用取消机制
>测试取消需配合长延迟接口做实验，代码中增加了`delay`60s,长等待接口，并测试了`axios`的超时限制，浏览器超时限制，`google chrome`的前端超时限制是4分钟。

- 优化请求全屏遮罩动画，并增加取消按钮功能，在前后端开发的功能中，如出现错误，及接口等待时间过长，用户可手动取消，增加用户的体验度。

优化打包模块
引用一下静态CDN资源、本地资然

在 public 增加 js 文件夹

## 今日头条媒体

- 创建广告组 http://localhost:8080/#/create/toutiao/campaign
- 创建广告计划 http://localhost:8080/#/create/toutiao/plan
- 创意创意 http://localhost:8080/#/create/toutiao/creative

### 2022 更新

vue.config.js  中的配置 config.externals 使用 CDN 的引入 后，在项目中都可以使用对应的 window 下对应的变量直接使用，但是eslint可能会报错，
