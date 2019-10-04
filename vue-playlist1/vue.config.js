module.exports={
  //根路径
  baseURI : '/' ,
  //构建输出目录  build
  outputDir : 'dist',
  //静态资源目录 js css fonts img
  assertsDir : 'asserts',
  //是否开启eslint保存检测，有效值 true || false || error
  lintOnSave : false,
  devServer: {
    open : false,
    host : 'localhost',
    port : 8888,
    https : false,
    //热模块更新
    hotOnly : false,
    proxy : {
      //配置跨域
      '/api:':{
        target : 'http//localhost:8080/api',
        ws : true,
        changeOrigin : true,
        pathRewrite : {
          '^/api' : ''
        }
      }
    }
  }
};
