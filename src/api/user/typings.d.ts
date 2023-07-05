declare namespace API {

  /**
  * 用户新增Req
  */
  type DealerUserAddRequest = {
    /**
    * 用户名称
    */
    userName: string;
    /**
    * 用户电话
    */
    userPhone: string;
    /**
    * 车商ID
    */
    dealerId: number;
  };

  /**
  * 数据
  */
  type DealerUserDetailResponse = {
    /**
    * 用户ID
    */
    userId?: number;
    /**
    * 用户名称
    */
    userName?: string;
    /**
    * 用户头像
    */
    userAvatarUrl?: string;
    /**
    * 用户电话
    */
    userPhone?: string;
    /**
    * 用户微信ID
    */
    userWxOpenId?: string;
    /**
    * 车商ID
    */
    dealerId?: number;
    /**
    * 车商名称
    */
    dealerName?: string;
    /**
    * 用户状态
    */
    userState?: number;
    /**
    * 
    */
    userStateValue?: string;
    /**
    * 创建时间
    */
    createTime?: string;
  };

  /**
  * 结果
  */
  type ResultDealerUserDetailResponse = {
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
    data?: DealerUserDetailResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 用户新增Req
  */
  type ServerUserAddRequest = {
    /**
    * 用户名称
    */
    userName?: string;
    /**
    * 用户电话
    */
    userPhone?: string;
    /**
    * 用户身份
    */
    userType?: number;
  };

  /**
  * 结果
  */
  type ResultServerUserDetailResponse = {
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
    data?: ServerUserDetailResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 数据
  */
  type ServerUserDetailResponse = {
    /**
    * 用户ID
    */
    userId?: number;
    /**
    * 用户名称
    */
    userName?: string;
    /**
    * 用户头像
    */
    userAvatarUrl?: string;
    /**
    * 用户电话
    */
    userPhone?: string;
    /**
    * 用户微信ID
    */
    userWxOpenId?: string;
    /**
    * 用户类型
    */
    userType?: string;
    /**
    * 
    */
    userTypeList?: string[];
    /**
    * 
    */
    userTypeName?: string[];
    /**
    * 注册状态
    */
    regState?: number;
    /**
    * 
    */
    regStateValue?: string;
    /**
    * 用户状态
    */
    userState?: number;
    /**
    * 
    */
    userStateValue?: string;
    /**
    * 创建时间
    */
    createTime?: string;
  };

  /**
  * 用户解绑用户类型Req
  */
  type ServerUserUnbindUserTypeReq = {
    /**
    * 用户ID
    */
    userId: number;
    /**
    * 类型ID
    */
    userType: number;
  };

  /**
  * 结果
  */
  type ResultVoid = {
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
    * 数据
    */
    data?: Record<string, any>;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 用户绑定用户类型Req
  */
  type ServerUserBindUserTypeReq = {
    /**
    * 用户ID
    */
    userId: number;
    /**
    * 类型ID
    */
    userType: number;
  };

  /**
  * 个人车商新增Req
  */
  type PersonalDealerAddRequest = {
    /**
    * 车商名称
    */
    dealerName: string;
    /**
    * 车商联系人
    */
    dealerPrincipal: string;
    /**
    * 车商联系人电话
    */
    dealerPrincipalPhone: string;
    /**
    * 车商法人身份证号码
    */
    dealerIdCardNo: string;
    /**
    * 车商法人身份证正面照片
    */
    dealerIdCardFrontImgUrl: string;
    /**
    * 车商法人身份证反面照片
    */
    dealerIdCardEndImgUrl: string;
    /**
    * 银行卡号码
    */
    dealerBankCardNo?: string;
    /**
    * 银行卡图片
    */
    dealerBankCardImgUrl?: string;
    /**
    * 车商来源
    */
    dealerSource: number;
    /**
    * 创建人
    */
    createBy: string;
  };

  /**
  * 车商详情Resp
  */
  type DealerDetailResponse = {
    /**
    * 车商ID
    */
    dealerId?: string;
    /**
    * 车商类型Code
    */
    dealerType?: number;
    /**
    * 车商类型
    */
    dealerTypeValue?: string;
    /**
    * 车商名称
    */
    dealerName?: string;
    /**
    * 车商编号
    */
    dealerCode?: string;
    /**
    * 总信用额度(单位：元)
    */
    totalCreditLimit?: number;
    /**
    * 已用信用额度(单位：元)
    */
    usedCreditLimit?: number;
    /**
    * 车商法人
    */
    dealerJuridicalPerson?: string;
    /**
    * 车商法人手机号
    */
    dealerJuridicalPersonPhone?: string;
    /**
    * 车商身份证号码
    */
    dealerJuridicalPersonIdCardNo?: string;
    /**
    * 车商身份证正面图片
    */
    dealerJuridicalPersonIdCardFrontImgUrl?: string;
    /**
    * 车商身份证反面图片
    */
    dealerJuridicalPersonIdCardEndImgUrl?: string;
    /**
    * 银行卡号码
    */
    dealerJuridicalPersonBankCardNo?: string;
    /**
    * 银行卡图片
    */
    dealerJuridicalPersonBankCardImgUrl?: string;
    /**
    * 工商营业执照号码
    */
    dealerLicense?: string;
    /**
    * 工商营业执照照片
    */
    dealerLicensePhoto?: string;
    /**
    * 企业银行卡号
    */
    dealerBankCardNo?: string;
    /**
    * 企业银行卡照片
    */
    dealerBankCardPhoto?: string;
    /**
    * 企业银行名称
    */
    dealerBankName?: string;
    /**
    * 企业银行Code
    */
    dealerBankCode?: string;
    /**
    * 企业银行支行名称
    */
    dealerBranchBankName?: string;
    /**
    * 企业银行支行Code
    */
    dealerBranchBankCode?: string;
    /**
    * 省
    */
    province?: string;
    /**
    * 省Code
    */
    provinceCode?: string;
    /**
    * 市
    */
    city?: string;
    /**
    * 市Code
    */
    cityCode?: string;
    /**
    * 区县
    */
    district?: string;
    /**
    * 区县Code
    */
    districtCode?: string;
    /**
    * 车商所在地
    */
    dealerAddress?: string;
    /**
    * 车商来源
    */
    dealerSource?: number;
    /**
    * 车商来源名称
    */
    dealerSourceValue?: string;
    /**
    * 入驻时间
    */
    dealerEnterTime?: string;
    /**
    * 
    */
    createTime?: string;
  };

  /**
  * 结果
  */
  type ResultDealerDetailResponse = {
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
    data?: DealerDetailResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 个人车商新增Req
  */
  type EnterpriseDealerAddRequest = {
    /**
    * 车商类型
    */
    dealerType: number;
    /**
    * 车商名称
    */
    dealerName: string;
    /**
    * 车商联系人
    */
    dealerJuridicalPerson: string;
    /**
    * 车商联系人电话
    */
    dealerJuridicalPersonPhone: string;
    /**
    * 车商法人身份证号码
    */
    dealerJuridicalPersonIdCardNo: string;
    /**
    * 车商法人身份证正面照片
    */
    dealerJuridicalPersonIdCardFrontImgUrl: string;
    /**
    * 车商法人身份证反面照片
    */
    dealerJuridicalPersonIdCardEndImgUrl: string;
    /**
    * 工商营业执照号码
    */
    dealerLicense: string;
    /**
    * 工商营业执照照片
    */
    dealerLicensePhoto: string;
    /**
    * 企业银行卡号
    */
    dealerBankCardNo: string;
    /**
    * 企业银行卡照片
    */
    dealerBankCardPhoto: string;
    /**
    * 企业银行名称
    */
    dealerBankName: string;
    /**
    * 企业银行Code
    */
    dealerBankCode: string;
    /**
    * 企业银行支行名称
    */
    dealerBranchBankName: string;
    /**
    * 企业银行支行Code
    */
    dealerBranchBankCode: string;
    /**
    * 授信额度
    */
    totalCreditLimit: number;
    /**
    * 车商地址
    */
    dealerAddress: string;
    /**
    * 创建人
    */
    createBy: string;
  };

  /**
  * 用户分页查询
  */
  type DealerUserPageQueryRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 用户手机号
    */
    userName?: string;
    /**
    * 用户手机号
    */
    userPhone?: string;
    /**
    * 用户状态
    */
    userState?: number;
  };

  /**
  * 数据
  */
  type PageModelDealerUserDetailResponse = {
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
    rows?: DealerUserDetailResponse[];
  };

  /**
  * 结果
  */
  type ResultPageModelDealerUserDetailResponse = {
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
    data?: PageModelDealerUserDetailResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 
  */
  type ServerUserPageQueryRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 手机号
    */
    userPhone?: string;
    /**
    * 用户状态
    */
    userState?: number;
    /**
    * 用户名称
    */
    userName?: string;
  };

  /**
  * 数据
  */
  type PageModelServerUserDetailResponse = {
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
    rows?: ServerUserDetailResponse[];
  };

  /**
  * 结果
  */
  type ResultPageModelServerUserDetailResponse = {
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
    data?: PageModelServerUserDetailResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 结果
  */
  type ResultListServerUserTypeDetailResponse = {
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
    * 数据
    */
    data?: ServerUserTypeDetailResponse[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 用户类型Resp
  */
  type ServerUserTypeDetailResponse = {
    /**
    * 用户类型ID
    */
    userTypeId?: number;
    /**
    * 用户类型名称
    */
    userTypeName?: string;
    /**
    * 是否绑定
    */
    checked?: boolean;
  };

  /**
  * 车商列表分页查询Req
  */
  type DealerPageQueryRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 车商名称
    */
    dealerName?: string;
    /**
    * 手机号
    */
    phone?: string;
    /**
    * 车商类型
    */
    dealerType?: number;
    /**
    * 开始时间
    */
    startTime?: string;
    /**
    * 结束时间
    */
    endTime?: string;
  };

  /**
  * 数据
  */
  type PageModelDealerDetailResponse = {
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
    rows?: DealerDetailResponse[];
  };

  /**
  * 结果
  */
  type ResultPageModelDealerDetailResponse = {
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
    data?: PageModelDealerDetailResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * getUserDetailByUserId路径参数对象
  */
  type getUserDetailByUserIdPathParams = {
    /**
    * 
    */
    userId: number;
  };

  /**
  * getUserDetailByUserId_1路径参数对象
  */
  type getUserDetailByUserId_1PathParams = {
    /**
    * 
    */
    userId: number;
  };

  /**
  * getUserTypeByUserId路径参数对象
  */
  type getUserTypeByUserIdPathParams = {
    /**
    * 
    */
    userId: number;
  };

  /**
  * getDealerDetailByDealerId路径参数对象
  */
  type getDealerDetailByDealerIdPathParams = {
    /**
    * 
    */
    dealerId: string;
  };

  /**
  * dealerOpenFinanceAccount路径参数对象
  */
  type dealerOpenFinanceAccountPathParams = {
    /**
    * 
    */
    dealerId: number;
  };

}
