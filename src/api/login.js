import {
    post2,get2
  } from '../utils/request'

export const sendCode = param => post2('/auc/v1/phone-login/acquire-sms', param)
export const login = param => post2('/auc/v1/phone-login', param)
export const getUserInfo = param => get2('/auc/v1/users', param)