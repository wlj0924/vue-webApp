
//接口粘调:vuex,axios,反向代理一步到位
import axios from 'axios'
import { Dialog } from 'vant';
//测试:http://localhost:9090
//上线:http://xxx.com
var baseURL = 'http://localhost:8089'//公司用的可能有很多url，所有需要改动,需要是自己本机的端口
const fetch = axios.create({
    timeout: 7000, // 请求超时时间
    baseURL: baseURL,
    // headers: {'X-Custom-Header':'foobar'}
    headers:{'Content-Type': 'application/json;charset=UTF-8'}
});


//添加请求拦截器。发生在请求发起之前
fetch.interceptors.request.use(config=>{

    // loadingInstance = Loading.service({
    //     lock:true,
    //     text:'loading...'
    // })
    console.log('请求拦截，ajax发起之前发生',config)
    var token = localStorage.getItem('token')
    config.headers.Authorization = token//用户鉴权把token添加到config.headers这个字段Authorization(根据公司要求哪个字段)
    return config
})

//添加响应拦截器,a发生在客户端接收数据之前
fetch.interceptors.response.use(response=>{
    // loadingInstance.close()
    // console.log(response)
    console.log('响应拦截，ajax接收数据之前',response)
    var res = {};
    if(response.data&&response.data.err==0){
        res = response.data.data || {}
        
    }else{
        console.log(response.data.data.total)
    }
    return res
},error=>{
    // console.log('TCL:error',error)
    Dialog.alert({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
        // on close
      });
    // loadingInstance.close()
    return Promise.reject(error)
})

export default fetch

