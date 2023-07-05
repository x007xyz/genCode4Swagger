import request from '@/utils/request';

/**
 * 新增新车 post /car/v1/newCar
 * @param {API.NewCarEditReq} body - body请求体数据 
 * @returns {Promise<number>} - 返回一个Promise，解析为响应数据对象
 */
export async function addNewCar( 
  body
) {
  return request(`/car/v1/newCar`, {
    method: "post",
    data: body,
  });
}

/**
 * 获取车辆品牌数据 get /car/v1/brand/byLevel
 * @param {API.CarBrandRequest} query - query查询参数 
 * @returns {Promise<API.CarBrandResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getBrandList_1( 
  query,
) {
  return request(`/car/v1/brand/byLevel`, {
    method: "get",
    params: query,
  });
}

/**
 * 第一搜车维保回调 post /car/v1/callback/autosMaintenance
 * @param {Record<string, any>} query - query查询参数 
 * @returns {Promise<API.undefined>} - 返回一个Promise，解析为响应数据对象
 */
export async function autosMaintenanceCallBack( 
  query,
) {
  return request(`/car/v1/callback/autosMaintenance`, {
    method: "post",
    params: query,
  });
}

/**
 * 根据VIN码解析车辆品牌 post /car/v1/depot/vinBrandAnalyze
 * @param {API.CarVinBrandAnalyzeRequest} body - body请求体数据 
 * @returns {Promise<API.CarVinBrandAnalyzeResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getVinBrandAnalyze( 
  body
) {
  return request(`/car/v1/depot/vinBrandAnalyze`, {
    method: "post",
    data: body,
  });
}

/**
 * 获取车型库车身颜色 post /car/v1/depot/getBodyColor
 * @param {API.CarDepotBodyColorReq} body - body请求体数据 
 * @returns {Promise<API.CarDepotBodyColorResp>} - 返回一个Promise，解析为响应数据对象
 */
export async function getDepotBodyColorByModelId( 
  body
) {
  return request(`/car/v1/depot/getBodyColor`, {
    method: "post",
    data: body,
  });
}

/**
 * 车位区域集合 post /car/v1/parkingArea/list
 * @returns {Promise<API.ParkingAreaInfoResp[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function list() {
  return request(`/car/v1/parkingArea/list`, {
    method: "post",
  });
}

/**
 * 车辆Es数据初始化 post /car/v1/init/syncEsCar
 * @returns {Promise<number>} - 返回一个Promise，解析为响应数据对象
 */
export async function initEsSync() {
  return request(`/car/v1/init/syncEsCar`, {
    method: "post",
  });
}

/**
 * 车辆车系数据初始化 post /car/v1/init/initSeries
 * @returns {Promise<number>} - 返回一个Promise，解析为响应数据对象
 */
export async function initSeries() {
  return request(`/car/v1/init/initSeries`, {
    method: "post",
  });
}

/**
 * 车辆车型数据初始化 post /car/v1/init/initModel
 * @returns {Promise<number>} - 返回一个Promise，解析为响应数据对象
 */
export async function initModel() {
  return request(`/car/v1/init/initModel`, {
    method: "post",
  });
}

/**
 * 车辆品牌数据初始化 post /car/v1/init/initBrand
 * @returns {Promise<number>} - 返回一个Promise，解析为响应数据对象
 */
export async function initBrand() {
  return request(`/car/v1/init/initBrand`, {
    method: "post",
  });
}

/**
 * 获取车辆内饰颜色 get /car/v1/dict/carInteriorColor
 * @returns {Promise<API.CarColorListResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCarInteriorColor() {
  return request(`/car/v1/dict/carInteriorColor`, {
    method: "get",
  });
}

/**
 * 获取车辆车身颜色 get /car/v1/dict/carBodyColor
 * @returns {Promise<API.CarColorListResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCarBodyColor() {
  return request(`/car/v1/dict/carBodyColor`, {
    method: "get",
  });
}

/**
 * 车位停放记录分页信息 post /car/v1/parking/record/page
 * @param {API.ParkingRecordPageReq} body - body请求体数据 
 * @returns {Promise<API.PageModelParkingRecordPageResp>} - 返回一个Promise，解析为响应数据对象
 */
export async function recordPage( 
  body
) {
  return request(`/car/v1/parking/record/page`, {
    method: "post",
    data: body,
  });
}

/**
 * 车位分页信息 post /car/v1/parking/page
 * @param {API.ParkingPageReq} body - body请求体数据 
 * @returns {Promise<API.PageModelParkingPageResp>} - 返回一个Promise，解析为响应数据对象
 */
export async function page( 
  body
) {
  return request(`/car/v1/parking/page`, {
    method: "post",
    data: body,
  });
}

/**
 * 上架车无车位数量 post /car/v1/parking/noParkingCount
 * @param {API.NoParkingCountReq} body - body请求体数据 
 * @returns {Promise<number>} - 返回一个Promise，解析为响应数据对象
 */
export async function noParkingCount( 
  body
) {
  return request(`/car/v1/parking/noParkingCount`, {
    method: "post",
    data: body,
  });
}

/**
 * 编辑车位 post /car/v1/parking/edit
 * @param {API.ParkingEditReq} body - body请求体数据 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function edit( 
  body
) {
  return request(`/car/v1/parking/edit`, {
    method: "post",
    data: body,
  });
}

/**
 * 删除车位 post /car/v1/parking/del
 * @param {API.ParkingDelReq} body - body请求体数据 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function del( 
  body
) {
  return request(`/car/v1/parking/del`, {
    method: "post",
    data: body,
  });
}

/**
 * 车位详情 get /car/v1/parking/info/${id}
 * @param {API.infoPathParams} params - path参数 
 * @returns {Promise<API.ParkingInfoResp>} - 返回一个Promise，解析为响应数据对象
 */
export async function info(
  params, 
) {
  const { id } = params;
  return request(`/car/v1/parking/info/${id}`, {
    method: "get",
  });
}

/**
 * 新增车辆用户认证发送短信 post /car/v1/users/sendSmsVerifyUserForAddCar
 * @param {API.CarUserVerifySmsSendRequest} body - body请求体数据 
 * @returns {Promise<boolean>} - 返回一个Promise，解析为响应数据对象
 */
export async function sendSmsVerifyUserForAddCar( 
  body
) {
  return request(`/car/v1/users/sendSmsVerifyUserForAddCar`, {
    method: "post",
    data: body,
  });
}

/**
 * 新增车辆用户认证验证短信 post /car/v1/users/checkSmsVerifyUserForAddCar
 * @param {API.CarUserVerifySmsCheckRequest} body - body请求体数据 
 * @returns {Promise<API.CarUserVerifySmsCheckResp>} - 返回一个Promise，解析为响应数据对象
 */
export async function checkSmsVerifyUserForAddCar( 
  body
) {
  return request(`/car/v1/users/checkSmsVerifyUserForAddCar`, {
    method: "post",
    data: body,
  });
}

/**
 * 获取C端用户详情 get /car/v1/users/customerDet/${userId}
 * @param {API.getCustomerDetPathParams} params - path参数 
 * @returns {Promise<API.AdmCustomerDetResp>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCustomerDet(
  params, 
) {
  const { userId } = params;
  return request(`/car/v1/users/customerDet/${userId}`, {
    method: "get",
  });
}

/**
 * 获取车商List get /car/v1/users/carDealer
 * @param {API.CarDealerQueryRequest} query - query查询参数 
 * @returns {Promise<API.CarDealerListResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCarDealerList( 
  query,
) {
  return request(`/car/v1/users/carDealer`, {
    method: "get",
    params: query,
  });
}

/**
 * 获取车商详情 get /car/v1/users/carDealerDet/${dealerId}
 * @param {API.getCarDealerDetPathParams} params - path参数 
 * @returns {Promise<API.AdmDealerDetResp>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCarDealerDet(
  params, 
) {
  const { dealerId } = params;
  return request(`/car/v1/users/carDealerDet/${dealerId}`, {
    method: "get",
  });
}

/**
 * 车辆Vin码解析 post /car/v1/extend/vinAnalyze
 * @param {API.CarVinBrandAnalyzeRequest} body - body请求体数据 
 * @returns {Promise<API.CarVinBrandAnalyzeResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getVinAnalyze( 
  body
) {
  return request(`/car/v1/extend/vinAnalyze`, {
    method: "post",
    data: body,
  });
}

/**
 * 获取平台价格 post /car/v1/extend/platformPrice
 * @param {API.CarCalcPlatformPrice} body - body请求体数据 
 * @returns {Promise<number>} - 返回一个Promise，解析为响应数据对象
 */
export async function getPlatformPrice( 
  body
) {
  return request(`/car/v1/extend/platformPrice`, {
    method: "post",
    data: body,
  });
}

/**
 * 行驶证ocr识别 post /car/v1/extend/drivingLicenseOcr
 * @param {API.OcrDrivingLicenseFrontRequest} body - body请求体数据 
 * @returns {Promise<API.OcrDrivingLicenseFrontResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function drivingLicenseOcr( 
  body
) {
  return request(`/car/v1/extend/drivingLicenseOcr`, {
    method: "post",
    data: body,
  });
}

/**
 * 获取车辆新车指导价 get /car/v1/extend/carNewPrice
 * @param {number} query - query查询参数 
 * @returns {Promise<number>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCarNewPrice( 
  query,
) {
  return request(`/car/v1/extend/carNewPrice`, {
    method: "get",
    params: query,
  });
}

/**
 * 获取车辆维保记录 get /car/v1/extend/carMaintenance/${vinCode}
 * @param {API.getCarMaintenanceInfoPathParams} params - path参数 
 * @returns {Promise<API.CarMaintenanceResp>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCarMaintenanceInfo(
  params, 
) {
  const { vinCode } = params;
  return request(`/car/v1/extend/carMaintenance/${vinCode}`, {
    method: "get",
  });
}

/**
 * 获取车辆品牌数据 get /car/v1/extend/brandList
 * @param {API.CarBrandRequest} query - query查询参数 
 * @returns {Promise<API.CarBrandResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getBrandList( 
  query,
) {
  return request(`/car/v1/extend/brandList`, {
    method: "get",
    params: query,
  });
}

/**
 * 车辆基础信息编辑 put /car/v1/cars/${carId}/base
 * @param {API.updateBaseCarPathParams} params - path参数 
 * @param {API.CarBaseEditRequest} body - body请求体数据 
 * @returns {Promise<API.CarDetResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function updateBaseCar(
  params, 
  body
) {
  const { carId } = params;
  return request(`/car/v1/cars/${carId}/base`, {
    method: "put",
    data: body,
  });
}

/**
 * 车辆档案信息编辑 put /car/v1/cars/info
 * @param {API.CarInfoEditRequest} body - body请求体数据 
 * @returns {Promise<API.CarDetResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function updateInfoCar( 
  body
) {
  return request(`/car/v1/cars/info`, {
    method: "put",
    data: body,
  });
}

/**
 * 车辆档案信息完善 put /car/v1/cars/core
 * @param {API.CarCoreEditRequest} body - body请求体数据 
 * @returns {Promise<API.CarDetResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function updateCoreCar( 
  body
) {
  return request(`/car/v1/cars/core`, {
    method: "put",
    data: body,
  });
}

/**
 * 代理调价验证 post /car/v1/cars:changePriceVerify
 * @param {API.CarChangePriceVerifyRequest} body - body请求体数据 
 * @returns {Promise<boolean>} - 返回一个Promise，解析为响应数据对象
 */
export async function carChangePriceVerify( 
  body
) {
  return request(`/car/v1/cars:changePriceVerify`, {
    method: "post",
    data: body,
  });
}

/**
 * 批量下架 post /car/v1/cars:batchSoldOut
 * @param {API.CarBatchSoldOutRequest} body - body请求体数据 
 * @returns {Promise<number>} - 返回一个Promise，解析为响应数据对象
 */
export async function batchShelf( 
  body
) {
  return request(`/car/v1/cars:batchSoldOut`, {
    method: "post",
    data: body,
  });
}

/**
 * 批量上架 post /car/v1/cars:batchShelf
 * @param {API.CarBatchShelfRequest} body - body请求体数据 
 * @returns {Promise<number>} - 返回一个Promise，解析为响应数据对象
 */
export async function batchShelf_1( 
  body
) {
  return request(`/car/v1/cars:batchShelf`, {
    method: "post",
    data: body,
  });
}

/**
 * 车辆退库 post /car/v1/cars/${carId}:returnBack
 * @param {API.returnBackPathParams} params - path参数 
 * @param {API.CarReturnBackRequest} body - body请求体数据 
 * @returns {Promise<boolean>} - 返回一个Promise，解析为响应数据对象
 */
export async function returnBack(
  params, 
  body
) {
  const { carId } = params;
  return request(`/car/v1/cars/${carId}:returnBack`, {
    method: "post",
    data: body,
  });
}

/**
 * 车辆重新入库 post /car/v1/cars/${carId}:restock
 * @param {API.restockPathParams} params - path参数 
 * @returns {Promise<boolean>} - 返回一个Promise，解析为响应数据对象
 */
export async function restock(
  params, 
) {
  const { carId } = params;
  return request(`/car/v1/cars/${carId}:restock`, {
    method: "post",
  });
}

/**
 * 车辆调价提醒 post /car/v1/cars/${carId}:changePriceRemind
 * @param {API.changePriceRemindPathParams} params - path参数 
 * @returns {Promise<boolean>} - 返回一个Promise，解析为响应数据对象
 */
export async function changePriceRemind(
  params, 
) {
  const { carId } = params;
  return request(`/car/v1/cars/${carId}:changePriceRemind`, {
    method: "post",
  });
}

/**
 * 代理调价申请 post /car/v1/cars/${carId}:changePriceApply
 * @param {API.carChangePriceApplyPathParams} params - path参数 
 * @param {API.CarChangePriceApplyRequest} body - body请求体数据 
 * @returns {Promise<API.CarChangePriceApplyResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function carChangePriceApply(
  params, 
  body
) {
  const { carId } = params;
  return request(`/car/v1/cars/${carId}:changePriceApply`, {
    method: "post",
    data: body,
  });
}

/**
 * 车辆图片信息新增Or编辑 post /car/v1/cars/image
 * @param {API.CarImgEditRequest} body - body请求体数据 
 * @returns {Promise<API.CarDetResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function addImage( 
  body
) {
  return request(`/car/v1/cars/image`, {
    method: "post",
    data: body,
  });
}

/**
 * 车辆牌证信息新增Or编辑 post /car/v1/cars/card
 * @param {API.CarCardEditRequest} body - body请求体数据 
 * @returns {Promise<API.CarDetResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function addCard( 
  body
) {
  return request(`/car/v1/cars/card`, {
    method: "post",
    data: body,
  });
}

/**
 * 车辆基础信息新增 post /car/v1/cars/base
 * @param {API.CarBaseEditRequest} body - body请求体数据 
 * @returns {Promise<API.CarDetResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function addBaseCar( 
  body
) {
  return request(`/car/v1/cars/base`, {
    method: "post",
    data: body,
  });
}

/**
 * 车辆列表分页 get /car/v1/cars:page
 * @param {API.CarQueryRequest} query - query查询参数 
 * @returns {Promise<API.PageModelCarListResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCarPage( 
  query,
) {
  return request(`/car/v1/cars:page`, {
    method: "get",
    params: query,
  });
}

/**
 * 查看车辆详情 get /car/v1/cars/${carId}
 * @param {API.getDetPathParams} params - path参数 
 * @returns {Promise<API.CarDetResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getDet(
  params, 
) {
  const { carId } = params;
  return request(`/car/v1/cars/${carId}`, {
    method: "get",
  });
}

/**
 * 车辆的汇总信息 get /car/v1/cars/${carId}/summary
 * @param {API.carSummaryPathParams} params - path参数 
 * @returns {Promise<API.CarSummaryResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function carSummary(
  params, 
) {
  const { carId } = params;
  return request(`/car/v1/cars/${carId}/summary`, {
    method: "get",
  });
}

/**
 * 车辆质检报告 get /car/v1/cars/${carId}/qcReport
 * @param {API.getCarQcReportPathParams} params - path参数 
 * @returns {Promise<API.AdmCarQcReportResp>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCarQcReport(
  params, 
) {
  const { carId } = params;
  return request(`/car/v1/cars/${carId}/qcReport`, {
    method: "get",
  });
}

/**
 * 获取车辆参数 get /car/v1/cars/${carId}/param
 * @param {API.getCarParamPathParams} params - path参数 
 * @returns {Promise<API.AdmCarParamResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCarParam(
  params, 
) {
  const { carId } = params;
  return request(`/car/v1/cars/${carId}/param`, {
    method: "get",
  });
}

/**
 * 调价记录列表 get /car/v1/cars/${carId}/changePriceList
 * @param {API.getChangePriceRecordPathParams} params - path参数 
 * @param {API.AdmCarChangePriceQueryRequest} query - query查询参数 
 * @returns {Promise<API.CarChangePriceListResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getChangePriceRecord(
  params, 
  query,
) {
  const { carId } = params;
  return request(`/car/v1/cars/${carId}/changePriceList`, {
    method: "get",
    params: query,
  });
}

/**
 * 创建移车单 post /car/v1/parkingOrder/add
 * @param {API.ParkingOrderAddReq[]} body - body请求体数据 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function add( 
  body
) {
  return request(`/car/v1/parkingOrder/add`, {
    method: "post",
    data: body,
  });
}

