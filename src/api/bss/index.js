import request from '@/utils/request';

/**
 * 获取地址 get /bss/v1/address
 * @param {API.AddressQueryRequest} query - query查询参数 
 * @returns {Promise<API.AddressListResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getList( 
  query,
) {
  return request(`/bss/v1/address`, {
    method: "get",
    params: query,
  });
}

/**
 * 获得OSS Token get /bss/v1/oss:token
 * @returns {Promise<API.ApiOssTokenResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getToken() {
  return request(`/bss/v1/oss:token`, {
    method: "get",
  });
}

/**
 * 更新Banner put /bss/v1/banner
 * @param {API.BannerUpdateRequest} body - body请求体数据 
 * @returns {Promise<API.BannerDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function updateBanner( 
  body
) {
  return request(`/bss/v1/banner`, {
    method: "put",
    data: body,
  });
}

/**
 * 新增Banner post /bss/v1/banner
 * @param {API.BannerAddRequest} body - body请求体数据 
 * @returns {Promise<API.BannerDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function insertBanner( 
  body
) {
  return request(`/bss/v1/banner`, {
    method: "post",
    data: body,
  });
}

/**
 * 新增Banner post /bss/v1/callBack
 * @param {Record<string, any>} body - body请求体数据 
 * @returns {Promise<any>} - 返回一个Promise，解析为响应数据对象
 */
export async function callBack( 
  body
) {
  return request(`/bss/v1/callBack`, {
    method: "post",
    data: body,
  });
}

/**
 * 获得Banner列表 post /bss/v1/banner:page
 * @param {API.BannerPageQueryRequest} body - body请求体数据 
 * @returns {Promise<API.PageModelBannerDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getBannerPage( 
  body
) {
  return request(`/bss/v1/banner:page`, {
    method: "post",
    data: body,
  });
}

/**
 * 获得Banner详情 get /bss/v1/banner/${bannerId}
 * @param {API.getBannerDetailPathParams} params - path参数 
 * @returns {Promise<API.BannerDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getBannerDetail(
  params, 
) {
  const { bannerId } = params;
  return request(`/bss/v1/banner/${bannerId}`, {
    method: "get",
  });
}

/**
 * 删除Banner delete /bss/v1/banner/${bannerId}
 * @param {API.deleteBannerPathParams} params - path参数 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function deleteBanner(
  params, 
) {
  const { bannerId } = params;
  return request(`/bss/v1/banner/${bannerId}`, {
    method: "delete",
  });
}

