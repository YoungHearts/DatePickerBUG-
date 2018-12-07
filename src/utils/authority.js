// use localStorage to store the authority info, which might be sent from server in actual project.
import { message } from "antd";
export function getAuthority(key, exp = new Date().getTime()) {
  var data = localStorage.getItem(key);
  if (data) {
    var dataObj = JSON.parse(data);
    if (dataObj.time < exp) {
      // message.warning('登录过期');
      localStorage.removeItem(key);
      return undefined;
    } else {
      var dataObjDatatoJson = dataObj.data;
      return dataObjDatatoJson;
    }
  } else {
    return undefined;
  }
}

export function setAuthority(key, value, time = 7) {
  time = 1000 * 60 * 60 * 24 * time;
  var curTime = new Date().getTime() + time;
  return localStorage.setItem(
    key,
    JSON.stringify({ data: value, time: curTime })
  );
}
export function removeAuthority(key) {
  return localStorage.removeItem(key);
}
