
/* eslint-disable no-console */
import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store'
import { getToken,setToken,getStorage} from './auth'
// import router from '../router'
import qs from 'qs'
// qs是为了传递参数为数组格式的时候格式化参数，非常有用




axios.defaults.timeout = 10000
axios.defaults.baseURL = process.env.VUE_APP_BASE_API2



// const token = getToken()
// if (token) {
//   console.log('token存在')
//   axios.defaults.baseURL = process.env.VUE_APP_BASE_API2
// } else {
//   console.log('token不存在')
//   axios.defaults.baseURL = process.env.VUE_APP_BASE_API
// }

// request拦截器
axios.interceptors.request.use(config => {
  if (getToken()) {
    const Token = ' bearer ' + getToken()
    // config.headers['Authorization'] = Token // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-App-Version':'pc:ent-sass:wechat:0.0.1',
      'Authorization': Token
    }
  } else {
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-App-Version':'pc:ent-sass:wechat:0.0.1'
    }
  }
  const ents = JSON.parse(getStorage('ents'))
  if(ents!==''&&ents!==null){
    config.headers['X-Ent'] = ents.entId
  }

  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
axios.interceptors.response.use(
  
  response => {
    // if (response.data.code === 401) {
    //   router.push({
    //     path: '/login',
    //     querry: {
    //       redirect: router.currentRoute.fullPath
    //     }
    //   })
    // }
    if (response.headers['x-token']) {
      const token = response.headers['x-token']
    setToken(token)
    }
    return response
  },
  error => {
    // console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default axios

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_API2
    axios.get(url, {
      params:params,
      paramsSerializer: params => {
        return qs.stringify(params, { indices: false })
      }
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export function get2(url, params) {
  return new Promise((resolve, reject) => {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_API
    axios.get(url, {
      params:params,
      paramsSerializer: params => {
        return qs.stringify(params, { indices: false })
      }
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

// post是功能模块api
export function post(url, params) {
  axios.defaults.baseURL = process.env.VUE_APP_BASE_API2
  return new Promise((resolve, reject) => {
    // const token = getToken()
    // params.token = token

    axios.post(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// post2是登录模块api

export function post2(url, params) {
  axios.defaults.baseURL = process.env.VUE_APP_BASE_API

  return new Promise((resolve, reject) => {
    // const token = getToken()
    // params.token = token

    axios.post(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function put(url, params) {
  axios.defaults.baseURL = process.env.VUE_APP_BASE_API2
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export function Delete(url, param) {
  axios.defaults.baseURL = process.env.VUE_APP_BASE_API2
  return new Promise((resolve, reject) => {
    axios.delete(url,{data:param})
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
