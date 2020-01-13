
/* eslint-disable no-console */
import router from './router'
// import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken,removeToken,getStorage} from './utils/auth' // get token from cookie
// import getPageTitle from '../utils/get-page-title'
// import axios from './utils/request'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  // set page title
  // document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  // const admin = JSON.parse(getStorage("ents")).superAdminFlag
  const ents = JSON.parse(getStorage("ents"))


  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      if((ents.superAdminFlag&&ents.superAdminFlag==1)||(ents.adminFlag&&ents.adminFlag==1)){
        next({ path: '/' })
      } else {
        next({ path: '/latest' })
      }
      
      NProgress.done()
    } else if(to.path === '/organization'||to.path === '/tags') {
      if((ents.superAdminFlag&&ents.superAdminFlag==1)||(ents.adminFlag&&ents.adminFlag==1)){
        next()
      } else {
        next({ path: '/404' })
      }
      
      NProgress.done()
    } else if(to.path === '/admin') {
      if(ents.superAdminFlag&&ents.superAdminFlag==1){
        next()
      } else {
        next({ path: '/404' })
      }
      
      NProgress.done()
    } else if(to.path === '/') {
      if((ents.superAdminFlag&&ents.superAdminFlag==1)||(ents.adminFlag&&ents.adminFlag==1)){
        next({ path: '/latest' })
      } else {
        next({ path: '/latest' })
      }
      
      NProgress.done()
    } else {
      try {
        // get user info
        // await store.dispatch('user/getInfo')
        // next({ path: '/' })
        next()
      } catch (error) {
        // remove token and go to login page to re-login
        removeToken()
        Message.error(error || 'Has Error')
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      // next()
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})