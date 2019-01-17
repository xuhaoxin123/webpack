const path = require("path")
module.exports = {
  // 入口: 有并且可以有多个
  entry:{
    // main:["babel-polyfill","./src/main.js"]
    // main:["core-js/fn/promise","./src/main.js"]
    main:["./src/main.js"]
  },
  // 打包环境: 开发 & 生产
  mode:"development",
  // 出口: 有且只能有一个
  output:{
    filename:"[name]-bundle.js",
    path: path.resolve(__dirname,"../dist")
  }
}