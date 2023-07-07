declare namespace API {

  /**
  * 编辑方案中的分佣比例入参
  */
  type CommissionPlanRatioEditRequest = {
    /**
    * 方案ID
    */
    planId: number;
    /**
    * 角色ID
    */
    roleId: number;
    /**
    * 分佣形式:0-分润，1-返佣
    */
    commissionType?: number;
    /**
    * 分佣比例,忽略百分号,数字放大了1000倍,例:1.5%,此处为1500
    */
    commissionRatio: number;
  };

  /**
  * 分佣方案详情返回参数
  */
  type CommissionPlanDetailResponse = {
    /**
    * 方案编号
    */
    planCode?: string;
    /**
    * 方案名称
    */
    planName?: string;
    /**
    * 方案开始日期
    */
    startTime?: string;
    /**
    * 修改日期
    */
    updateTime?: string;
    /**
    * 操作人
    */
    operatorName?: string;
    /**
    * 分佣角色信息列表
    */
    roleInfos?: CommissionRoleInfo[];
  };

  /**
  * 分佣方案角色信息
  */
  type CommissionRoleInfo = {
    /**
    * 角色ID
    */
    roleId?: number;
    /**
    * 分佣角色名
    */
    roleName?: string;
    /**
    * 分佣形式:0-分润，1-返佣
    */
    commissionType?: number;
    /**
    * 分佣形式描述
    */
    commissionTypeDesc?: string;
    /**
    * 分佣比例,忽略百分号,数字放大了1000倍,例:1.5%,此处为1500
    */
    commissionRatio?: number;
  };

  /**
  * 结果
  */
  type ResultCommissionPlanDetailResponse = {
    /**
    * 时间戳
    */
    requestId?: string;
    /**
    * 应答编码
    */
    code?: string;
    /**
    * 应答消息
    */
    message?: string;
    /**
    * 
    */
    data?: CommissionPlanDetailResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 编辑方案入参
  */
  type CommissionPlanEditRequest = {
    /**
    * 方案id
    */
    planId: number;
    /**
    * 方案名称
    */
    planName?: string;
    /**
    * 方案状态：0-停用，1-启用
    */
    planStatus?: number;
  };

  /**
  * 分佣方案列表返回参数
  */
  type CommissionPlanListResponse = {
    /**
    * 方案ID
    */
    planId?: number;
    /**
    * 方案编号
    */
    planCode?: string;
    /**
    * 方案名称
    */
    planName?: string;
    /**
    * 修改日期
    */
    updateTime?: string;
    /**
    * 状态值:0-停用,1-启用
    */
    planStatus?: number;
    /**
    * 状态值描述
    */
    planStatusDesc?: string;
  };

  /**
  * 结果
  */
  type ResultCommissionPlanListResponse = {
    /**
    * 时间戳
    */
    requestId?: string;
    /**
    * 应答编码
    */
    code?: string;
    /**
    * 应答消息
    */
    message?: string;
    /**
    * 
    */
    data?: CommissionPlanListResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 角色列表入参
  */
  type CommissionRoleListRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 角色名
    */
    roleName?: string;
  };

  /**
  * 分佣角色列表出参
  */
  type CommissionRoleListResponse = {
    /**
    * 角色id
    */
    roleId?: number;
    /**
    * 角色名称
    */
    roleName?: string;
  };

  /**
  * 数据
  */
  type PageModelCommissionRoleListResponse = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 
    */
    total?: number;
    /**
    * 
    */
    rows?: CommissionRoleListResponse[];
  };

  /**
  * 结果
  */
  type ResultPageModelCommissionRoleListResponse = {
    /**
    * 时间戳
    */
    requestId?: string;
    /**
    * 应答编码
    */
    code?: string;
    /**
    * 应答消息
    */
    message?: string;
    /**
    * 
    */
    data?: PageModelCommissionRoleListResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 分佣方案列表请求参数
  */
  type CommissionPlanPageRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 方案名称
    */
    planName?: string;
    /**
    * 方案编号
    */
    planCode?: string;
    /**
    * 状态值:0-停用,1-启用
    */
    planStatus?: number;
  };

  /**
  * 数据
  */
  type PageModelCommissionPlanListResponse = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 
    */
    total?: number;
    /**
    * 
    */
    rows?: CommissionPlanListResponse[];
  };

  /**
  * 结果
  */
  type ResultPageModelCommissionPlanListResponse = {
    /**
    * 时间戳
    */
    requestId?: string;
    /**
    * 应答编码
    */
    code?: string;
    /**
    * 应答消息
    */
    message?: string;
    /**
    * 
    */
    data?: PageModelCommissionPlanListResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 订单列表查询
  */
  type PortalOrderPageRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 订单编号
    */
    subOrderNo?: string;
    /**
    * 车辆编号
    */
    itemCode?: string;
    /**
    * 车辆标题
    */
    itemName?: string;
    /**
    * VIN码
    */
    vinCode?: string;
    /**
    * 客户姓名
    */
    userName?: string;
    /**
    * 服务顾问
    */
    advisorName?: string;
    /**
    * 订单类型 100:车辆订单,101:衍生品订单
    */
    txType: number;
    /**
    * 预定时间排序 默认不选传空字符串，asc:升序,desc:倒序
    */
    scheduleOrderBy?: string;
    /**
    * 创建时间排序 默认不选传空字符串，asc:升序,desc:倒序
    */
    createOrderBy?: string;
    /**
    * 状态 100:代支付订金，200:待支付全款，300:取消预定，400:待出场，500:已出场，600:交易完成
    */
    bigStatus?: number;
  };

  /**
  * 数据
  */
  type PageModelPortalOrderListResponse = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 
    */
    total?: number;
    /**
    * 
    */
    rows?: PortalOrderListResponse[];
  };

  /**
  * 订单列表响应
  */
  type PortalOrderListResponse = {
    /**
    * 订单编号
    */
    subOrderNo?: string;
    /**
    * 车辆名称
    */
    itemName?: string;
    /**
    * 商品图片
    */
    itemImg?: string;
    /**
    * vin码
    */
    vinCode?: string;
    /**
    * 首次上牌时间
    */
    firstLicensingDate?: string;
    /**
    * 表显里程，单位：万公里
    */
    displayMileage?: string;
    /**
    * 订金(元)
    */
    depositAmountDesc?: string;
    /**
    * 成交价(元)
    */
    totalAmount?: string;
    /**
    * 客户名称
    */
    userName?: string;
    /**
    * 服务顾问
    */
    advisorName?: string;
    /**
    * 预定时间
    */
    scheduleTime?: string;
    /**
    * 创建时间
    */
    createTime?: string;
    /**
    * 金融方案
    */
    financeScheme?: string;
    /**
    * 订单类型
    */
    busTypeDesc?: string;
    /**
    * 服务商
    */
    sellerName?: string;
    /**
    * 车辆编号
    */
    itemCode?: string;
    /**
    * 备注
    */
    remark?: string;
    /**
    * 订单提交人
    */
    orderCreateUser?: string;
  };

  /**
  * 结果
  */
  type ResultPageModelPortalOrderListResponse = {
    /**
    * 时间戳
    */
    requestId?: string;
    /**
    * 应答编码
    */
    code?: string;
    /**
    * 应答消息
    */
    message?: string;
    /**
    * 
    */
    data?: PageModelPortalOrderListResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 订单导出
  */
  type ExportOrderRequest = {
    /**
    * 订单类型 100:车辆订单,101:衍生品订单
    */
    txType: number;
    /**
    * 所选订单列表
    */
    subOrderNoList: string[];
  };

  /**
  * 订单详情
  */
  type OrderDetailResponse = {
    /**
    * 订单编号
    */
    subOrderNo?: string;
    /**
    * 车辆名称
    */
    itemName?: string;
    /**
    * 车辆编号
    */
    itemCode?: string;
    /**
    * 商品图片
    */
    itemImg?: string;
    /**
    * vin码
    */
    vinCode?: string;
    /**
    * 首次上牌时间
    */
    firstLicensingDate?: string;
    /**
    * 表显里程，单位：万公里
    */
    displayMileage?: string;
    /**
    * 订单状态：100:代支付订金，200:待支付全款，300:取消预定，400:待出场，500:已出场，600:交易完成
    */
    bigStatus?: number;
    /**
    * 买家客户信息--买家客户姓名
    */
    userName?: string;
    /**
    * 买家客户信息--手机号
    */
    userPhoneNum?: string;
    /**
    * 买家客户信息--客户来源 0:未知，1:直接到店，2:直播导流,3:老客介绍,4:广告活动引流
    */
    userSource?: number;
    /**
    * 买家客户信息--市名称
    */
    cityName?: string;
    /**
    * 买家客户信息--身份证号
    */
    identityNum?: string;
    /**
    * 买家客户信息--付款人
    */
    drawerName?: string;
    /**
    * 买家客户信息--银行卡号
    */
    bandCardNum?: string;
    /**
    * 买家客户信息--开户行
    */
    openBank?: string;
    /**
    * 订单备注
    */
    remark?: string;
    /**
    * 买家客户信息--收款凭证
    */
    paymentCertificate?: string;
    /**
    * 成交价
    */
    totalAmountDesc?: string;
    /**
    * 订金
    */
    depositAmountDesc?: string;
    /**
    * 付款方式 1:全款,2:按揭
    */
    paymentMethod?: number;
    /**
    * 支付方式:BALANCE-余额支付,WECHATPAY_MINIPROGRAM-微信小程序支付,SCAN_WEIXIN-微信扫码支付,SCAN_ALIPAY-支付宝扫码支付,ORDER_VSPPAY-POS,H5_CASHIER_VSP-收银宝H5收银台
    */
    paymentType?: string;
    /**
    * 金融方案
    */
    financeScheme?: string;
    /**
    * 过户方式  1:本地过户,2:异地过户
    */
    transferType?: number;
    /**
    * 预定时间
    */
    scheduleTime?: string;
    /**
    * 服务顾问名称
    */
    advisorName?: string;
    /**
    * 收款时间
    */
    payTime?: string;
    /**
    * 收齐全款时间
    */
    fullPayTime?: string;
    /**
    * 已收金额(元)
    */
    receiveAmountDesc?: string;
    /**
    * 创建时间
    */
    createTime?: string;
    /**
    * 取消原因
    */
    cancelReason?: string;
    /**
    * 取消时间
    */
    cancelTime?: string;
    /**
    * 回库时间
    */
    returnDate?: string;
    /**
    * 电子合同状态 1:未签署，2:已签署
    */
    electronicContractStatus?: number;
    /**
    * 电子合同PDF
    */
    electronicContractUrl?: string;
    /**
    * 订单来源 1:服务顾问端 2:C端小程序
    */
    orderSource?: number;
    /**
    * 收款人
    */
    receiveFinanceName?: string;
    /**
    * 订单提交人
    */
    orderCreateUser?: string;
    /**
    * 商家/服务商
    */
    sellerName?: string;
    /**
    * 商家/商家负责人
    */
    commander?: string;
    /**
    * 商家/服务商联系方式
    */
    sellerPhoneNum?: string;
    /**
    * 订单状态返回
    */
    orderStatusListResponse?: OrderStatusListResponse[];
  };

  /**
  * 订单状态列表响应
  */
  type OrderStatusListResponse = {
    /**
    * 订单状态：100:代支付订金，200:待支付全款，300:取消预定，400:待出场，500:已出场，600:交易完成
    */
    bigStatus?: number;
    /**
    * 时间
    */
    dateTime?: string;
    /**
    * 是否已经处理过 处理过:true
    */
    hasReach?: boolean;
  };

  /**
  * 结果
  */
  type ResultOrderDetailResponse = {
    /**
    * 时间戳
    */
    requestId?: string;
    /**
    * 应答编码
    */
    code?: string;
    /**
    * 应答消息
    */
    message?: string;
    /**
    * 
    */
    data?: OrderDetailResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 收款记录列表查询
  */
  type PaymentQueryRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 订单编号
    */
    subOrderNo?: string;
  };

  /**
  * 数据
  */
  type PageModelPaymentListResponse = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 
    */
    total?: number;
    /**
    * 
    */
    rows?: PaymentListResponse[];
  };

  /**
  * 收款列表响应
  */
  type PaymentListResponse = {
    /**
    * 款项类型 1:订金，2:尾款，3:全款
    */
    type?: number;
    /**
    * 金额（元）
    */
    amountDesc?: string;
    /**
    * 支付方式:BALANCE-余额支付,WECHATPAY_MINIPROGRAM-微信小程序支付,SCAN_WEIXIN-微信扫码支付,SCAN_ALIPAY-支付宝扫码支付,ORDER_VSPPAY-POS,H5_CASHIER_VSP-收银宝H5收银台
    */
    paymentType?: string;
    /**
    * 收款日期 格式:yyyy-MM-dd HH:mm:ss
    */
    receiveDate?: string;
  };

  /**
  * 结果
  */
  type ResultPageModelPaymentListResponse = {
    /**
    * 时间戳
    */
    requestId?: string;
    /**
    * 应答编码
    */
    code?: string;
    /**
    * 应答消息
    */
    message?: string;
    /**
    * 
    */
    data?: PageModelPaymentListResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * getOrderDetail路径参数对象
  */
  type getOrderDetailPathParams = {
    /**
    * 
    */
    subOrderNo: string;
  };

}
