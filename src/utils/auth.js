// import Cookies from 'js-cookie'

const TokenKey = 'Token'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}


export function getStorage(item) {
  return localStorage.getItem(item)
}

export function setStorage(name,item) {
  return localStorage.setItem(name, item)
}

export function removeStorage(item) {
  return localStorage.removeItem(item)
}
