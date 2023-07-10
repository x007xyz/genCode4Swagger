declare namespace API {

  /**
  * 车辆图片dto
  */
  type CarImgDTO = {
    /**
    * 封面（视频的话可传递封面）
    */
    coverImg?: string;
    /**
    * 资源类型 1:图片 2:视频 3:pdf
    */
    mediaType?: number;
    /**
    * 车辆图片每个大分类下小类型
    */
    type?: string;
    /**
    * 图片/视频url
    */
    url?: string;
  };

  /**
  * 新车SKU信息
  */
  type NewCarSkuDTO = {
    /**
    * skuId
    */
    skuId?: number;
    /**
    * 颜色
    */
    color?: string;
    /**
    * 渠道价，单位：分
    */
    channelPrice?: number;
    /**
    * 零售价，单位：分
    */
    retailPrice?: number;
    /**
    * 库存
    */
    stock?: number;
  };

  /**
  * 新车编辑请求
  */
  type NewCarSpuEditReq = {
    /**
    * 渠道商ID
    */
    channelBusinessId: string;
    /**
    * 渠道商名称
    */
    channelBusinessName: string;
    /**
    * VIN码
    */
    vinCode: string;
    /**
    * 车辆品牌ID
    */
    carBrandId: number;
    /**
    * 车辆品牌名称
    */
    carBrandName: string;
    /**
    * 车辆车系ID
    */
    carSeriesId: number;
    /**
    * 车辆车系名称
    */
    carSeriesName: string;
    /**
    * 车辆型号ID
    */
    carModelId: number;
    /**
    * 车辆型号名称
    */
    carModelName: string;
    /**
    * 渠道价，单位：分
    */
    channelPrice: number;
    /**
    * 零售价，单位：分
    */
    retailPrice: number;
    /**
    * 库存信息
    */
    skuList: NewCarSkuDTO[];
    /**
    * 有无图片 0：无 1：有
    */
    hasPic?: number;
    /**
    * 
    */
    carImage?: YhcCarImageDTO;
  };

  /**
  * 车辆图片信息
  */
  type YhcCarImageDTO = {
    /**
    * 封面图片
    */
    coverImgList?: CarImgDTO[];
    /**
    * 外观图片
    */
    exteriorImgList?: CarImgDTO[];
    /**
    * 内饰图片
    */
    interiorImgList?: CarImgDTO[];
    /**
    * 细节图片
    */
    detailImgList?: CarImgDTO[];
    /**
    * 视频解读
    */
    videoInterpretationList?: CarImgDTO[];
  };

  /**
  * 结果
  */
  type ResultLong = {
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
    data?: number;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车辆档案信息新增编辑Req
  */
  type CarBaseEditRequest = {
    /**
    * 车辆卖家类型；1 个人，2 企业
    */
    sellerType: number;
    /**
    * 车辆卖家ID；卖家类型为个人-用户ID，卖家类型为企业-企业ID
    */
    sellerId: string;
    /**
    * 车辆卖家名称
    */
    sellerName: string;
    /**
    * 行驶证正面
    */
    drivingLicenseFront?: string;
    /**
    * 行驶证次面
    */
    drivingLicenseBack?: string;
    /**
    * 车辆品牌ID
    */
    carBrandId: number;
    /**
    * 车辆品牌名称
    */
    carBrandName: string;
    /**
    * 车辆车系ID
    */
    carSeriesId: number;
    /**
    * 车辆车系名称
    */
    carSeriesName: string;
    /**
    * 车辆型号ID
    */
    carModelId: number;
    /**
    * 车辆型号名称
    */
    carModelName: string;
    /**
    * VIN码
    */
    vinCode: string;
    /**
    * 卖家结算价，单位元
    */
    carSellerSettlementPrice: number;
    /**
    * 新车车辆价格，单位元
    */
    carNewPrice?: number;
  };

  /**
  * 车辆牌证信息
  */
  type CarCardResponse = {
    /**
    * 车主身份证正面
    */
    ownerIdCardFront?: string;
    /**
    * 车主身份证反面
    */
    ownerIdCardBack?: string;
    /**
    * 过户次数
    */
    transferNumber?: number;
    /**
    * 钥匙数量
    */
    keyNumber?: number;
    /**
    * 是否有交强险；0 否，1 有
    */
    hasClivta?: number;
    /**
    * 交强险到期
    */
    clivtaExpireTime?: string;
    /**
    * 是否有商业险；0 否，1 有
    */
    hasVi?: number;
    /**
    * 商业险到期
    */
    viExpireTime?: string;
    /**
    * 商业险金额
    */
    viAmount?: number;
    /**
    * 年检到期日
    */
    annualInspectionExpireTime?: string;
    /**
    * 车辆登记证，JSON数组,eg:[&#39;https://img01&#39;,&#39;https://img02&#39;]
    */
    carRegistration?: string;
    /**
    * 强险电子版照片，JSON数组
    */
    clivtaElectronic?: string;
    /**
    * 商业险电子版照片，JSON数组
    */
    viElectronic?: string;
  };

  /**
  * 车辆详情Resp
  */
  type CarDetResponse = {
    /**
    * 
    */
    车辆ID?: number;
    /**
    * 
    */
    carInfo?: CarInfoResponse;
    /**
    * 
    */
    carSummary?: CarSummaryResponse;
    /**
    * 
    */
    carCard?: CarCardResponse;
    /**
    * 
    */
    carImg?: CarImgResponse;
  };

  /**
  * 车辆图片响应
  */
  type CarImgResponse = {
    /**
    * 有无图片 0：无 1：有
    */
    hasPic?: number;
    /**
    * 封面图片
    */
    coverImgList?: CarImgDTO[];
    /**
    * 外观图片
    */
    exteriorImgList?: CarImgDTO[];
    /**
    * 内饰图片
    */
    interiorImgList?: CarImgDTO[];
    /**
    * 细节图片
    */
    detailImgList?: CarImgDTO[];
    /**
    * 视频解读
    */
    videoInterpretationList?: CarImgDTO[];
  };

  /**
  * 车辆档案信息
  */
  type CarInfoResponse = {
    /**
    * 车辆ID
    */
    carId?: number;
    /**
    * 车辆编号
    */
    carCode?: string;
    /**
    * 封面头图
    */
    coverImg?: string;
    /**
    * 车辆名称（车辆三级拼接而成）
    */
    carName?: string;
    /**
    * 车辆交易状态；10：在库未上架，20：在售，30：已预订，40：已售，50：退库
    */
    carTradeStatus?: number;
    /**
    * 车辆流转的交易状态集，eg:[10,30]
    */
    carTradeStatusFlow?: string;
    /**
    * 车辆流转节点以及后面要走的节点
    */
    carTradeStatusFlowAndBehind?: string;
    /**
    * 车辆卖家类型；1 个人，2 企业
    */
    sellerType?: number;
    /**
    * 车辆卖家ID；卖家类型为个人-用户ID，卖家类型为企业-企业ID
    */
    sellerId?: string;
    /**
    * 车辆卖家名称
    */
    sellerName?: string;
    /**
    * 行驶证正面
    */
    drivingLicenseFront?: string;
    /**
    * 行驶证次面
    */
    drivingLicenseBack?: string;
    /**
    * 车辆品牌ID
    */
    carBrandId?: number;
    /**
    * 车辆品牌名称
    */
    carBrandName?: string;
    /**
    * 车辆车系ID
    */
    carSeriesId?: number;
    /**
    * 车辆车系名称
    */
    carSeriesName?: string;
    /**
    * 车辆型号ID
    */
    carModelId?: number;
    /**
    * 车辆型号名称
    */
    carModelName?: string;
    /**
    * VIN码
    */
    vinCode?: string;
    /**
    * 车辆价格，单位元
    */
    carPrice?: number;
    /**
    * 卖家结算价，单位元
    */
    carSellerSettlementPrice?: number;
    /**
    * 新车车辆价格，单位元
    */
    carNewPrice?: number;
    /**
    * 首次上牌时间
    */
    firstLicensingDate?: string;
    /**
    * 销售类型
    */
    saleType?: number;
    /**
    * 车牌号
    */
    licensePlateNumber?: string;
    /**
    * 是否是临时产权 1：是 2：不是
    */
    tempEquity?: number;
    /**
    * 使用性质；1 营运，2 非营运
    */
    useNature?: number;
    /**
    * 发动机号
    */
    engineNumber?: string;
    /**
    * 车身颜色
    */
    carColor?: string;
    /**
    * 车身颜色code
    */
    carColorCode?: number;
    /**
    * 内饰颜色
    */
    interiorColor?: string;
    /**
    * 内饰颜色code
    */
    interiorColorCode?: number;
    /**
    * 表显里程，单位：万公里
    */
    displayMileage?: number;
    /**
    * 车辆库存状态（ 10 在厅 20 转场 30 已到库）
    */
    inventoryStatus?: number;
    /**
    * 出厂日期
    */
    deliveryDate?: string;
    /**
    * 加装费用
    */
    additionalCharges?: number;
    /**
    * 车辆所属地省级code
    */
    carProvinceCode?: number;
    /**
    * 车辆所属地省级名称
    */
    carProvinceName?: string;
    /**
    * 车辆所属地城市code
    */
    carCityCode?: number;
    /**
    * 车辆所属地城市名称
    */
    carCityName?: string;
    /**
    * 备注
    */
    remarks?: string;
    /**
    * 库龄（到库日期至今的时间，单位：天）
    */
    storageAge?: number;
    /**
    * 车辆上架时间
    */
    carShelfTime?: string;
  };

  /**
  * 车辆统计信息响应
  */
  type CarSummaryResponse = {
    /**
    * 试驾次数
    */
    testDriveNumber?: number;
    /**
    * 最近试驾时间
    */
    testDriveLastTime?: string;
    /**
    * 调价次数
    */
    changePriceNumber?: number;
    /**
    * 最近调价时间
    */
    changePriceLastTime?: string;
    /**
    * 提醒调价次数
    */
    remindChangePriceNumber?: number;
    /**
    * 最近提醒调价时间
    */
    remindChangePriceLastTime?: string;
  };

  /**
  * 结果
  */
  type ResultCarDetResponse = {
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
    data?: CarDetResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车辆档案信息编辑
  */
  type CarInfoEditRequest = {
    /**
    * 车辆ID
    */
    carId: number;
    /**
    * 车辆品牌ID
    */
    carBrandId: number;
    /**
    * 车辆品牌名称
    */
    carBrandName: string;
    /**
    * 车辆车系ID
    */
    carSeriesId: number;
    /**
    * 车辆车系名称
    */
    carSeriesName: string;
    /**
    * 车辆型号ID
    */
    carModelId: number;
    /**
    * 车辆型号名称
    */
    carModelName: string;
    /**
    * VIN码
    */
    vinCode: string;
    /**
    * 卖家结算价，单位元
    */
    carSellerSettlementPrice?: number;
    /**
    * 新车车辆价格，单位元
    */
    carNewPrice?: number;
    /**
    * 首次上牌时间
    */
    firstLicensingDate?: string;
    /**
    * 销售类型
    */
    saleType?: number;
    /**
    * 车牌号
    */
    licensePlateNumber?: string;
    /**
    * 使用性质；1 营运，2 非营运
    */
    useNature: number;
    /**
    * 发动机号
    */
    engineNumber?: string;
    /**
    * 车身颜色code
    */
    carColorCode: number;
    /**
    * 内饰颜色code
    */
    interiorColorCode?: number;
    /**
    * 表显里程，单位：万公里
    */
    displayMileage: number;
    /**
    * 车辆库存状态（ 10 在厅 20 转场 30 已到库）
    */
    inventoryStatus?: number;
    /**
    * 出厂日期
    */
    deliveryDate?: string;
    /**
    * 加装费用
    */
    additionalCharges?: number;
    /**
    * 是否是临时产权 1：是 2：不是
    */
    tempEquity?: number;
    /**
    * 车辆所属地省级code
    */
    carProvinceCode: number;
    /**
    * 车辆所属地省级名称
    */
    carProvinceName: string;
    /**
    * 车辆所属地城市code
    */
    carCityCode: number;
    /**
    * 车辆所属地城市名称
    */
    carCityName: string;
    /**
    * 备注
    */
    remarks?: string;
  };

  /**
  * 车辆核心档案信息编辑请求
  */
  type CarCoreEditRequest = {
    /**
    * 车辆ID
    */
    carId: number;
    /**
    * 首次上牌时间
    */
    firstLicensingDate?: string;
    /**
    * 销售类型
    */
    saleType?: number;
    /**
    * 车牌号
    */
    licensePlateNumber?: string;
    /**
    * 使用性质；1 营运，2 非营运
    */
    useNature: number;
    /**
    * 发动机号
    */
    engineNumber?: string;
    /**
    * 车身颜色code
    */
    carColorCode: number;
    /**
    * 内饰颜色code
    */
    interiorColorCode?: number;
    /**
    * 表显里程，单位：万公里
    */
    displayMileage: number;
    /**
    * 车辆库存状态（ 10 在厅 20 转场 30 已到库）
    */
    inventoryStatus?: number;
    /**
    * 出厂日期
    */
    deliveryDate?: string;
    /**
    * 加装费用，单位元
    */
    additionalCharges?: number;
    /**
    * 车辆所属地省级code
    */
    carProvinceCode: number;
    /**
    * 车辆所属地省级名称
    */
    carProvinceName: string;
    /**
    * 车辆所属地城市code
    */
    carCityCode: number;
    /**
    * 车辆所属地城市名称
    */
    carCityName: string;
    /**
    * 是否是临时产权 1：是 2：不是
    */
    tempEquity?: number;
    /**
    * 备注
    */
    remarks?: string;
  };

  /**
  * 新增车辆校验用户发送短信请求类
  */
  type CarUserVerifySmsSendRequest = {
    /**
    * 手机号
    */
    phone: string;
  };

  /**
  * 结果
  */
  type ResultBoolean = {
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
    data?: boolean;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 新增车辆校验用户核销短信请求类
  */
  type CarUserVerifySmsCheckRequest = {
    /**
    * 手机号
    */
    phone: string;
    /**
    * 验证码
    */
    code: string;
  };

  /**
  * 新增车辆时候校验个人卖家是时候的响应
  */
  type CarUserVerifySmsCheckResp = {
    /**
    * 用户ID
    */
    userId?: number;
    /**
    * 用户名称
    */
    name?: string;
  };

  /**
  * 结果
  */
  type ResultCarUserVerifySmsCheckResp = {
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
    data?: CarUserVerifySmsCheckResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 移车工单创建ParkingOrderAddReq
  */
  type ParkingOrderAddReq = {
    /**
    * 工单类型 10:移位 20:驶离
    */
    orderType: number;
    /**
    * 目标车位id
    */
    targetParkingId?: number;
    /**
    * 车辆spuid
    */
    carSpuId: number;
    /**
    * 
    */
    vinCode?: string;
  };

  /**
  * 结果
  */
  type Result = {
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
  * 车位区域信息ParkingAreaInfoResp
  */
  type ParkingAreaInfoResp = {
    /**
    * 车位区域id
    */
    id?: string;
    /**
    * 车位区域编号
    */
    no?: string;
    /**
    * 车位区域名称
    */
    name?: string;
    /**
    * 场地类型1:室内2:室外
    */
    siteType?: number;
  };

  /**
  * 结果
  */
  type ResultListParkingAreaInfoResp = {
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
    data?: ParkingAreaInfoResp[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 分页获取车位信息ParkingPageReq
  */
  type ParkingRecordPageReq = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 车位id
    */
    parkingId: number;
  };

  /**
  * 数据
  */
  type PageModelParkingRecordPageResp = {
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
    rows?: ParkingRecordPageResp[];
  };

  /**
  * 车位分页信息ParkingPageResp
  */
  type ParkingRecordPageResp = {
    /**
    * 记录id
    */
    id?: number;
    /**
    * 车辆spu
    */
    carSpuId?: number;
    /**
    * 车位id
    */
    parkingId?: number;
    /**
    * 操作类型1:转入2转出
    */
    type?: number;
    /**
    * 操作人
    */
    opUserName?: string;
    /**
    * 操作时间
    */
    opTime?: string;
    /**
    * 备注信息
    */
    remark?: string;
  };

  /**
  * 结果
  */
  type ResultPageModelParkingRecordPageResp = {
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
    data?: PageModelParkingRecordPageResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 分页获取车位信息ParkingPageReq
  */
  type ParkingPageReq = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 车位区域id
    */
    parkingAreaId?: number;
    /**
    * 车位编号
    */
    no?: string;
    /**
    * 车位使用限制，1不限制、2展厅、3活动、4维修、5接待
    */
    useTo?: number;
    /**
    * 应用车辆类型 0:不限制，1:新车，2:二手车
    */
    carType?: number;
    /**
    * 车位状态1未使用2使用中
    */
    status?: number;
    /**
    * 移车时间范围开始
    */
    parkingDateStart?: string;
    /**
    * 移车时间范围开始
    */
    parkingDateEnd?: string;
    /**
    * 排序类型1根据车位创建时间倒序，2根据移车时间倒序，3根据移车时间正序
    */
    orderByType?: number;
  };

  /**
  * 数据
  */
  type PageModelParkingPageResp = {
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
    rows?: ParkingPageResp[];
  };

  /**
  * 车位分页信息ParkingPageResp
  */
  type ParkingPageResp = {
    /**
    * 车位区域
    */
    areaNo?: string;
    /**
    * 车位区域
    */
    areaName?: string;
    /**
    * 车位区域
    */
    areaSiteType?: number;
    /**
    * 车位id
    */
    id?: number;
    /**
    * 车位区域id
    */
    parkingAreaId?: number;
    /**
    * 车位编号
    */
    no?: string;
    /**
    * 车位使用限制，1不限制、2展厅、3活动、4维修、5接待
    */
    useTo?: number;
    /**
    * 应用车辆类型 0:不限制，1:新车，2:二手车
    */
    carType?: number;
    /**
    * 车位状态1:未使用,2:使用中
    */
    status?: number;
    /**
    * 车辆spuid
    */
    carSpuId?: number;
    /**
    * 最近移车时间
    */
    parkingTime?: string;
  };

  /**
  * 结果
  */
  type ResultPageModelParkingPageResp = {
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
    data?: PageModelParkingPageResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 无车位数量NoParkingCountReq
  */
  type NoParkingCountReq = {
    /**
    * 应用车辆类型 0:不限制，1:新车，2:二手车
    */
    carType?: number;
  };

  /**
  * 编辑车位ParkingEditReq
  */
  type ParkingEditReq = {
    /**
    * 车位id
    */
    id: number;
    /**
    * 车位使用限制，1不限制、2展厅、3活动、4维修、5接待
    */
    useTo: number;
    /**
    * 应用车辆类型 0:不限制，1:新车，2:二手车
    */
    carType: number;
  };

  /**
  * 删除车位ParkingDelReq
  */
  type ParkingDelReq = {
    /**
    * 要删除的车位id集合
    */
    ids: number[];
  };

  /**
  * 新车下架请求
  */
  type AdmNewCarSoldOutReq = {
    /**
    * 下架原因
    */
    reason?: string;
  };

  /**
  * 新车退库请求
  */
  type AdmNewCarReturnReq = {
    /**
    * 退库原因
    */
    reason?: string;
  };

  /**
  * 结果
  */
  type ResultInteger = {
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
    data?: number;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车辆vin码品牌解析请求
  */
  type CarVinBrandAnalyzeRequest = {
    /**
    * vin码
    */
    vinCode: string;
  };

  /**
  * 车辆Vin码品牌解析响应
  */
  type CarVinBrandAnalyzeResponse = {
    /**
    * 品牌ID
    */
    brandId?: number;
    /**
    * 品牌名称
    */
    brandName?: string;
    /**
    * 车系ID
    */
    seriesId?: number;
    /**
    * 车系名称
    */
    seriesName?: string;
    /**
    * 车型ID
    */
    modelId?: number;
    /**
    * 车系名称
    */
    modelName?: string;
  };

  /**
  * 结果
  */
  type ResultCarVinBrandAnalyzeResponse = {
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
    data?: CarVinBrandAnalyzeResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车辆计算平台价格请求
  */
  type CarCalcPlatformPrice = {
    /**
    * 卖家结算价，单位元
    */
    carSellerSettlementPrice: number;
  };

  /**
  * 结果
  */
  type ResultBigDecimal = {
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
    data?: number;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 
  */
  type OcrDrivingLicenseFrontRequest = {
    /**
    * 
    */
    imgUrl: string;
  };

  /**
  * 行驶证正面ocr识别响应
  */
  type OcrDrivingLicenseFrontResponse = {
    /**
    * 住址
    */
    address?: string;
    /**
    * 发动机号
    */
    engineNumber?: string;
    /**
    * 签发机关
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
    * 使用性质
    */
    useNature?: string;
    /**
    * 车辆类型
    */
    vehicleType?: string;
    /**
    * 车辆识别代码（Vin码）
    */
    vinCode?: string;
  };

  /**
  * 结果
  */
  type ResultOcrDrivingLicenseFrontResponse = {
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
    data?: OcrDrivingLicenseFrontResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车型库获取车身颜色请求类
  */
  type CarDepotBodyColorReq = {
    /**
    * 车型ID
    */
    modelId: number;
  };

  /**
  * 车型库车身颜色响应
  */
  type CarDepotBodyColorResp = {
    /**
    * 车身颜色
    */
    colorList?: string[];
  };

  /**
  * 结果
  */
  type ResultCarDepotBodyColorResp = {
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
    data?: CarDepotBodyColorResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 代理调价验证请求
  */
  type CarChangePriceVerifyRequest = {
    /**
    * 申请ID
    */
    applyId: number;
    /**
    * 验证码Code
    */
    verifyCode: string;
  };

  /**
  * 车辆批量下架请求对象
  */
  type CarBatchSoldOutRequest = {
    /**
    * 
    */
    carIdList: number[];
  };

  /**
  * 车辆批量上架请求对象
  */
  type CarBatchShelfRequest = {
    /**
    * 
    */
    carIdList: number[];
  };

  /**
  * 
  */
  type CarReturnBackRequest = {
    /**
    * 退库原因
    */
    returnCause?: string;
    /**
    * 退库备注
    */
    remark?: string;
  };

  /**
  * 代理调价申请请求
  */
  type CarChangePriceApplyRequest = {
    /**
    * 调整后的价格，单位：元
    */
    changePrice: number;
  };

  /**
  * 车辆调价申请响应
  */
  type CarChangePriceApplyResponse = {
    /**
    * 调价申请ID
    */
    applyId?: number;
  };

  /**
  * 结果
  */
  type ResultCarChangePriceApplyResponse = {
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
    data?: CarChangePriceApplyResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车辆图片信息新增Req
  */
  type CarImgEditRequest = {
    /**
    * 车辆ID
    */
    carId: number;
    /**
    * 有无图片 0：无 1：有
    */
    hasPic?: number;
    /**
    * 封面图片
    */
    coverImgList?: CarImgDTO[];
    /**
    * 外观图片
    */
    exteriorImgList?: CarImgDTO[];
    /**
    * 内饰图片
    */
    interiorImgList?: CarImgDTO[];
    /**
    * 细节图片
    */
    detailImgList?: CarImgDTO[];
    /**
    * 视频解读
    */
    videoInterpretationList?: CarImgDTO[];
  };

  /**
  * 车辆牌证信息新增Req
  */
  type CarCardEditRequest = {
    /**
    * 车辆ID
    */
    carId: number;
    /**
    * 车主身份证正面
    */
    ownerIdCardFront?: string;
    /**
    * 车主身份证反面
    */
    ownerIdCardBack?: string;
    /**
    * 过户次数
    */
    transferNumber: number;
    /**
    * 钥匙数量
    */
    keyNumber?: number;
    /**
    * 是否有交强险；0 否，1 有
    */
    hasClivta?: number;
    /**
    * 交强险到期
    */
    clivtaExpireTime?: string;
    /**
    * 是否有商业险；0 否，1 有
    */
    hasVi?: number;
    /**
    * 商业险到期
    */
    viExpireTime?: string;
    /**
    * 商业险金额
    */
    viAmount?: number;
    /**
    * 年检到期日
    */
    annualInspectionExpireTime?: string;
    /**
    * 车辆登记证，JSON数组,eg:[&#39;https://img01&#39;,&#39;https://img02&#39;]
    */
    carRegistration?: string;
    /**
    * 强险电子版照片，JSON数组
    */
    clivtaElectronic?: string;
    /**
    * 商业险电子版照片，JSON数组
    */
    viElectronic?: string;
  };

  /**
  * 管理后台C端用户详情响应
  */
  type AdmCustomerDetResp = {
    /**
    * 用户id
    */
    userId?: string;
    /**
    * 用户名称
    */
    userName?: string;
    /**
    *  手机号码
    */
    mobile?: string;
  };

  /**
  * 结果
  */
  type ResultAdmCustomerDetResp = {
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
    data?: AdmCustomerDetResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车商列表请求对象
  */
  type CarDealerQueryRequest = {
    /**
    * 手机号，精确查找
    */
    phone?: string;
    /**
    * 车商名称
    */
    name?: string;
  };

  /**
  * 车商列表响应
  */
  type CarDealerListResponse = {
    /**
    * 车商ID
    */
    id?: string;
    /**
    * 车商名称
    */
    name?: string;
  };

  /**
  * 结果
  */
  type ResultListCarDealerListResponse = {
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
    data?: CarDealerListResponse[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 管理后台车商详情响应
  */
  type AdmDealerDetResp = {
    /**
    * 车商ID
    */
    dealerId?: string;
    /**
    * 车商名称
    */
    dealerName?: string;
    /**
    * 车商负责人联系方式
    */
    phone?: string;
    /**
    * 车商来源
    */
    dealerSource?: number;
    /**
    * 车商来源名称
    */
    dealerSourceName?: string;
  };

  /**
  * 结果
  */
  type ResultAdmDealerDetResp = {
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
    data?: AdmDealerDetResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 停放的车位信息
  */
  type CarInfo = {
    /**
    * 车辆名称
    */
    vin?: string;
    /**
    * 车辆名称
    */
    carName?: string;
    /**
    * 车辆编号
    */
    carCode?: string;
  };

  /**
  * 车位信息ParkingInfoResp
  */
  type ParkingInfoResp = {
    /**
    * 车位区域
    */
    areaNo?: string;
    /**
    * 车位区域
    */
    areaName?: string;
    /**
    * 车位区域
    */
    areaSiteType?: number;
    /**
    * 车位id
    */
    id?: number;
    /**
    * 车位区域id
    */
    parkingAreaId?: number;
    /**
    * 车位编号
    */
    no?: string;
    /**
    * 车位使用限制，1不限制、2展厅、3活动、4维修、5接待
    */
    useTo?: number;
    /**
    * 应用车辆类型 0:不限制，1:新车，2:二手车
    */
    carType?: number;
    /**
    * 车位状态1:未使用,2:使用中
    */
    status?: number;
    /**
    * 车辆spuid
    */
    carSpuId?: number;
    /**
    * 最近移车时间
    */
    parkingTime?: string;
    /**
    * 
    */
    carInfo?: CarInfo;
  };

  /**
  * 结果
  */
  type ResultParkingInfoResp = {
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
    data?: ParkingInfoResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 新车列表查询
  */
  type AdmNewCarQueryReq = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * VIN码
    */
    vinCode?: string;
    /**
    * 供应商名称
    */
    sellerName?: string;
    /**
    * 有无图片 1:有 0:无
    */
    hasPic?: number;
    /**
    * 库存（最小）
    */
    stockMin?: number;
    /**
    * 库存（最大）
    */
    stockMax?: number;
    /**
    * 零售价，单位：分（最小）
    */
    retailPriceMin?: number;
    /**
    * 零售价，单位：分 （最大）
    */
    retailPriceMax?: number;
    /**
    * 车辆状态 1:在库未上架 2:在售 3:退库 9:待上传照片
    */
    carStatus?: number;
  };

  /**
  * 后台-新车列表查询返回
  */
  type AdmNewCarListResp = {
    /**
    * 车辆spuId
    */
    id?: number;
    /**
    * 车辆封面
    */
    coverImg?: string;
    /**
    * 车辆编号（YXC+九位自然序号）
    */
    carCode?: string;
    /**
    * VIN码
    */
    vinCode?: string;
    /**
    * 车辆卖家名称（供应商名称）
    */
    sellerName?: string;
    /**
    * 寄售日期（取自新增日期）
    */
    consignDate?: string;
    /**
    * 车辆名称（车辆三级拼接而成）
    */
    carName?: string;
    /**
    * 渠道价，单位：分
    */
    channelPrice?: number;
    /**
    * 零售价，单位：分
    */
    retailPrice?: number;
    /**
    * 排量（组装后的）eg:1.5T
    */
    displacement?: string;
    /**
    * 库存信息
    */
    skuList?: NewCarSkuDTO[];
    /**
    * 车位信息
    */
    parkingInfo?: string;
    /**
    * 车位备注
    */
    parkingRemark?: string;
  };

  /**
  * 数据
  */
  type PageModelAdmNewCarListResp = {
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
    rows?: AdmNewCarListResp[];
  };

  /**
  * 结果
  */
  type ResultPageModelAdmNewCarListResp = {
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
    data?: PageModelAdmNewCarListResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 后台-新车详情
  */
  type AdmNewCarDetResp = {
    /**
    * 渠道商ID
    */
    channelBusinessId?: string;
    /**
    * 渠道商名称
    */
    channelBusinessName?: string;
    /**
    * VIN码
    */
    vinCode?: string;
    /**
    * 车辆品牌ID
    */
    carBrandId?: number;
    /**
    * 车辆品牌名称
    */
    carBrandName?: string;
    /**
    * 车辆车系ID
    */
    carSeriesId?: number;
    /**
    * 车辆车系名称
    */
    carSeriesName?: string;
    /**
    * 车辆型号ID
    */
    carModelId?: number;
    /**
    * 车辆型号名称
    */
    carModelName?: string;
    /**
    * 渠道价，单位：分
    */
    channelPrice?: number;
    /**
    * 零售价，单位：分
    */
    retailPrice?: number;
    /**
    * 库存信息
    */
    skuList?: NewCarSkuDTO[];
    /**
    * 有无图片 0：无 1：有
    */
    hasPic?: number;
    /**
    * 
    */
    carImage?: YhcCarImageDTO;
  };

  /**
  * 结果
  */
  type ResultAdmNewCarDetResp = {
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
    data?: AdmNewCarDetResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车辆维保记录信息
  */
  type CarMaintenanceResp = {
    /**
    * vinCode
    */
    vin?: string;
    /**
    * 200：查询成功 1：发起查询成功 2：让子弹飞一会 -1 费用不足 -2：发起查询失败 -3：报告不存在
    */
    code?: number;
    /**
    * 描述
    */
    codeDesc?: string;
    /**
    * 最大里程
    */
    maxMileage?: number;
    /**
    * 
    */
    data?: MaintenanceRecord[];
  };

  /**
  * 
  */
  type MaintenanceRecord = {
    /**
    * 维保材料
    */
    material?: string;
    /**
    * 维修日期
    */
    repairDate?: string;
    /**
    * 维保类型 普通维修、首保、常规保养等
    */
    type?: string;
    /**
    * 维保内容
    */
    content?: string;
    /**
    * 里程
    */
    mileage?: number;
  };

  /**
  * 结果
  */
  type ResultCarMaintenanceResp = {
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
    data?: CarMaintenanceResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车辆品牌信息查询
  */
  type CarBrandRequest = {
    /**
    * 品牌ID，车系ID，查看品牌列表可不传
    */
    id?: number;
    /**
    * 车辆品牌信息level，1：品牌，2：车系，3：车型
    */
    level?: number;
  };

  /**
  * 车辆品牌信息响应
  */
  type CarBrandResponse = {
    /**
    * 车辆品牌ID
    */
    id?: number;
    /**
    * 车辆品牌名称
    */
    name?: string;
    /**
    * 首字母
    */
    firstWord?: string;
    /**
    * 品牌图片
    */
    logoUrl?: string;
  };

  /**
  * 结果
  */
  type ResultListCarBrandResponse = {
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
    data?: CarBrandResponse[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车辆颜色响应
  */
  type CarColorListResponse = {
    /**
    * 颜色id
    */
    id?: number;
    /**
    * 颜色名称
    */
    name?: string;
    /**
    * 第一个是#表示颜色16进制，http开头为图片url
    */
    value?: string;
  };

  /**
  * 结果
  */
  type ResultListCarColorListResponse = {
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
    data?: CarColorListResponse[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车辆列表查询
  */
  type CarQueryRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 关键字
    */
    keyword?: string;
    /**
    * vinCode
    */
    vinCode?: string;
    /**
    * 卖家名称
    */
    sellerName?: string;
    /**
    * 车辆code
    */
    carCode?: string;
    /**
    * 车辆名称
    */
    carName?: string;
    /**
    * 
    */
    hasPic?: number;
    /**
    * 车辆交易状态；10：在库未上架，20：在售，30：已预订，40：已售，50：退库
    */
    carTradeStatus?: number;
    /**
    * 车辆库存状态（ 10 在厅 20 转场 30 已到库）
    */
    inventoryStatus?: number;
    /**
    * 车辆状态；10 待初检 ，20 初检中 ，30 初检完成 ， 40 待复检 ，50 复检中，60 复检完成，70 待整备，80 整备中，90 整备完成
    */
    carStatus?: number;
    /**
    * 车辆库融状态
    */
    inventoryFinancingStatus?: number;
    /**
    * 车商Id
    */
    carDealerId?: string;
  };

  /**
  * 车辆列表响应
  */
  type CarListResponse = {
    /**
    * 车辆ID
    */
    carId?: number;
    /**
    * 封面头图
    */
    coverImg?: string;
    /**
    * 车辆编号
    */
    carCode?: string;
    /**
    * 车辆名称
    */
    carName?: string;
    /**
    * VIN码
    */
    vinCode?: string;
    /**
    * 车辆价格，单位元
    */
    carPrice?: number;
    /**
    * 卖家结算价，单位元
    */
    carSellerSettlementPrice?: number;
    /**
    * 新车车辆价格，单位元
    */
    carNewPrice?: number;
    /**
    * 首次上牌时间
    */
    firstLicensingDate?: string;
    /**
    * 出厂日期
    */
    deliveryDate?: string;
    /**
    * 表显里程，单位：万公里
    */
    displayMileage?: number;
    /**
    * 车辆排量
    */
    carDisplacement?: string;
    /**
    * 排放标准
    */
    emissionStandard?: string;
    /**
    * 车辆库存状态（ 10 在厅 20 转场 30 已到库）
    */
    inventoryStatus?: number;
    /**
    * 库龄（到库日期至今的时间，单位：天）
    */
    storageAge?: number;
    /**
    * 车辆到库时间（计算库龄）
    */
    carArrivalTime?: string;
    /**
    * 车辆上架时间
    */
    carShelfTime?: string;
    /**
    * 车位信息
    */
    parkingInfo?: string;
    /**
    * 车位备注
    */
    parkingRemark?: string;
    /**
    * 备注
    */
    remarks?: string;
    /**
    * 寄售日期
    */
    carConsignmentDate?: string;
    /**
    * 车辆卖家类型；1 个人，2 企业
    */
    sellerType?: number;
    /**
    * 车辆卖家名称
    */
    sellerName?: string;
    /**
    * 车辆状态；10 待初检 ，20 初检中 ，30 初检完成 ， 40 待复检 ，50 复检中，60 复检完成，70 待整备，80 整备中，90 整备完成
    */
    carStatus?: number;
    /**
    * 车辆库融状态
    */
    inventoryFinancingStatus?: number;
    /**
    * 车辆交易状态；10：在库未上架，20：在售，30：已预订，40：已售，50：退库
    */
    carTradeStatus?: number;
    /**
    * 试驾次数
    */
    testDriveNumber?: number;
    /**
    * 调价次数
    */
    changePriceNumber?: number;
    /**
    * 最近调价时间
    */
    changePriceLastTime?: string;
    /**
    * 服务顾问
    */
    advisorName?: string;
    /**
    * 预定日期
    */
    reservationDate?: string;
    /**
    * 销售顾问
    */
    salesName?: string;
    /**
    * 销售日期
    */
    salesDate?: string;
    /**
    * 退款原因
    */
    returnCause?: string;
    /**
    * 退库日期
    */
    returnDate?: string;
    /**
    * 退库备注
    */
    returnRemark?: string;
  };

  /**
  * 数据
  */
  type PageModelCarListResponse = {
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
    rows?: CarListResponse[];
  };

  /**
  * 结果
  */
  type ResultPageModelCarListResponse = {
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
    data?: PageModelCarListResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 结果
  */
  type ResultCarSummaryResponse = {
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
    data?: CarSummaryResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 管理后台辆质检报告响应
  */
  type AdmCarQcReportResp = {
    /**
    * 质检项总数量
    */
    qcItemTotal?: number;
    /**
    * 大分类
    */
    classifies?: Classify_3[];
  };

  /**
  * 大分类
  */
  type Classify_3 = {
    /**
    * 大分类code
    */
    code?: number;
    /**
    * 大分类名称
    */
    name?: string;
    /**
    * 合格项数量
    */
    rightNum?: number;
    /**
    * 异常项数量
    */
    errorNum?: number;
    /**
    * 质检项
    */
    items?: Item_3[];
  };

  /**
  * 质检项
  */
  type Item_3 = {
    /**
    * 检测名称
    */
    name?: string;
    /**
    * 状态 1：正常 2：异常
    */
    status?: number;
    /**
    * 问题项
    */
    quesList?: Ques_3[];
  };

  /**
  * 问题项
  */
  type Ques_3 = {
    /**
    * 问题图片
    */
    picList?: string[];
    /**
    * 报告-当前状态
    */
    reportCurrentStatus?: string;
    /**
    * 报告-未来影响
    */
    reportFutureImpact?: string;
    /**
    * 报告-专家建议
    */
    reportExpertAdvice?: string;
  };

  /**
  * 结果
  */
  type ResultAdmCarQcReportResp = {
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
    data?: AdmCarQcReportResp;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 数据
  */
  type AdmCarParamResponse = {
    /**
    * 
    */
    modelId?: number;
    /**
    * 
    */
    modelCode?: string;
    /**
    * 
    */
    manufacture?: string;
    /**
    * 
    */
    engine?: string;
    /**
    * 
    */
    gearBox?: string;
    /**
    * 
    */
    maxSpeed?: string;
    /**
    * 
    */
    officialAccelerate?: string;
    /**
    * 
    */
    officialOilWear?: string;
    /**
    * 
    */
    qualityAssurance?: string;
    /**
    * 
    */
    energyType?: string;
    /**
    * 
    */
    energyTypeCode?: number;
    /**
    * 
    */
    measuredFuelConsumption?: string;
    /**
    * 
    */
    measuredContinuationMileage?: string;
    /**
    * 
    */
    measuredAcceleration?: string;
    /**
    * 
    */
    measuredBraking?: string;
    /**
    * 
    */
    measuredFastChargingTime?: string;
    /**
    * 
    */
    measuredSlowChargeTime?: string;
    /**
    * 
    */
    length?: string;
    /**
    * 
    */
    width?: string;
    /**
    * 
    */
    height?: string;
    /**
    * 
    */
    wheelBase?: string;
    /**
    * 
    */
    frontWheelBase?: string;
    /**
    * 
    */
    rearWheelBase?: string;
    /**
    * 
    */
    minGroundClearance?: string;
    /**
    * 
    */
    frontHeadSpace?: string;
    /**
    * 
    */
    secondaryHeadSpace?: string;
    /**
    * 
    */
    thirdHeadSpace?: string;
    /**
    * 
    */
    frontShoulderSpace?: string;
    /**
    * 
    */
    secondaryShoulderSpace?: string;
    /**
    * 
    */
    thirdShoulderSpace?: string;
    /**
    * 
    */
    frontLegSpace?: string;
    /**
    * 
    */
    secondaryLegSpace?: string;
    /**
    * 
    */
    thirdLegSpace?: string;
    /**
    * 
    */
    hostlingWeight?: string;
    /**
    * 
    */
    carBody?: string;
    /**
    * 
    */
    carBodyMaterial?: string;
    /**
    * 
    */
    doorNumber?: string;
    /**
    * 
    */
    behindDoorOpenWay?: string;
    /**
    * 
    */
    seatNumberLow?: string;
    /**
    * 
    */
    seatNumberTop?: string;
    /**
    * 
    */
    oilBoxCapacity?: string;
    /**
    * 
    */
    secondaryOilBoxCapacity?: string;
    /**
    * 
    */
    containerSize?: string;
    /**
    * 
    */
    trunkCapacity?: string;
    /**
    * 
    */
    maxTrunkCapacity?: string;
    /**
    * 
    */
    metallicPaint?: string;
    /**
    * 
    */
    outsidePedal?: string;
    /**
    * 
    */
    minTurningRadius?: string;
    /**
    * 
    */
    bodyFormId?: string;
    /**
    * 
    */
    hasOBD?: string;
    /**
    * 
    */
    engineModel?: string;
    /**
    * 
    */
    engineVolumeL?: string;
    /**
    * 
    */
    intakeType?: string;
    /**
    * 
    */
    cylinderArrangementType?: string;
    /**
    * 
    */
    cylinderNumber?: string;
    /**
    * 
    */
    spiracleNumberPeerCylinder?: string;
    /**
    * 
    */
    compressRatio?: string;
    /**
    * 
    */
    admissionGear?: string;
    /**
    * 
    */
    cylinderDiameter?: string;
    /**
    * 
    */
    stroke?: string;
    /**
    * 
    */
    maxHorsepower?: string;
    /**
    * 
    */
    maxPowerSpeedTop?: string;
    /**
    * 
    */
    maxPowerSpeedLow?: string;
    /**
    * 
    */
    maxTorqueDecimal?: string;
    /**
    * 
    */
    maxTorqueSpeedTop?: string;
    /**
    * 
    */
    maxTorqueSpeedLow?: string;
    /**
    * 
    */
    engineSpecificTechnique?: string;
    /**
    * 
    */
    fuelForm?: string;
    /**
    * 
    */
    fuelNumber?: string;
    /**
    * 
    */
    oilSupplyMode?: string;
    /**
    * 
    */
    cylinderHeadMaterial?: string;
    /**
    * 
    */
    cylinderBodyMaterial?: string;
    /**
    * 
    */
    environmentalStandards?: string;
    /**
    * 
    */
    usaFuel?: string;
    /**
    * 
    */
    urbanOilConsumption?: string;
    /**
    * 
    */
    suburbOilConsumption?: string;
    /**
    * 
    */
    engineLayoutSet?: string;
    /**
    * 
    */
    electricType?: string;
    /**
    * 
    */
    electricTotalTorque?: string;
    /**
    * 
    */
    frontMaxTorque?: string;
    /**
    * 
    */
    behindMaxTorque?: string;
    /**
    * 
    */
    systemTotalPower?: string;
    /**
    * 
    */
    systemTotalTorque?: string;
    /**
    * 
    */
    batteryType?: string;
    /**
    * 
    */
    miitEnduranceMileage?: string;
    /**
    * 
    */
    batteryCapacity?: string;
    /**
    * 
    */
    powerConsumption?: string;
    /**
    * 
    */
    batteryAssurance?: string;
    /**
    * 
    */
    fastCharge?: string;
    /**
    * 
    */
    motorLayout?: string;
    /**
    * 
    */
    driveMotorsNum?: string;
    /**
    * 
    */
    fastChargeTime?: string;
    /**
    * 
    */
    slowChargeTime?: string;
    /**
    * 
    */
    shortName?: string;
    /**
    * 
    */
    blocksNumber?: string;
    /**
    * 
    */
    gearBoxType?: string;
    /**
    * 
    */
    drivingMode?: string;
    /**
    * 
    */
    fourWheelDriveMode?: string;
    /**
    * 
    */
    fourWheelTransformMode?: string;
    /**
    * 
    */
    centerDifferentialStructure?: string;
    /**
    * 
    */
    frontSuspensionType?: string;
    /**
    * 
    */
    behindSuspensionType?: string;
    /**
    * 
    */
    assistType?: string;
    /**
    * 
    */
    bodyStructure?: string;
    /**
    * 
    */
    frontBrakeType?: string;
    /**
    * 
    */
    behindBrakeType?: string;
    /**
    * 
    */
    parkingBrakeType?: string;
    /**
    * 
    */
    frontTyreSize?: string;
    /**
    * 
    */
    rearTyreSize?: string;
    /**
    * 
    */
    spareTyreSize?: string;
    /**
    * 
    */
    secondarySpareTyre?: string;
    /**
    * 
    */
    spareHubMaterial?: string;
    /**
    * 
    */
    driverSeatAirBag?: string;
    /**
    * 
    */
    sideAirBag?: string;
    /**
    * 
    */
    headAirBag?: string;
    /**
    * 
    */
    safetyAirBag?: string;
    /**
    * 
    */
    kneeAirBag?: string;
    /**
    * 
    */
    reverseAnticollisionSystem?: string;
    /**
    * 
    */
    tyrePressureMonitor?: string;
    /**
    * 
    */
    zeroTyrePressureDrive?: string;
    /**
    * 
    */
    safetyBeltTip?: string;
    /**
    * 
    */
    isofixKidChair?: string;
    /**
    * 
    */
    engineElectronAgainstTheft?: string;
    /**
    * 
    */
    centralControlLock?: string;
    /**
    * 
    */
    keyType?: string;
    /**
    * 
    */
    bootstrapWithoutKey?: string;
    /**
    * 
    */
    enterWithoutKey?: string;
    /**
    * 
    */
    fatigueDrivingTips?: string;
    /**
    * 
    */
    rearCentralAirbag?: string;
    /**
    * 
    */
    roadTrafficIdent?: string;
    /**
    * 
    */
    laneKeepingSystem?: string;
    /**
    * 
    */
    passiveProtection?: string;
    /**
    * 
    */
    absAntiLock?: string;
    /**
    * 
    */
    electronicBrakeDistribution?: string;
    /**
    * 
    */
    brakeAssist?: string;
    /**
    * 
    */
    tractionControl?: string;
    /**
    * 
    */
    bodyStabilityControl?: string;
    /**
    * 
    */
    upslopeAssist?: string;
    /**
    * 
    */
    automaticPark?: string;
    /**
    * 
    */
    abruptSlopeSlowdown?: string;
    /**
    * 
    */
    variableSuspension?: string;
    /**
    * 
    */
    airSuspension?: string;
    /**
    * 
    */
    variableSteeringRatio?: string;
    /**
    * 
    */
    centralDifferentialLock?: string;
    /**
    * 
    */
    limitedDifferentialLock?: string;
    /**
    * 
    */
    waterSensingSystem?: string;
    /**
    * 
    */
    drivingModeSwitching?: string;
    /**
    * 
    */
    inductionSuspension?: string;
    /**
    * 
    */
    reverseWarningSystem?: string;
    /**
    * 
    */
    cruiseSystem?: string;
    /**
    * 
    */
    drivingAssistanceImage?: string;
    /**
    * 
    */
    vehicleRemoteControl?: string;
    /**
    * 
    */
    burglarTheftAlarm?: string;
    /**
    * 
    */
    skylightType?: string;
    /**
    * 
    */
    sportSurfaceSuit?: string;
    /**
    * 
    */
    rimMaterial?: string;
    /**
    * 
    */
    electricDoor?: string;
    /**
    * 
    */
    slidingDoor?: string;
    /**
    * 
    */
    electricRearTrunk?: string;
    /**
    * 
    */
    reactionRearTrunk?: string;
    /**
    * 
    */
    trunkRemoteControl?: string;
    /**
    * 
    */
    headRack?: string;
    /**
    * 
    */
    airIntakeGrille?: string;
    /**
    * 
    */
    openedIndependently?: string;
    /**
    * 
    */
    trunkPositionMemory?: string;
    /**
    * 
    */
    batteryPreheating?: string;
    /**
    * 
    */
    sidePedals?: string;
    /**
    * 
    */
    multiDriveSystem?: string;
    /**
    * 
    */
    realWoodDecorate?: string;
    /**
    * 
    */
    steeringWheelMaterial?: string;
    /**
    * 
    */
    steeringWheelAdjust?: string;
    /**
    * 
    */
    steeringWheelElectricAdjust?: string;
    /**
    * 
    */
    multifunctionalSteeringWheel?: string;
    /**
    * 
    */
    steeringWheelShift?: string;
    /**
    * 
    */
    steeringWheelWarm?: string;
    /**
    * 
    */
    steeringWheelMemory?: string;
    /**
    * 
    */
    parkRadar?: string;
    /**
    * 
    */
    drivingComputerScreen?: string;
    /**
    * 
    */
    liquidCrystalDashboard?: string;
    /**
    * 
    */
    compass?: string;
    /**
    * 
    */
    headsUpDisplay?: string;
    /**
    * 
    */
    wirelessCharging?: string;
    /**
    * 
    */
    noiseReduction?: string;
    /**
    * 
    */
    lcdMeterSize?: string;
    /**
    * 
    */
    builtInDashcam?: string;
    /**
    * 
    */
    adjustablePedal?: string;
    /**
    * 
    */
    chairMaterial?: string;
    /**
    * 
    */
    sportStyleChair?: string;
    /**
    * 
    */
    mainSeatAdjustment?: string;
    /**
    * 
    */
    multiProfileSeat?: string;
    /**
    * 
    */
    driverSeatAdjust?: string;
    /**
    * 
    */
    driverSeatAdjustableDirection?: string;
    /**
    * 
    */
    secondaryDualIndependenceSeat?: string;
    /**
    * 
    */
    secondSeatAdjustment?: string;
    /**
    * 
    */
    secondaryChairMove?: string;
    /**
    * 
    */
    rearChairElectricAdjust?: string;
    /**
    * 
    */
    electricChairMemory?: string;
    /**
    * 
    */
    frontSeatFunction?: string;
    /**
    * 
    */
    rearSeatFunction?: string;
    /**
    * 
    */
    chairElectricHeadrest?: string;
    /**
    * 
    */
    headNeckProtection?: string;
    /**
    * 
    */
    thirdChair?: string;
    /**
    * 
    */
    thirdRecliningAdjust?: string;
    /**
    * 
    */
    rearChairFoldStyle?: string;
    /**
    * 
    */
    thirdSeatUpendMode?: string;
    /**
    * 
    */
    centralArmrest?: string;
    /**
    * 
    */
    rearCupHolder?: string;
    /**
    * 
    */
    seatDemountable?: string;
    /**
    * 
    */
    bossKey?: string;
    /**
    * 
    */
    behindTable?: string;
    /**
    * 
    */
    behindLegSupport?: string;
    /**
    * 
    */
    seatLayout?: string;
    /**
    * 
    */
    heatCoolCupHolder?: string;
    /**
    * 
    */
    viceAdjustableButton?: string;
    /**
    * 
    */
    gps?: string;
    /**
    * 
    */
    locationInteractionService?: string;
    /**
    * 
    */
    centralControlScreen?: string;
    /**
    * 
    */
    bluetooth?: string;
    /**
    * 
    */
    carTv?: string;
    /**
    * 
    */
    rearLiquidCrystalScreen?: string;
    /**
    * 
    */
    power?: string;
    /**
    * 
    */
    outputAudioInterface?: string;
    /**
    * 
    */
    multimedia?: string;
    /**
    * 
    */
    satelliteStation?: string;
    /**
    * 
    */
    audioAmplifierPower?: string;
    /**
    * 
    */
    loudspeakerBrand?: string;
    /**
    * 
    */
    loudspeakerNumber?: string;
    /**
    * 
    */
    centralLcdSize?: string;
    /**
    * 
    */
    luggagePowerInterface?: string;
    /**
    * 
    */
    gestureControl?: string;
    /**
    * 
    */
    mobilePhoneMapping?: string;
    /**
    * 
    */
    rearControlMultimedia?: string;
    /**
    * 
    */
    trafficInformationDisplay?: string;
    /**
    * 
    */
    carNetworking?: string;
    /**
    * 
    */
    usbTypecNum?: string;
    /**
    * 
    */
    otaUpdate?: string;
    /**
    * 
    */
    nearLight?: string;
    /**
    * 
    */
    farLight?: string;
    /**
    * 
    */
    ledStopLamp?: string;
    /**
    * 
    */
    dailyDriveLight?: string;
    /**
    * 
    */
    adaptationFarNearLight?: string;
    /**
    * 
    */
    autoHeadLight?: string;
    /**
    * 
    */
    turningAssistLight?: string;
    /**
    * 
    */
    turningHeadLight?: string;
    /**
    * 
    */
    frontFogLight?: string;
    /**
    * 
    */
    behindFogLight?: string;
    /**
    * 
    */
    stepLight?: string;
    /**
    * 
    */
    lightDelayClose?: string;
    /**
    * 
    */
    headlightHeightAdjust?: string;
    /**
    * 
    */
    headlightClean?: string;
    /**
    * 
    */
    atmosphereLight?: string;
    /**
    * 
    */
    lightingFeatures?: string;
    /**
    * 
    */
    touchReadingLight?: string;
    /**
    * 
    */
    electricWindow?: string;
    /**
    * 
    */
    thirdWindowsControl?: string;
    /**
    * 
    */
    windowPreventClampHand?: string;
    /**
    * 
    */
    heatInsulationMirror?: string;
    /**
    * 
    */
    windshieldHeating?: string;
    /**
    * 
    */
    windshieldDemister?: string;
    /**
    * 
    */
    interiorMirrorFunction?: string;
    /**
    * 
    */
    exteriorMirrorFunction?: string;
    /**
    * 
    */
    rearSunblind?: string;
    /**
    * 
    */
    sideSunblind?: string;
    /**
    * 
    */
    sidePrivateMirror?: string;
    /**
    * 
    */
    sunblindMakeUpMirror?: string;
    /**
    * 
    */
    rearWindshieldWiper?: string;
    /**
    * 
    */
    reactionWindshieldWiper?: string;
    /**
    * 
    */
    soundProofGlass?: string;
    /**
    * 
    */
    oneKeyLift?: string;
    /**
    * 
    */
    heatableSprinklers?: string;
    /**
    * 
    */
    airConditionerControlType?: string;
    /**
    * 
    */
    rearAirConditioner?: string;
    /**
    * 
    */
    rearAirOutlet?: string;
    /**
    * 
    */
    temperaturePartitionControl?: string;
    /**
    * 
    */
    fourAreaTemperatureControl?: string;
    /**
    * 
    */
    airAdjust?: string;
    /**
    * 
    */
    fridge?: string;
    /**
    * 
    */
    negativeIonGenerator?: string;
    /**
    * 
    */
    carAirPurifier?: string;
    /**
    * 
    */
    inCarFragranceDevice?: string;
    /**
    * 
    */
    inCarPMFilter?: string;
    /**
    * 
    */
    automaticParkingSpaces?: string;
    /**
    * 
    */
    engineStartStopTechnical?: string;
    /**
    * 
    */
    parallelAssist?: string;
    /**
    * 
    */
    voiceControlSystem?: string;
    /**
    * 
    */
    laneDeflectWarning?: string;
    /**
    * 
    */
    initiativeBrake?: string;
    /**
    * 
    */
    initiativeTurning?: string;
    /**
    * 
    */
    nightViewing?: string;
    /**
    * 
    */
    centralLiquidCrystalSplitview?: string;
    /**
    * 
    */
    remoteControlGarage?: string;
    /**
    * 
    */
    lowSpeedCruiseAssistSystem?: string;
  };

  /**
  * 结果
  */
  type ResultAdmCarParamResponse = {
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
    data?: AdmCarParamResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 车辆调价查询请求
  */
  type AdmCarChangePriceQueryRequest = {
    /**
    * 车辆名称
    */
    carName?: string;
  };

  /**
  * 车辆调价记录列表响应
  */
  type CarChangePriceListResponse = {
    /**
    * 车辆id
    */
    carId?: number;
    /**
    * 车辆名称
    */
    carName?: string;
    /**
    * 车辆调整后的价格，单位元
    */
    changePrice?: number;
    /**
    * 车辆之前价格，单位元
    */
    beforePrice?: number;
    /**
    * 卖家结算调整后的价格，单位元
    */
    settlementChangePrice?: number;
    /**
    * 卖家结算之前价格，单位元
    */
    settlementBeforePrice?: number;
    /**
    * 调价通过时间
    */
    passTime?: string;
    /**
    * 调价人
    */
    changeUsername?: string;
  };

  /**
  * 结果
  */
  type ResultListCarChangePriceListResponse = {
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
    data?: CarChangePriceListResponse[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * getNewCarDet路径参数对象
  */
  type getNewCarDetPathParams = {
    /**
    * 
    */
    spuId: number;
  };

  /**
  * editNewCar路径参数对象
  */
  type editNewCarPathParams = {
    /**
    * 
    */
    spuId: number;
  };

  /**
  * updateBaseCar路径参数对象
  */
  type updateBaseCarPathParams = {
    /**
    * 
    */
    carId: number;
  };

  /**
  * getNewCarList查询参数对象
  */
  type getNewCarListQueryParams = {
    /**
    * 
    */
    req: AdmNewCarQueryReq;
  };

  /**
  * soldOutNewCar路径参数对象
  */
  type soldOutNewCarPathParams = {
    /**
    * 
    */
    spuId: number;
  };

  /**
  * shelfNewCar路径参数对象
  */
  type shelfNewCarPathParams = {
    /**
    * 
    */
    spuId: number;
  };

  /**
  * returnNewCar路径参数对象
  */
  type returnNewCarPathParams = {
    /**
    * 
    */
    spuId: number;
  };

  /**
  * returnBack路径参数对象
  */
  type returnBackPathParams = {
    /**
    * 
    */
    carId: number;
  };

  /**
  * restock路径参数对象
  */
  type restockPathParams = {
    /**
    * 
    */
    carId: number;
  };

  /**
  * changePriceRemind路径参数对象
  */
  type changePriceRemindPathParams = {
    /**
    * 
    */
    carId: number;
  };

  /**
  * carChangePriceApply路径参数对象
  */
  type carChangePriceApplyPathParams = {
    /**
    * 
    */
    carId: number;
  };

  /**
  * autosMaintenanceCallBack查询参数对象
  */
  type autosMaintenanceCallBackQueryParams = {
    /**
    * 
    */
    req: Record<string, any>;
  };

  /**
  * getCustomerDet路径参数对象
  */
  type getCustomerDetPathParams = {
    /**
    * 
    */
    userId: string;
  };

  /**
  * getCarDealerList查询参数对象
  */
  type getCarDealerListQueryParams = {
    /**
    * 
    */
    req: CarDealerQueryRequest;
  };

  /**
  * getCarDealerDet路径参数对象
  */
  type getCarDealerDetPathParams = {
    /**
    * 
    */
    dealerId: string;
  };

  /**
  * info路径参数对象
  */
  type infoPathParams = {
    /**
    * 
    */
    id: number;
  };

  /**
  * getCarNewPrice查询参数对象
  */
  type getCarNewPriceQueryParams = {
    /**
    * 
    */
    modelId: number;
  };

  /**
  * getCarMaintenanceInfo路径参数对象
  */
  type getCarMaintenanceInfoPathParams = {
    /**
    * 
    */
    vinCode: string;
  };

  /**
  * getBrandList查询参数对象
  */
  type getBrandListQueryParams = {
    /**
    * 
    */
    req: CarBrandRequest;
  };

  /**
  * getCarPage查询参数对象
  */
  type getCarPageQueryParams = {
    /**
    * 
    */
    req: CarQueryRequest;
  };

  /**
  * getDet路径参数对象
  */
  type getDetPathParams = {
    /**
    * 
    */
    carId: number;
  };

  /**
  * carSummary路径参数对象
  */
  type carSummaryPathParams = {
    /**
    * 
    */
    carId: number;
  };

  /**
  * getCarQcReport路径参数对象
  */
  type getCarQcReportPathParams = {
    /**
    * 
    */
    carId: number;
  };

  /**
  * getCarParam路径参数对象
  */
  type getCarParamPathParams = {
    /**
    * 
    */
    carId: number;
  };

  /**
  * getChangePriceRecord路径参数对象
  */
  type getChangePriceRecordPathParams = {
    /**
    * 
    */
    carId: number;
  };

  /**
  * getChangePriceRecord查询参数对象
  */
  type getChangePriceRecordQueryParams = {
    /**
    * 
    */
    req: AdmCarChangePriceQueryRequest;
  };

  /**
  * getBrandList_1查询参数对象
  */
  type getBrandList_1QueryParams = {
    /**
    * 
    */
    req: CarBrandRequest;
  };

}
