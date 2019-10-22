import {
    post,get,Delete,put
  } from '../utils/request'

//   添加顶级组织
export const addTopOrg = param => post('/ec/orgs-mc/top', param)
// 添加子组织
export const addChildOrg = (orgId,param) => post('/ec/orgs-mc/'+orgId+'/children', param)
// 获取全部组织
export const getAllOrg = () => get('/ec/orgs-mc/structures')
// 获取组织详情
export const orgDetail = (orgId) => get('/ec/orgs-mc/'+orgId)
// 更新组织
export const updateOrg = (orgId,param) => put('/ec/orgs-mc/'+orgId,param)
// 删除组织
export const delOrg = (orgId) => Delete('/ec/orgs-mc/'+orgId)

// 组织下成员
export const getMember = (orgId,param) => get('/ec/orgs-mc/'+orgId+'/members', param)
// 完整组织成员架构
export const memberStructures = () => get('/ec/orgs-mc/member-structures')



//   添加成员
export const addMember = param => post('/ec/members-mc', param)
//   全部成员
export const allMember = param => get('/ec/members-mc/all', param)
//   未分配成员
export const unAllocated = param => get('/ec/members-mc/unallocated', param)
// 更新成员
export const updateMember = (memberId,param) => put('/ec/members-mc/'+memberId, param)
//   批量删除成员
export const muchDel = data => Delete('/ec/members-mc/batch', data)
