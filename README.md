# node 开发基础框架搭建

## 实时刷新（nodemon）

1. 全局安装 nodemon
   `npm install nodemon -g`

2. 配置 package.json 启动项，如：
   `"start": "nodemon ./src/app.js",`

## babel 配置（若需要使用 export, import 等功能）

1. 安装 babel 依赖
   `npm install --save-dev @babel/core @babel/preset-env @babel/register`

2. 配置 babel

    在项目根目录项新建 babel.config.js 文件，并配置 babel，如：

    ```javascript
    module.exports = api => {
      api.cache(true)
      return {
        presets: ['@babel/preset-env']
      }
    }
    ```

3. 入口文件处理

    入口文件引入@babel/register及主文件，主文件中即可放心使用 es 模块引入，如：

    ```javascript
    require('@babel/register')
    require('./main.js')
    ```

## eslint配置

1. 根目录新增.eslintrc.js文件

2. 配置项如下：

    ```javascript
    module.exports = {
      root: true,
      env: {
        node: true
      },
      extends: ['eslint:recommended'],
      rules: {
        'no-console': 0,
        'no-unused-vars': 1
      },
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 2019
      }
    }
    ```

    **注意其中的parserOptions项中sourceType项配置，否则新语法可能报错**
