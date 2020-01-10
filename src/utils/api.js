import fetch from './fetch'

//第一种直接再页面调接口
//用户获取周杰伦的音乐 get请求用params params是添加到url的请求字符串中的，用于get请求。
export function getGoodList(params){
    return fetch({url:'/youzan/getGoodList',method:'GET',params:params})
}


//第二种用vuex  一系列各种数据可能会跨组件使用，所有使用vuex，随便哪个页面可以随便使用
//登录接口 post用data data是添加到请求体（body）中的， 用于post请求。
export function fetchLogin(data){
    return fetch({
        method:'POST',
        data:data,
         url:'/youzan/login'
    })
}

//第三种，全局封装所有接口方法给一个内置变量
export default {
    getGoodList,
    fetchLogin
}