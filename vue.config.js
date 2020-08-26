// module.exports = {
//     devServer: {
//         proxy: {
//             "/api": {
//                 target: "http://139.196.204.151:8081", // 接口的域名 // secure: false,  // 如果是https接口，需要配置这个参数

//                 changeOrigin: true, // 如果接口跨域，需要进行这个参数配置

//                 pathRewrite: {
//                     "^/api": "" //这是一个通配符，设置完了之后每个接口都要在前面加上/api（特别注意这一点）
//                 }
//             }
//         }
//     }
// };
