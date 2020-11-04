/*const path=require(path)

module.exports={
    lintOnSave:false,

    chainWebpack:config=>{
        const dir=path.resolve(__dirname,'.src/assets/icons')

        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)
            .include.add(dir).end()
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
            
        config.plugin('svg-sprite').use(
            require('svg-sprite-loader/plugin'),[{plainSprite:true}] )
        config.module.rule('svg').exclude.add(dir)//其他svg loader 排除icons目录       
       
        }     
}

*/
/* eslint-disable */ 
const path = require('path')

function resolve(dir) {
    // __dirname：    获得当前执行文件所在目录的完整目录名  C:\Users\image\AppData\Local\Programs\fang\morney
    // dir 为参数，此页面为src/assets/icons
    //path.join("__diraaaname",  "dir"); //__diraaaname\dir
    //path.join("__diraaaname", ".", "dir") // __diraaaname\dir
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/',
  
  chainWebpack: config => {
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,   
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/icons')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({       
        extract:false,
      }).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options=>({...options,plugins:[{removeAttrs:{attrs:'fill'}}]})).end()
    config.plugin('svg-sprite')
    .use(require('svg-sprite-loader/plugin'),[{plainSprite:true}] )
    config.module.rule('svg').exclude.add(resolve('src/assets/icons'))//其他svg loader 排除icons目录       
   
  }, 
}


