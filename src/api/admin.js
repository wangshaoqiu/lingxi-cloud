import {
    post,get,Delete
  } from '../utils/request'

//   管理员列表
export const getAdminList = param => get('/ec/administrators-mc', param)
// 添加管理员
export const addAdmin = param => post('/ec/administrators-mc', param)
// 批量删除管理员
export const delAdmin = param => Delete('/ec/administrators-mc/batch',param)