# frontend

> A Vue.js project

## 项目运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# 项目结构

```
.
├── build                                      // webpack配置文件
├── config                                     // 项目打包路径
├── src                                        // 源码目录
│   ├── assets                                  // 静态资源
│   ├── components                              // 组件
│   ├── core                                  // 基本配置
│   │   ├── filters                             // 过滤器
│   │   ├── mixins                              // 混入                      
│   │   └── directives                          // 自定义指令
│   ├── router
│   │   └── index.js                            // 路由配置
│   ├── service                                  // 数据交互统一调配
│   │   ├── api.service.js                      // 对请求进行统一的封装处理
│   │   └── .js                                 // 定义各个界面的请求
│   ├── store                                  // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── getters.js                          // 配置getters
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   └── mutations.js                        // 配置mutations
│   ├── App.vue                                // 页面入口文件
│   ├── main.js                                // 程序入口文件，加载各种公共组件
├── index.html                                  // 入口html文件
.
