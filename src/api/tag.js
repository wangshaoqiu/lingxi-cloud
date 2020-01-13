import {
    post,get,Delete
  } from '../utils/request'

//   完整标签结构
export const structures = param => get('/kb/labels-mc/structures', param)
// 添加二级标签
export const add2Tag = (lv1LblId,param) => post('/kb/labels-mc/lv1s/'+lv1LblId+'/lv2s', param)
// 删除二级标签
export const del2Tag = (lv2LblId) => Delete('/kb/labels-mc/lv2s/'+lv2LblId)
// 全部二级标签
export const all2Tag = () => get('/kb/labels-mc/lv2s') 

// 标签卡片
export const getCards = () => get('/kb/labels-mc/cards')
// 一级标签下文件
export const getFiles = (lv1LabelId,param) => get('/kb/labels-mc/lv1s/'+lv1LabelId+'/files', param)