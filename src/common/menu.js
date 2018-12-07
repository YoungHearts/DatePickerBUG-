import { isUrl } from "../utils/utils";
// import { setAuthority } from "../utils/authority";
// import { getAuthority } from "../utils/authority";
// import {  Icon } from 'antd';
// import BizIcon from '../iconfont/iconfont';

// const menuData = [
//   {
//     name: "广场配置",
//     icon: "setting",
//     path: "squareconfig",
//     // authority: 'admin',权限
//     children: [
//       {
//         name: "基础信息管理",
//         path: "square"
//       },
//       {
//         name: "员工管理",
//         path: "employee"
//       },
//       {
//         name: "账号管理",
//         path: "account"
//       },
//       {
//         name: "角色管理",
//         path: "role"
//       },
//       {
//         name: "日志管理",
//         path: "log"
//       }
//     ]
//   },
//   {
//     name: "教务管理",
//     icon: "solution",//schedule
//     path: "educational",
//     children: [
//       {
//         name: "机构管理",
//         path: "org"
//       },
//       {
//         name: "教师管理",
//         path: "teacher"
//       },
//       {
//         name: "科目管理",
//         path: "subject"
//       },
//       {
//         name: "教室管理",
//         path: "classroom"
//       },
//       {
//         name: "课程管理",
//         path: "course"
//       },
//       {
//         name: "班级管理",
//         path: "grade"
//       },
//       {
//         name: "学籍管理",
//         path: "schoolcensus"
//       },
//       {
//         name: "请假管理",
//         path: "apply"
//       }
//     ]
//   },
//   {
//     name: "营销管理",
//     icon: "line-chart",
//     spin: true,
//     path: "market",
//     children: [
//       {
//         name: "课程营销",
//         path: "classmarket"
//       },
//       {
//         name: "会员卡营销",
//         path: "clubcrad"
//       },
//       {
//         name: "已售会员卡",
//         path: "clubcradlist"
//       }
//     ]
//   },
//   {
//     name: "订单管理",
//     icon: "profile",
//     path: "order",
//     children: [
//       {
//         name: "课程订单",
//         path: "courseorder"
//       },
//       {
//         name: "会员卡订单",
//         path: "clubcradorder"
//       }
//     ]
//   },
//   {
//     name: "首页管理",
//     path: "homePage",
//     icon: "home",
//     children: [
//       {
//         name: "优秀学员",
//         path: "goodStudent"
//       },
//       {
//         name: "优秀教师",
//         path: "goodTeacher"
//       },
//       {
//         name: "广场简介",
//         path: "squareRecomm"
//       },
//     ]
//   }
// ];

function formatter(data=[], parentPath = "/", parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority
      );
    }
    return result;
  });
}
// const userData=getAuthority('userData')||{};
// export const getMenuData = () => formatter(userData.result||[]);
export const getMenuData = (menuData) => formatter(menuData||[]);
// export const getMenuData = () => formatter(menuData);
