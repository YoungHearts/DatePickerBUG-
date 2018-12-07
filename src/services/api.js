/*
 * Created by yangj on 2018-8-22 04:51
 * 1、other参数说明：isExport:true/false,是否是下载接口
 */


import { stringify } from "qs";
import { request } from "../utils/request";
var host = window.location.host;
//http://192.168.1.101:8082/
const URL = InitUrl("http://192.168.1.146:8082/");
const UPURL = InitImgUrl("http://192.168.1.87:8084/");
let AdminURL,CRMURL;
function InitUrl(link) {
  switch (host) {
    case "onsys.doukor.com":
    AdminURL='https://admin.doukor.com/#/';
      return "https://api-onsys.doukor.com/";
      break;
    case "onsystest.doukor.com":
    AdminURL='http://admintest.doukor.com/#/';
    CRMURL='http://crmtest.doukor.com/';
      return "http://testapi-onsys.doukor.com/";
      break;
    case "onsysuat.doukor.com":
    AdminURL='https://adminuat.doukor.com/#/';
      return "https://uatapi-onsys.doukor.com/";
      break;
    case "192.168.1.22:8000":
    AdminURL='http://192.168.1.22:8087/#/';
      return "http://192.168.1.22:8082/";
      break;
    default:
    AdminURL='http://localhost:8001/#/';
    CRMURL='http://crm.doukor.com/';
      return link;
  }
}
function InitImgUrl(link) {
  switch (host) {
    case "onsys.doukor.com":
      return "https://api-pay.doukor.com/";
      break;
    case "onsystest.doukor.com":
      return "http://testapi-pay.doukor.com/";
      break;
    case "onsysuat.doukor.com":
      return "https://uatapi-pay.doukor.com/";
      break;
    case "192.168.1.22:8000":
      return "http://192.168.1.22:8084/";
      break;
    default:
      return link;
  }
}
// const URL=isDev?'http://192.168.1.22:8082/':'https://apionsys.doukor.com/';//彭爱华https://apionsys.doukor.com/
// const URL='http://192.168.1.22:8082/';//'http://testapi-onsys.doukor.com/'、https://apionsys.doukor.com/
// const URL='http://192.168.1.99:8082/';//彭爱华
// const URL=isDev?'http://47.96.74.255:8081':'http://47.96.74.255:8081/';//张文超
// const URL=isDev?'http://192.168.1.84:8082/':'http://47.96.74.255:8081/';//杨显凿https://api_onsys_test.doukor.com/';apionsys.doukor.com
// const URL=isDev?'http://192.168.1.81:8082/':'http://47.96.74.255:8081/';//杨显凿https://api_onsys_test.doukor.com/';apionsys.doukor.com
// const URL=isDev?'http://192.168.1.242:8081/':'http://47.96.74.255:8081/';//皱泽
// const UPURL='http://192.168.1.247:8888/';//图片上传接口
// const UPURL='http://testapi-pay.doukor.com/';//测试地址
// const UPURL=isDev?'http://192.168.1.87:8084/':'https://testapi-onsys.doukor.com/';
// const UPURL='http://192.168.1.22:8084/';
// 第三方：testapi-pay.doukor.com
// APP、小程序：testapi-app.doukor.com
// B端：testapi-onsys.doukor.com
// 系统端：testapi-admin.doukor.com
const VERSION = "1.1.7"; //版本号：(升级版本号可以让客户端强制重登录清空缓存)一般每个正式版上线后升级版本号。
export { UPURL, URL, VERSION, AdminURL, CRMURL };
export async function grantAuthorization(sele, params) {
  return request(`${URL}${sele}/grantAuthorization`, {
    method: "PUT",
    body: params
  });
}
export async function queryEnrollPersonnel(sele, params) {
  return request(`${URL}${sele}/queryEnrollPersonnel`, {
    method: "GET",
    body: params
  });
}
export async function query(sele, params) {
  //新版查询
  return request(`${URL}${sele}/query`, {
    method: "GET",
    body: params
  });
}
export async function list(sele, params) {
  //新版查询1
  return request(`${URL}${sele}`, {
    method: "GET",
    body: params
  });
}
export async function exportClazzOrder(sele, params) {
  //下载
  return request(`${URL}${sele}/exportClazzOrder`, {
    method: "POST",
    body: params
  });
}
export async function notifyUser(sele, params) {
  //下载
  params.del = 0; //后端搞的事情。。。。
  return request(`${URL}${sele}/notifyUser`, {
    method: "POST",
    body: params
  });
}
export async function getApprovalDate(sele, params) {
  params.del = 0; //后端搞的事情。。。。
  return request(`${URL}${sele}/getApprovalDate`, {
    method: "GET",
    body: params
  });
}
export async function closeOffBalance(sele, params) {
  return request(`${URL}${sele}/closeOffBalance`, {
    method: "PUT",
    body: params
  });
}
export async function changeTrialStatus(sele, params) {
  return request(`${URL}${sele}/changeTrialStatus`, {
    method: "PUT",
    body: params
  });
}
export async function divideClass(sele, params) {
  return request(`${URL}${sele}/divideClass`, {
    method: "PUT",
    body: params
  });
}
export async function openOrCancel(sele, params) {
  //新版查询
  return request(`${URL}${sele}/openOrCancel`, {
    method: "POST",
    body: params
  });
}
export async function queryRoleListNotInUserRole(sele, params, callback) {
  // 广场列表
  return request(`${URL}${sele}/queryRoleListNotInUserRole`, {
    method: "GET",
    body: params
  });
}
export async function counterOder(sele, params) {
  //新版查询
  return request(`${URL}${sele}/counterOder`, {
    method: "GET",
    body: params
  });
}
export async function queryNotOrgEmployeeByOrgId(sele, params, callback) {
  // 广场列表
  return request(`${URL}${sele}/queryNotOrgEmployeeByOrgId`, {
    method: "GET",
    body: params
  });
}
export async function getOrgById(sele, params, callback) {
  // 部门信息接口
  return request(`${URL}${sele}/getOrgById`, {
    method: "GET",
    body: params
  });
}
export async function queryClassList(sele, params) {
  //活动-查询所有课程的课程列表
  return request(`${URL}${sele}/queryClassList`, {
    method: "GET",
    body: params
  });
}
export async function deleteOrgEmployee(sele, params, callback) {
  // 账号系统授权
  return request(`${URL}${sele}/deleteOrgEmployee`, {
    method: "DELETE",
    body: params
  });
}
export async function queryByPhone(sele, params) {
  return request(`${URL}${sele}/query`, {
    method: "GET",
    body: params
  });
}
export async function queryByNo(sele, params) {
  return request(`${URL}${sele}/queryByNo`, {
    method: "GET",
    body: params
  });
}
export async function getStudentByGId(sele, params) {
  //班级管理-学生列表
  return request(`${URL}${sele}/getStudentByGId`, {
    method: "GET",
    body: params
  });
}
export async function getStudent(sele, params) {
  //试听课-预约人员
  return request(`${URL}${sele}/getStudent`, {
    method: "GET",
    body: params
  });
}
export async function addBeginGradeInfo(sele, params) {
  //试听课-开班
  return request(`${URL}${sele}/addBeginGradeInfo`, {
    method: "POST",
    body: params
  });
}
export async function getClassRoom(sele, params) {
  //根据条件查询教室
  return request(`${URL}${sele}/getClassRoom`, {
    method: "GET",
    body: params
  });
}
export async function sysDic(params) {
  //获取数据字段
  return request(`${URL}sysDic/getSysDicItemByCode`, {
    method: "GET",
    body: params
  });
}
export async function beginClazz(sele, params) {
  //开课接口(班级课表)
  return request(`${URL}${sele}/beginClazz`, {
    method: "POST",
    body: params
  });
}
export async function getSchudle(sele, params) {
  //开课接口(班级课表)
  return request(`${URL}${sele}/getSchudle`, {
    method: "GET",
    body: params
  });
}
export async function getTree(sele, params) {
  //课程类目数
  params.del = 0; //后端搞的事情。。。。
  return request(`${URL}${sele}/getTree`, {
    method: "GET",
    body: params
  });
}
export async function removeRule(sele, params) {
  return request(`${URL}${sele}/delete`, {
    method: "DELETE",
    body: params
  });
}
export async function exportout(sele, params) {
  return request(`${URL}${sele}/export?${stringify(params)}`);
}
// export async function exportout(sele,ids) {
//   return request(`${URL}${sele}/export`, {
//     method: 'POST',
//     body: stringify(ids),
//   });
// }

export async function addRule(sele, params) {
  return request(`${URL}${sele}/add`, {
    method: "POST",
    body: params
  });
}
export async function addRecord(sele, params) {
  return request(`${URL}${sele}/addRecord`, {
    method: "POST",
    body: params
  });
}
export async function addMimeticOrder(sele, params) {
  return request(`${URL}${sele}/addMimeticOrder`, {
    method: "POST",
    body: params
  });
}
export async function addSchedule(sele, params, other) {
  return request(`${URL}${sele}/addSchedule`, {
    method: "POST",
    body: params
  });
}
export async function oneFirstApproval(sele, params) {
  return request(`${URL}${sele}/oneFirstApproval`, {
    method: "PUT",
    body: params
  });
}
export async function oneLastApproval(sele, params) {
  return request(`${URL}${sele}/oneLastApproval`, {
    method: "PUT",
    body: params
  });
}
export async function twoFirstApproval(sele, params) {
  return request(`${URL}${sele}/twoFirstApproval`, {
    method: "PUT",
    body: params
  });
}
export async function twoLastApproval(sele, params) {
  return request(`${URL}${sele}/twoLastApproval`, {
    method: "PUT",
    body: params
  });
}
export async function updateRule(sele, params) {
  return request(`${URL}${sele}/update`, {
    method: "PUT",
    body: params
  });
}
export async function updateOrder(sele, params) {
  return request(`${URL}${sele}/updateOrder`, {
    method: "PUT",
    body: params
  });
}
export async function updateOperatorOrderRefund(sele, params) {
  return request(`${URL}${sele}/updateOperatorOrderRefund`, {
    method: "PUT",
    body: params
  });
}
export async function send(sele, params) {
  //短信发送
  return request(`${URL}${sele}/send`, {
    method: "POST",
    body: params
  });
}
export async function updateStatus(sele, params) {
  return request(`${URL}${sele}/updateStatus`, {
    method: "PUT",
    body: params
  });
}
export async function updatePassword(sele, params) {
  return request(`${URL}${sele}/updatePassword`, {
    method: "PUT",
    body: params
  });
}
export async function updstatus(sele, params) {
  //修改状态
  return request(`${URL}${sele}/updstatus`, {
    method: "PUT",
    body: params
  });
}
export async function putStore(sele, params) {
  //上下架
  return request(`${URL}${sele}/putStore`, {
    method: "PUT",
    body: params
  });
}
export async function back(sele, params) {
  //撤回
  return request(`${URL}${sele}/back/${params}`, {
    method: "PUT"
  });
}
export async function submit(sele, params) {
  //撤回
  return request(`${URL}${sele}/submit/${params}`, {
    method: "PUT"
  });
}
export async function status(sele, params) {
  //修改状态
  return request(`${URL}${sele}/status`, {
    method: "PUT",
    body: params
  });
}
export async function affirm(sele, params) {
  //修改状态
  return request(`${URL}${sele}/affirm`, {
    method: "PUT",
    body: params
  });
}
export async function catchExcePtion(sele, params) {
  //修改状态
  return request(`${URL}${sele}/catchExcePtion`, {
    method: "POST",
    body: params
  });
}
export async function fakeAccountLogin(params) {
  return request(`${URL}login`, {
    method: "POST",
    body: params
  });
}
export async function getRongToken(sele, params) {
  return request(`${URL}${sele}/register`, {
    method: "POST",
    body: params
  });
}

export async function fakeRegister(params) {
  return request("/api/register", {
    method: "POST",
    body: params
  });
}

export async function queryNotices() {
  return request("/api/notices");
}
export async function queryGet(sele, params, callback) {
  return request(`${URL}${sele}/query`, {
    method: "GET",
    body: params
  });
}
export async function checkPhone(sele, params, callback) {
  return request(`${URL}${sele}/checkPhone`, {
    method: "POST",
    body: params
  });
}
export async function getByPhone(sele, params, callback) {
  return request(`${URL}${sele}/getByPhone`, {
    method: "GET",
    body: params
  });
}
export async function add(sele, params) {
  return request(`${URL}${sele}/add`, {
    method: "POST",
    body: params
  });
}
export async function addOrgEmployee(sele, params, callback) {
  return request(`${URL}${sele}/addOrgEmployee`, {
    method: "POST",
    body: params
  });
}
export async function queryEmpOnSysOrg(sele, params, callback) {
  return request(`${URL}${sele}/queryEmpOnSysOrg`, {
    method: "GET",
    body: params
  });
}
export async function queryBySquareId(sele, params, callback) {
  return request(`${URL}${sele}/queryBySquareId`, {
    method: "GET",
    body: params
  });
}
export async function allReleaseAssociateRoles(sele, params, callback) {
  // 解除关联
  return request(`${URL}${sele}/allReleaseAssociateRoles`, {
    method: "POST",
    body: params
  });
}
export async function grantAllUserRole(sele, params, callback) {
  // 角色账号管理
  return request(`${URL}${sele}/grantAllUserRole`, {
    method: "POST",
    body: params
  });
}
export async function grantUserRole(sele, params, callback) {
  // 角色账号管理
  return request(`${URL}${sele}/grantUserRole`, {
    method: "POST",
    body: params
  });
}
export async function allocateRoleMenuResource(sele, params) {
  return request(`${URL}${sele}/allocateRoleMenuResource`, {
    method: "POST",
    body: params
  });
}
export async function queryClazzOrderByPage(sele, params) {
  return request(`${URL}${sele}/queryClazzOrderByPage`, {
    method: "GET",
    body: params
  });
}
export async function setAllUserDataPermission(sele, params, callback) {
  // 批量数据权限
  return request(`${URL}${sele}/setAllUserDataPermission`, {
    method: "POST",
    body: params
  });
}
export async function grantCoverAllUserRole(sele, params, callback) {
  // 批量数据权限
  return request(`${URL}${sele}/grantCoverAllUserRole`, {
    method: "POST",
    body: params
  });
}
export async function resetPassword(sele, params, callback) {
  // 批量数据权限
  return request(`${URL}${sele}/resetPassword`, {
    method: "PUT",
    body: params
  });
}
export async function dispark(sele, params, callback) {
  // 批量数据权限
  return request(`${URL}${sele}/dispark`, {
    method: "PUT",
    body: params
  });
}
export async function queryByIdsDataPermissions(sele, params, callback) {
  // 批量数据权限
  return request(`${URL}${sele}/queryByIdsDataPermissions`, {
    method: "GET",
    body: params
  });
}
export async function queryByModel(sele, params, callback) {
  return request(`${URL}${sele}/queryByModel`, {
    method: "GET",
    body: params
  });
}
export async function queryById(sele, params, callback) {
  return request(`${URL}${sele}/queryById`, {
    method: "GET",
    body: params
  });
}
export async function getClazzOrderDetails(sele, params, callback) {
  return request(`${URL}${sele}/getClazzOrderDetails`, {
    method: "GET",
    body: params
  });
}
export async function getById(sele, params) {
  return request(`${URL}${sele}/getById`, {
    method: "GET",
    body: params
  });
}
export async function exportd(sele, params) {
  //导出
  return request(`${URL}${sele}/export`, {
    method: "POST",
    body: params
  });
}

export async function exportFun(sele, params = {}) {
  //下载
  return request(`${URL}${sele}`, {
    method: "POST",
    body: params,
    isExport: true
  });
}
export async function putNull(sele, params='', callback) {
  // 批量数据权限
  let newUrl=params? `${URL}${sele}/${params}` : `${URL}${sele}`
  return request(newUrl, {
    method: "PUT",
    body: {}
  });
}

//新11月30
export async function getData(sele, payload,suffix='',method) {
  return request(`${URL}${sele}${suffix?'/'+suffix:''}`, {
    method,
    body: payload
  });
}
export async function postData(sele, payload,suffix='',method) {
  return request(`${URL}${sele}${suffix?'/'+suffix:''}`, {
    method,
    body: payload
  });
}
export async function putData(sele, payload,suffix='',method) {
  return request(`${URL}${sele}${suffix?'/'+suffix:''}`, {
    method,
    body: payload
  });
}
export async function deleteData(sele, payload,suffix='',method) {
  return request(`${URL}${sele}${suffix?'/'+suffix:''}`, {
    method,
    body: payload
  });
}
//new
const arr = {
  status,
  query,
  list,
  queryById,
  allReal,
  exportd,
  queryClazzOrderByPage,
  addBeginGradeInfo,
  getClazzOrderDetails,
  queryClassList,
  getStudentByGId,
  getClassRoom,
  beginClazz,
  getSchudle,
  getTree,
  removeRule,
  exportout,
  addRule,
  addSchedule,
  updstatus,
  putStore,
  updatePassword,
  fakeAccountLogin,
  getRongToken,
  updateRule,
  updateOperatorOrderRefund,
  send,
  queryGet,
  queryEmpOnSysOrg,
  allReleaseAssociateRoles,
  grantAllUserRole,
  grantUserRole,
  allocateRoleMenuResource,
  grantCoverAllUserRole,
  resetPassword,
  queryByIdsDataPermissions,
  queryBySquareId,
  affirm,
  getById,
  getApprovalDate,
  closeOffBalance,
  changeTrialStatus,
};
export function allReal(sele, params, real) {
  //新版查询
  return arr[real](sele, params);
}
