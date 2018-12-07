/*
 * Created by yangj on 17/8/31.
 * 封装函数
 */

const GradeArea = [
    { value: 1, name: "小于10平米" },
    { value: 2, name: "11-20平米" },
    { value: 3, name: "21-30平米" },
    { value: 4, name: "31-40平米" },
    { value: 5, name: "41-50平米" },
    { value: 6, name: "51-60平米" },
    { value: 7, name: "61-70平米" },
    { value: 8, name: "71-90平米" },
    { value: 9, name: "91-100平米" },
    { value: 10, name: "100平米以上" }
  ];
const GradeCapacity = [
    { value: 1, name: "1-10人" },
    { value: 2, name: "11-20人" },
    { value: 3, name: "21-30人" },
    { value: 4, name: "31-40人" },
    { value: 5, name: "41-50人" },
    { value: 6, name: "51-60人" },
    { value: 7, name: "61-70人" },
    { value: 8, name: "71-90人" },
    { value: 9, name: "91-100人" },
    { value: 10, name: "100人以上" }
  ];
const ResetTime = [//重复频率
    { value: 1, name: "单次(不重复)" },
    { value: 2, name: "每日" },
    { value: 3, name: "每周" },
    { value: 4, name: "每两周" },
    { value: 5, name: "每月" },
  ];
  const PayStatus = [//课程/会员卡订单状态、 0:待付款、1:待评价、2:已完成、3、已取消
    { value: 0, name: "待付款" },
    { value: 1, name: "待评价" },
    { value: 2, name: "已完成" },
    { value: 3, name: "已取消" },
    { value: 3, name: "退款中" },
    { value: 3, name: "退款完成" },
  ];
  const RefundType = [//退款方式
    { value: 1, name: "现金退款" },
    { value: 2, name: "微信转账" },
    { value: 3, name: "支付宝转账" },
    { value: 4, name: "银行卡转账" },
    { value: 5, name: "其他" },
  ];
  const Status = [//已售会员卡列表
    { value: 1, name: "有效" ,icon:'success'},
    { value: 2, name: "过期" ,icon:'error'},
    { value: 3, name: "未生效" ,icon:'warning'},
  ];
  const Validate = [
    { value: 1, name: "3个月" },
    { value: 2, name: "6个月" },
    { value: 3, name: "9个月" },
    { value: 4, name: "1年" },
    { value: 5, name: "不限" },
  ];
  const Uselimit = [//会员卡适合的课程
    { value: 0, name: "全部课程" }
  ];
  const Source = [//会员卡的来源等、
    { value: 0, name: "app" },
    { value: 1, name: "小程序" },
    { value: 2, name: "wap" },
  ];
  const Sex = [//
    { value: 0, name: "男" },
    { value: 1, name: "女" },
  ];
  const Type = [//营销管理，优惠类型
    { value: 1, name: "限时折扣" },
    { value: 2, name: "限时特价" },
  ];
  const Applystatus = [//学生列表的状态
    { value: 0, name: "正常" ,icon:'success'},
    { value: 1, name: "请假" ,icon:'default'},
    { value: 2, name: "缺课" ,icon:'error'},
  ];
  const Payment = [
    { value: 0, name: "支付宝app"},
    { value: 1, name: "微信app" },
    { value: 2, name: "小程序" },
    { value: 3, name: "支付宝wap" },
    { value: 4, name: "微信wap" },
    { value: 5, name: "微信公众号" },
  ];
  const Markettype = [//营销活动
    { value: 0, name: "抢课"},
    { value: 1, name: "常规活动" },
    { value: 2, name: "1元课程" },
    { value: 3, name: "99元课程" },
  ];
  const Isindex = [//营销活动-是否首页展示
    { value: 0, name: "是",icon:'success'},
    { value: 1, name: "否" ,icon:'default'},
  ];
  const SendMode = [//发送方式：0:手机短信，1:系统消息，2:手机短信+系统消息
    { value: 0, name: "手机短信"},
    { value: 1, name: "APP消息推送"},
    { value: 2, name: "手机短信+APP消息推送"},
  ];
  const PhoneType = [//发送号码：1注册号码，2学生手机号，3家长号码
    { label: '注册号码', value: '1' },
    { label: '学生手机号', value: '2' },
    { label: '家长号码', value: '3' },
  ];
  const MsgType = [//消息类型：0营销短信，1普通短信(11/5邹泽让改)
    { value: 0, name: "营销短信"},
    { value: 1, name: "普通短信"},
  ];
  const ClientType = [//我定的返给后端
    { value: 0, name: "成交客户"},
    { value: 1, name: "未成交客户"},
  ];
  const MessageStatus = [//上课提醒状态：0,表示启用，1表示禁用
    { value: 0, name: "启用" ,icon:'success'},
    { value: 1, name: "禁用" ,icon:'default'},
  ];
  const IsPut = [//状态 0 上架 1下架
    { value: true, name: "已上架" ,icon:'success'},
    { value: false, name: "未上架" ,icon:'default'},
  ];
  const IsSms = [//营销短信是否发送
    { value: 0, name: "未发送" ,icon:'default'},
    { value: 1, name: "已发送",icon:'success'},
  ];
  const SendStatus = [//营销短信是否发送成功
    { value: 0, name: "成功",icon:'success'},
    { value: 1, name: "失败" ,icon:'default'},
  ];
  const ClassState = [
    { value: 0, name: "招生中" },
    { value: 1, name: "满员已停招" },
    { value: 2, name: "开办已停招" },
    { value: 3, name: "未上架" },
    { value: 4, name: "未开课" }
  ]

  const Category = [//优惠券类别
    { value: 0, name: "普通券"},
    { value: 1, name: "活动券" },
    { value: 2, name: "任务券" },
  ];

  const ChooseTask = [//选择任务（0、首次登录，1、首次分享，2、首次购买会员卡，3、首次添加学生信息，4、首次购买课程，5、首次完善个人信息）
    { value: 0, name: "首次登录"},
    { value: 1, name: "首次分享" },
    { value: 2, name: "首次购买会员卡" },
    { value: 3, name: "首次添加学生信息" },
    { value: 4, name: "首次购买课程" },
    { value: 5, name: "首次完善个人信息" },
  ];
  const ActivityType = [//活动类型(0:限时抢购、1:秒杀、2:满减)
    { value: 0, name: "限时抢购"},
    // { value: 1, name: "秒杀" },
    // { value: 2, name: "满减" },
  ];

  const ActivityWay = [//活动方式(0、线上，1、线下，2、线上+线下)
    { value: 0, name: "线上"},
    { value: 1, name: "线下" },
    { value: 2, name: "线上+线下" },
  ];
  const ActivityTime = [//0、周一，1、周二，2、周三，3、周四，4、周五，5、周六，6、周日
    { value: 0, name: "每日"},
    { value: 1, name: "周一" },
    { value: 2, name: "周二" },
    { value: 3, name: "周三" },
    { value: 4, name: "周四" },
    { value: 5, name: "周五" },
    { value: 6, name: "周六" },
    { value: 7, name: "周日" },
  ];
  const ActivityStatus = [//活动状态(0:未开始 1:进行中 2:已结束)
    { value: 0, name: "未开始",icon:'warning'},
    { value: 1, name: "进行中" ,icon:'processing'},
    { value: 2, name: "已结束" ,icon:'default'},
    { value: 3, name: "已终止" ,icon:'default'},
  ];
export { GradeArea,GradeCapacity,PayStatus,ResetTime,
  Validate,Uselimit,Status,Source,Sex,Type,Applystatus,
  Payment,Markettype,Isindex,ClientType,MsgType,
  MessageStatus,IsPut,PhoneType,IsSms,SendStatus,
  ClassState,Category,ChooseTask,ActivityType,
  ActivityWay,ActivityTime,ActivityStatus,SendMode,
  RefundType};
