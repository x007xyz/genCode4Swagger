declare namespace API {

  /**
  * Banner新增请求
  */
  type BannerUpdateRequest = {
    /**
    * Banner ID
    */
    bannerId: string;
    /**
    * Banner区位
    */
    bannerLocation: string;
    /**
    * Banner类型Code
    */
    bannerType: string;
    /**
    * Banner内容
    */
    bannerContent: string;
    /**
    * 跳转地址
    */
    bannerTarget?: string;
    /**
    * 排序
    */
    bannerOrder?: number;
    /**
    * 更新人
    */
    updateBy: string;
  };

  /**
  * BannerResp
  */
  type BannerDetailResponse = {
    /**
    * Banner ID
    */
    bannerId?: string;
    /**
    * Banner区位
    */
    bannerLocation?: string;
    /**
    * Banner类型Code
    */
    bannerType?: string;
    /**
    * Banner类型
    */
    bannerTypeValue?: string;
    /**
    * Banner内容
    */
    bannerContent?: string;
    /**
    * 跳转地址
    */
    bannerTarget?: string;
    /**
    * 排序
    */
    bannerOrder?: number;
    /**
    * Banner状态Code
    */
    bannerState?: number;
    /**
    * Banner状态
    */
    bannerStateValue?: string;
    /**
    * 创建时间
    */
    createTime?: string;
    /**
    * 创建人
    */
    createBy?: string;
    /**
    * 更新时间
    */
    updateTime?: string;
    /**
    * 更新人
    */
    updateBy?: string;
  };

  /**
  * 结果
  */
  type ResultBannerDetailResponse = {
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
    data?: BannerDetailResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 基础ocr认证请求对象
  */
  type BaseOcrRequest = {
    /**
    * 图片url
    */
    url?: string;
  };

  /**
  * 结果
  */
  type ResultVehicleRegisterIdentResp = {
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
    data?: VehicleRegisterIdentResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 数据
  */
  type VehicleRegisterIdentResp = {
    /**
    * 文档id
    */
    docId?: string;
    /**
    * 条形码编号
    */
    barCode?: string;
    /**
    * 1.机动车所有人/身份证明名称/号码
    */
    vehicleOwnerInfo?: string;
    /**
    * 2.登记机关
    */
    registrationAuthority?: string;
    /**
    * 3.登记日期
    */
    registrationDate?: string;
    /**
    * 4.机动车登记号
    */
    registrationNumber?: string;
    /**
    * 5.车辆类型
    */
    vehicleType?: string;
    /**
    * 6.车辆品牌
    */
    vehicleBrand?: string;
    /**
    * 7.车辆型号
    */
    vehicleModel?: string;
    /**
    * 8.车身颜色
    */
    vehicleColor?: string;
    /**
    * 9.车辆识别代号/车架号
    */
    vinCode?: string;
    /**
    * 10.国产/进口
    */
    isDomestic?: string;
    /**
    * 11.发动机号
    */
    engineNumber?: string;
    /**
    * 12.发动机型号
    */
    engineType?: string;
    /**
    * 13.燃料种类
    */
    fuelType?: string;
    /**
    * 14.排量（单位ml）
    */
    displacement?: string;
    /**
    * 14.功率（单位kw）
    */
    power?: string;
    /**
    * 15.制造厂名称
    */
    manufactureName?: string;
    /**
    * 16.转向方式
    */
    steeringForm?: string;
    /**
    * 17.轮距-前（单位mm）
    */
    frontWheelTrack?: string;
    /**
    * 17.轮距-后（单位mm）
    */
    rearWheelTrack?: string;
    /**
    * 18.轮胎数
    */
    tireNumber?: string;
    /**
    * 19.轮胎规格
    */
    tireSize?: string;
    /**
    * 20.钢板弹簧片数-后轴x片
    */
    springNumber?: string;
    /**
    * 21.轴距（单位mm）
    */
    wheelbase?: string;
    /**
    * 22.轴数
    */
    axleNumber?: string;
    /**
    * 23.外廓尺寸-长*宽*高（单位mm）
    */
    overallDimension?: string;
    /**
    * 24.箱货内部尺寸
    */
    containerDimension?: string;
    /**
    * 25.总质量
    */
    totalWeight?: string;
    /**
    * 26.核定载质量
    */
    permittedWeight?: string;
    /**
    * 27.核定载客
    */
    passengerCapacity?: string;
    /**
    * 28.准牵引总质量
    */
    tractionWeight?: string;
    /**
    * 29.驾驶室载客量
    */
    cabPassengerCapacity?: string;
    /**
    * 30.使用性质 
    */
    useNature?: string;
    /**
    * 31.车辆获得方式
    */
    acquisitionMethod?: string;
    /**
    * 32.车辆出厂日期
    */
    manufactureDate?: string;
    /**
    * 33.发证机关（章印识别）
    */
    issueAuthority?: string;
    /**
    * 34.发证日期
    */
    issueDate?: string;
  };

  /**
  * 
  */
  type VehicleLicenseIdentReq = {
    /**
    * 图片url
    */
    url?: string;
    /**
    * 1：行驶证正面 2：行驶证反面
    */
    type?: number;
  };

  /**
  * 副页数据
  */
  type BackData_2 = {
    /**
    * 条形码号码
    */
    barcodeNumber?: string;
    /**
    * 整备质量
    */
    curbWeight?: string;
    /**
    * 能源类型
    */
    energySign?: string;
    /**
    * 检验记录
    */
    inspectionRecord?: string;
    /**
    * 号牌号码
    */
    licensePlateNumber?: string;
    /**
    * 外廓尺寸
    */
    overallDimension?: string;
    /**
    * 核定载人数
    */
    passengerCapacity?: string;
    /**
    * 核定载质量
    */
    permittedWeight?: string;
    /**
    * 档案编号
    */
    recordNumber?: string;
    /**
    * 备注
    */
    remarks?: string;
    /**
    * 总质量
    */
    totalWeight?: string;
    /**
    * 准牵引总质量
    */
    tractionWeight?: string;
  };

  /**
  * 正面数据
  */
  type FaceData_2 = {
    /**
    * 住址
    */
    address?: string;
    /**
    * 发动机号码
    */
    engineNumber?: string;
    /**
    * 发证单位
    */
    issueAuthority?: string;
    /**
    * 发证日期
    */
    issueDate?: string;
    /**
    * 号牌号码
    */
    licensePlateNumber?: string;
    /**
    * 品牌型号
    */
    model?: string;
    /**
    * 所有人
    */
    owner?: string;
    /**
    * 注册日期
    */
    registrationDate?: string;
    /**
    * 使用性质 [非营运、营运]
    */
    useNature?: string;
    /**
    * 车辆类型 [小型轿车]
    */
    vehicleType?: string;
    /**
    * 车辆识别代号
    */
    vinCode?: string;
  };

  /**
  * 结果
  */
  type ResultVehicleLicenseIdentResp = {
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
    data?: VehicleLicenseIdentResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 识别结果
  */
  type VehicleLicenseIdentResp = {
    /**
    * 文档id
    */
    docId?: string;
    /**
    * 
    */
    face?: FaceData_2;
    /**
    * 
    */
    back?: BackData_2;
  };

  /**
  * 机动车保险单识别
  */
  type InsurancePolicyIdentResp = {
    /**
    * 文档id
    */
    docId?: string;
    /**
    * 车架号
    */
    vinNo?: string;
    /**
    * 车辆使用性质
    */
    carUseProperty?: string;
    /**
    * 车型名称
    */
    modelName?: string;
    /**
    * 保单号或者合同号
    */
    policyNo?: string;
    /**
    * 保险公司名称
    */
    companyName?: string;
    /**
    * 机构名称
    */
    department?: string;
    /**
    * 车型保单类型；交强险/商业险
    */
    vehiclePolicyType?: string;
    /**
    * 保险起期；yyyy-MM-dd HH:mm:ss
    */
    policyStartDate?: string;
    /**
    * 保险止期；yyyy-MM-dd HH:mm:ss
    */
    policyEndDate?: string;
  };

  /**
  * 结果
  */
  type ResultInsurancePolicyIdentResp = {
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
    data?: InsurancePolicyIdentResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 
  */
  type IdcardIdentReq = {
    /**
    * 图片url
    */
    url?: string;
    /**
    * 1：身份证正面 2：身份证反面
    */
    type?: number;
  };

  /**
  * 背面数据
  */
  type BackData_1 = {
    /**
    * 签发机关
    */
    issueAuthority?: string;
    /**
    * 有效期
    */
    validPeriod?: string;
  };

  /**
  * 正面数据
  */
  type FaceData_1 = {
    /**
    * 地址
    */
    address?: string;
    /**
    * 生日
    */
    birthDate?: string;
    /**
    * 民族
    */
    ethnicity?: string;
    /**
    * 身份证号
    */
    idNumber?: string;
    /**
    * 姓名
    */
    name?: string;
    /**
    * 性别
    */
    sex?: string;
  };

  /**
  * 身份证识别结果
  */
  type IdcardIdentResp = {
    /**
    * 文档id
    */
    docId?: string;
    /**
    * 
    */
    face?: FaceData_1;
    /**
    * 
    */
    back?: BackData_1;
  };

  /**
  * 结果
  */
  type ResultIdcardIdentResp = {
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
    data?: IdcardIdentResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 营业执照识别结果响应
  */
  type BusinessLicenseIdentResp = {
    /**
    * 社会信用代码
    */
    creditCode?: string;
    /**
    * 成立日期
    */
    registrationDate?: string;
    /**
    * 公司类型(有限责任公司)
    */
    companyType?: string;
    /**
    * 注册资本(壹仟万元整)
    */
    registeredCapital?: string;
    /**
    * 企业名称
    */
    companyName?: string;
    /**
    * 法人姓名
    */
    legalPerson?: string;
    /**
    * 经营范围
    */
    businessScope?: string;
    /**
    * 成立日期-YYYYMMDD
    */
    validFromDate?: string;
    /**
    * 住所
    */
    businessAddress?: string;
    /**
    * 营业期限-（长期）
    */
    validPeriod?: string;
    /**
    * 营业期限至-YYYYMMDD
    */
    validToDate?: string;
  };

  /**
  * 结果
  */
  type ResultBusinessLicenseIdentResp = {
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
    data?: BusinessLicenseIdentResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 
  */
  type R = {
    /**
    * 
    */
    code?: string;
    /**
    * 
    */
    msg?: string;
  };

  /**
  * Banner新增请求
  */
  type BannerAddRequest = {
    /**
    * Banner区位
    */
    bannerLocation: string;
    /**
    * Banner类型Code
    */
    bannerType: string;
    /**
    * Banner内容
    */
    bannerContent: string;
    /**
    * 跳转地址
    */
    bannerTarget?: string;
    /**
    * 排序
    */
    bannerOrder?: number;
    /**
    * 创建人
    */
    createBy: string;
  };

  /**
  * Banner新增请求
  */
  type BannerPageQueryRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * Banner区位
    */
    bannerLocation?: string;
    /**
    * Banner类型Code
    */
    bannerType?: string;
  };

  /**
  * 数据
  */
  type PageModelBannerDetailResponse = {
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
    rows?: BannerDetailResponse[];
  };

  /**
  * 结果
  */
  type ResultPageModelBannerDetailResponse = {
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
    data?: PageModelBannerDetailResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 小程序ossToken响应
  */
  type ApiOssTokenResponse = {
    /**
    * 
    */
    accessid?: string;
    /**
    * 
    */
    policy?: string;
    /**
    * 
    */
    signature?: string;
    /**
    * 
    */
    host?: string;
    /**
    * 
    */
    expire?: string;
  };

  /**
  * 结果
  */
  type ResultApiOssTokenResponse = {
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
    data?: ApiOssTokenResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 地址信息查询请求
  */
  type AddressQueryRequest = {
    /**
    * 父级ID
    */
    code?: number;
    /**
    * 区域level，1：省级，2：市级，3：区级
    */
    level?: number;
  };

  /**
  * 地址基础信息响应
  */
  type AddressListResponse = {
    /**
    * 地址code
    */
    code?: number;
    /**
    * 地址名称
    */
    name?: string;
  };

  /**
  * 结果
  */
  type ResultListAddressListResponse = {
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
    data?: AddressListResponse[];
    /**
    * 
    */
    success?: boolean;
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
  * getBannerDetail路径参数对象
  */
  type getBannerDetailPathParams = {
    /**
    * 
    */
    bannerId: string;
  };

  /**
  * deleteBanner路径参数对象
  */
  type deleteBannerPathParams = {
    /**
    * 
    */
    bannerId: string;
  };

  /**
  * getList查询参数对象
  */
  type getListQueryParams = {
    /**
    * 
    */
    req: AddressQueryRequest;
  };

}
