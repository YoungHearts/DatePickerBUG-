import fetch from "dva/fetch";
import { notification, message } from "antd";
import { stringify } from "qs";
import { routerRedux } from "dva/router";
import store from "../index";
const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
  10003: "权限验证失败，请重登录!",
};
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}
function forMessage(url='',response) {
  if (response) {
    if (!response.status) {
      //只做错误处理
      if (response.code == "10003") {
        //token无效
        message.error("权限验证失败，请重登录!");
        const { dispatch } = store;
        dispatch({
          type: "login/logout"
        });
        return;
      } else {
        let nowUrl = url.substring(url.length - 5);
        if(nowUrl!='login'){
          message.error(response.msg?(response.msg.substring(0,60)): "抱歉，服务器开小差啦！");
        }
      }
    }
  }
  return response;
}
//首字母大写
function firstUpperCase(str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1);
}
//重组数据
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function request(url, options = {}) {
  let mills = new Date().getTime();
  // console.log(options.body);
  // const defaultOptions = {
  //   credentials: 'include',
  // };
  const newOptions = Object.assign({},options);
  
  newOptions.headers = {
    Accept: "application/json",
    mills
  };
  if (!(newOptions.body instanceof FormData)) {
    if (newOptions.body&&(newOptions.body.length || newOptions.body.isJson123)) {
      //isJson123是否按json上传给后端，默认false
      newOptions.headers = {
        // "Content-Type": "application/json;charset=UTF-8",
        "Content-Type": "application/json",
        ...newOptions.headers
      };
    } else {
      newOptions.headers = {
        // "Content-Type": "application/json;charset=UTF-8",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        ...newOptions.headers
      };
    }
    if(newOptions.body){
      if (newOptions.method === "POST" || newOptions.method === "PUT") {
        if (newOptions.body.length || newOptions.body.isJson123) {
          //isJson123是否按json上传给后端，默认false
          newOptions.body.isJson123&&delete newOptions.body.isJson123;
          newOptions.body = JSON.stringify(newOptions.body);
        } else {
          newOptions.body = stringify(newOptions.body);
        }
      } else {
        url = newOptions.body ? `${url}?${stringify(newOptions.body)}` : url;
        newOptions.body && delete newOptions.body;
      }
    }
  } else {
    newOptions.header = {
      "Content-Type": "multipart/form-data",
      // 'Access-Control-Allow-Methods': 'GET, POST',
      // 'Access-Control-Allow-Credentials': 'true',
      // 'Access-Control-Allow-Origin':'*'
      ...newOptions.headers
    };
  }
  if (newOptions.isExport) {//若带了isExport就进入下载
    delete newOptions.isExport;
    fetch(url, newOptions).then(res =>
      res.blob().then(blob => {
        var a = document.createElement("a");
        var url = window.URL.createObjectURL(blob);
        var filename = res.headers.get("Content-Disposition");
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      })
    )
  } else {
    return fetch(url, newOptions)
      .then(checkStatus) //这里处理第一层原始code等错误
      .then(forMessage.bind(this,url)) //这里处理第二层后端修改的code错误)
      .catch(e => {
        const { dispatch } = store;
        const status = e.name;
        if (status === 401) {
          dispatch({
            type: "login/logout"
          });
          return;
        }
        if (status === 403) {
          dispatch(routerRedux.push("/exception/403"));
          return;
        }
        if (status <= 504 && status >= 500) {
          dispatch(routerRedux.push("/exception/500"));
          return;
        }
        if (status >= 404 && status < 422) {
          dispatch(routerRedux.push("/exception/404"));
        } else {
          notification.error({
            message: "服务器出错"
          });
        }
      });
  }
}

export { request, codeMessage,};
