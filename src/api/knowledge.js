import {
    post,get,put,Delete
  } from '../utils/request'

//   添加顶级目录
export const addTopDir = param => post('/kb/dirs-mc/top', param)
// 添加子目录
export const addChildDir = (dirId,param) => post('/kb/dirs-mc/'+dirId+'/children', param)
// 获取顶级目录
export const getTopDir = () => get('/kb/dirs-mc/top')
// 更新目录
export const updateDir = (dirId,param) => put('/kb/dirs-mc/'+dirId,param) 
// 获取目录下子文件系统
export const getChildDir = (dirId,param) => get('/kb/dirs-mc/'+dirId+'/children-fs', param)
// 删除目录
export const delDir = (dirId) => Delete('/kb/dirs-mc/'+dirId)
// 获取专属文件可见的成员
export const getExclusive  = (dirId) => get('/kb/dirs-mc/top/'+dirId+'/files/exclusive-members')
// 编辑专属文件可见的成员
export const editExclusive  = (dirId,param) => put('/kb/dirs-mc/top/'+dirId+'/files/exclusive-members',param)
// 获取私密文件可见的成员
export const getPrivacy  = (dirId) => get('/kb/dirs-mc/top/'+dirId+'/files/privacy-members')
// 编辑私密文件可见的成员
export const editPrivacy  = (dirId,param) => put('/kb/dirs-mc/top/'+dirId+'/files/privacy-members',param)



//  获取上传策略
export const getStrategy = (param) => get('/kb/files-mc/upload-strategy',param)
// 上传文件
export const uploadFile = (param) => post('/kb/files-mc/upload', param)
// 更新文件
export const updateFile = (fileId,param) => put('/kb/files-mc/'+fileId, param)
// 删除文件
export const delFile = (fileId) => Delete('/kb/files-mc/'+fileId)




//  搜索
export const search = (param) => get('/kb/fs-mc/search',param)
// 批量删除
export const muchDel = (param) => Delete('/kb/fs-mc/batch',param)
