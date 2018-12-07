/*
 * Created by yangj on 17/8/31.
 * 封装即时调用的函数
 */

import store from "../index";
import { Modal} from "antd";
const confirm = Modal.confirm;
import { stringify } from "qs";
import { URL } from "../services/api";
import { getAuthority} from '../utils/authority';
import md5 from 'md5';
function md5Encrypt(odlText = '') {
  if (odlText == '') {
    return '';
  }
  let salt = '1k2b3c9d7w';
  let str = ""+salt.charAt(0)+salt.charAt(2)+salt.charAt(7) + odlText +salt.charAt(5) + salt.charAt(4);
  return md5(str);
}
function Permissions(text = '') {
  if(text&&getAuthority('permissions')){
    return getAuthority('permissions').includes(text);
  }else{
    return false;
  }
}
window.Permissions=Permissions;
function initWeek(week) {
  //将'2018-04-16'或者'2018/04/16'转为毫秒值
  week = week * 1;
  switch (week) {
    case 1:
      return "一";
      break;
    case 2:
      return "二";
      break;
    case 3:
      return "三";
      break;
    case 4:
      return "四";
      break;
    case 5:
      return "五";
      break;
    case 6:
      return "六";
      break;
    case 7:
      return "日";
      break;
    default:
      return "";
  }
}
function ToMsecs(str) {
  //将'2018-04-16'或者'2018/04/16'转为毫秒值
  if (str) {
    let thedate = new Date(str + "").getTime();
    if (new Date(str + "").getHours() == 8) {
      return thedate - 8 * 3600 * 1000;
    } else {
      return thedate;
    }
  } else {
    return null;
  }
}
function Download(link, params, other = null) {
  //下载
  // console.log(decodeURI(stringify(params)));
  window.open(`${URL}${link}?${stringify(params)}`);
}
/*计算年龄 (0-3岁，年龄计算到月，如：1岁2个月；
3-6岁，年龄计算到半岁，如：3岁半；
6岁以上，年龄计算到整岁，如：6岁)*/
// function toNowMonths(date){
//   let oldDate=new Date(date).getTime();
//   let nowDate=new Date().getTime();
//   let difference=(nowDate-oldDate);

// }


function InitAge(months) {
  if (months == 12) return "1岁";
  if (months == 24) return "2岁";
  if (months < 36) {
    //小于三岁
    let years = Math.floor(months / 12);
    let month = months % 12;
    if (years == 0) return `${month}个月`;
    return `${years}岁${month}个月`;
  }
  let years = Math.floor(months / 12);
  if (months < 72) {
    //小于六岁
    let month = months % 12;
    let isBansui = month >= 6 ? true : false;
    return isBansui ? `${years}岁半` : `${years}岁`;
  }
  return years + "岁";
}
function formart(tmp, fmt = "yyyy-MM-dd hh:mm:ss") {
  if (tmp) {
    return new Date(tmp).Format(fmt);
  } else {
    return "-";
  }
}
Date.prototype.Format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

//status //获取当前审核状态
  function checkApprovalStatus(status, isDetail = false) {
    if(status){
      const strArr = status.split('_');
      const rStatus = strArr.pop();
      const typeStr = strArr[strArr.length - 1];
      const isNext = typeStr === 'G' || typeStr === 'OPENCLAZZ' ? true : false
      switch(rStatus)
      {
          case 'WAIT':
          return isDetail ? null : {name: '初审', type : isNext ? 'addTwoFirstApproval' : 'addOneFirstApproval', isNext: isNext}
          break;
          case 'PUT':
          return isDetail ? '初审审核' : {name: '终审', type : isNext ? 'addTwoLastApproval' : 'addOneLastApproval', isNext: isNext, isSuccess: true}
          break;
          case 'OK':
          return isDetail ? '终审审核' : { isNext : isNext, isSuccess: true }
          break;
          case 'YES':
          return isDetail ? '终审审核' : { isNext : isNext, isSuccess: true }
          break;
          case 'NO':
          return isDetail ? '终审审核' : { isNext : isNext, isSuccess: false }
          break;
          case 'BACK':
          return isDetail ? null : { isNext : isNext, isSuccess: false }
          break;
          default:
          return isDetail ? '' : { name: '暂无' }
          break;
    }
  }else{
    return isDetail ? '' : { name: '暂无' }
  }
}
const PatternNickname = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/; //匹配昵称
const Patternphone = /^1[3|4|5|7|8][0-9]\d{8}$/; //匹配手机号
const Decimals0 = /^[1-9]\d{0,3}$/; //请填写不大于4位的正数
const Decimals1 = /^(0|[1-9]\d{0,4})(\.\d{0,1})?$/; //匹配1位小数
const Decimals2 = /^(0|[1-9]\d{0,4})(\.\d{0,2})?$/; //匹配2位小数
// const Discount = /^(10|\d)(\.\d{0,1})?$/; //不能大于10且最多允许一位小数
const Discount = /^(0|[1-9])(\.\d{0,1})?$/; //请填写整数且最多只能一位小数,折扣相关可参考routes/Market/CouponsModal.js
const invalid = {
  mobileReg: /^1[3|4|5|7|8][0-9]\d{8}$/, //验证手机号正则表达式
  mailReg: /^([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|/_|/.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/, //验证邮箱正则表达式
  numReg: /^[0-9]*$/,
  cardReg: /^[a-zA-Z0-9]+$/,
  moneyReg: /^(0(?:[.](?:[1-9]\d?|0[1-9]))|[1-9]\d{0,6}(?:[.]\d{0,2}|$)|0([.]0{0,2})?)$/, //7位数字加2位小数
  codeReg: /^[0-9]\d{5}$/, //验证码校验，6位数字
  pwdReg: /^[0-9A-Za-z]{6,16}$/, //验证密码，6-16位
  routine: /^[\u4E00-\u9FA5A-Za-z0-9_+-]+$/, //除特殊字符
  pathReg: /\/([a-zA-Z]+)+/g //路由匹配(/user/index)
}; //请填写不大于4位的正数
//年龄计算    参数格式: 2018-09-04
function jsGetAge(strBirthday) {
  if(!strBirthday){
    return "-";
  }
  let strBirthdayArr = strBirthday.split("-");
  let birthYear = strBirthdayArr[0];
  let birthMonth = strBirthdayArr[1];
  let birthDay = strBirthdayArr[2];
  let d;

  d = new Date();
  let nowYear = d.getFullYear();
  let nowMonth = d.getMonth() + 1;
  let nowDay = d.getDate();
  if (!strBirthday || nowYear < birthYear) {
    return "-";
  }
  let ageDiff = (nowYear - birthYear) * 1; //年之差
  let monthDiff = (nowMonth - birthMonth) * 1; //月之差
  let dayDiff = (nowDay - birthDay) * 1; //日之差
  if (nowYear == birthYear) {
    return nowMonth - birthMonth + "个月"; //同年 则为0岁
  } else if (nowYear - birthYear == 1) {
    if (monthDiff < 0) {
      return monthDiff + 12 + "个月"; //同年 则为0岁
    } else if (monthDiff == 0) {
      return "1岁";
    } else {
      return "1岁" + monthDiff + "个月"; //同年 则为0岁
    }
  } else if (nowYear - birthYear < 4) {
    //小于4岁的
    if (monthDiff < 0) {
      return ageDiff - 1 + "岁" + (monthDiff + 12) + "个月"; //同年 则为0岁
    } else if (monthDiff == 0) {
      return ageDiff + "岁";
    } else {
      return ageDiff + "岁" + monthDiff + "个月"; //同年 则为0岁
    }
  } else {
    if (monthDiff < 0) {
      return ageDiff - 1 + "岁";
    } else {
      return ageDiff + "岁";
    }
  }
}
function AuthLogout(title='是否重新登录?',content='该帐号的权限已修改，重新登录后生效') {//重登录
  const { dispatch } = store;
  confirm({
    title,
    content,
    onOk() {
      dispatch({
        type: "login/logout"
      });
    },
    onCancel() {}
  });
}
function getUrlString (name){
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let hash=window.location.hash;
  if (hash.split('?').length<2) {//若没有参数
    return '';
  }
  let num= (hash.split('?')[0].length)+1;//无用个数
  let r = hash.substr(num).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return "";
}
export {
  initWeek,
  ToMsecs,
  formart,
  Nickname,
  PatternNickname,
  Patternphone,
  Download,
  Decimals0,
  Decimals1,
  Decimals2,
  Discount,
  InitAge,
  checkApprovalStatus,
  invalid,
  jsGetAge,
  AuthLogout,
  md5Encrypt,
  getUrlString,
};
//     fetch(url).then(res => res.blob().then(blob => {
//         var a = document.createElement('a');
//         var url = window.URL.createObjectURL(blob);
//         var filename = res.headers.get('Content-Disposition');
//         a.href = url;
//         a.download = filename;
//         a.click();
//         window.URL.revokeObjectURL(url);
//         alert('下载完成');
//       }));
