import request from '@/utils/request';

/**
 * 查询车务用户角色列表 - 已绑定的 get /user/v1/b/user/${userId}/types:checked
 * @param {API.getUserTypeByUserIdPathParams} params - path参数 
 * @returns {Promise<API.ServerUserTypeDetailResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getUserTypeByUserId(
  params, 
) {
  const { userId } = params;
  return request(`/user/v1/b/user/${userId}/types:checked`, {
    method: "get",
  });
}

/**
 * 查询车务用户角色列表 get /user/v1/b/user-types
 * @returns {Promise<API.ServerUserTypeDetailResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getUserTypePageInfo() {
  return request(`/user/v1/b/user-types`, {
    method: "get",
  });
}

/**
 * 新增车商用户 post /user/v1/c/user
 * @param {API.DealerUserAddRequest} body - body请求体数据 
 * @returns {Promise<API.DealerUserDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function insertUser( 
  body
) {
  return request(`/user/v1/c/user`, {
    method: "post",
    data: body,
  });
}

/**
 * 查询车商用户列表 get /user/v1/c/user:page
 * @param {API.DealerUserPageQueryRequest} query - query查询参数 
 * @returns {Promise<API.PageModelDealerUserDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getUserPageInfo( 
  query,
) {
  return request(`/user/v1/c/user:page`, {
    method: "get",
    params: query,
  });
}

/**
 * 查询车商用户详情 — 依据用户ID get /user/v1/c/user/${userId}
 * @param {API.getUserDetailByUserIdPathParams} params - path参数 
 * @returns {Promise<API.DealerUserDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getUserDetailByUserId(
  params, 
) {
  const { userId } = params;
  return request(`/user/v1/c/user/${userId}`, {
    method: "get",
  });
}

/**
 * 新增车商 - 个人(无任何营业执照) post /user/v1/b/personal-dealer
 * @param {API.PersonalDealerAddRequest} body - body请求体数据 
 * @returns {Promise<API.DealerDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function insertPersonalDealer( 
  body
) {
  return request(`/user/v1/b/personal-dealer`, {
    method: "post",
    data: body,
  });
}

/**
 * 新增车商 - 企业(个体户、企业) post /user/v1/b/enterprise-dealer
 * @param {API.EnterpriseDealerAddRequest} body - body请求体数据 
 * @returns {Promise<API.DealerDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function insertEnterpriseDealer( 
  body
) {
  return request(`/user/v1/b/enterprise-dealer`, {
    method: "post",
    data: body,
  });
}

/**
 * 分页查询车商 get /user/v1/b/dealer:page
 * @param {API.DealerPageQueryRequest} query - query查询参数 
 * @returns {Promise<API.PageModelDealerDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getDealerPageInfo( 
  query,
) {
  return request(`/user/v1/b/dealer:page`, {
    method: "get",
    params: query,
  });
}

/**
 * 查询车商详情 get /user/v1/b/dealer/${dealerId}
 * @param {API.getDealerDetailByDealerIdPathParams} params - path参数 
 * @returns {Promise<API.DealerDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getDealerDetailByDealerId(
  params, 
) {
  const { dealerId } = params;
  return request(`/user/v1/b/dealer/${dealerId}`, {
    method: "get",
  });
}

/**
 * 车商开通金融账号 get /user/v1/b/dealer/${dealerId}/financeAccount:open
 * @param {API.dealerOpenFinanceAccountPathParams} params - path参数 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function dealerOpenFinanceAccount(
  params, 
) {
  const { dealerId } = params;
  return request(`/user/v1/b/dealer/${dealerId}/financeAccount:open`, {
    method: "get",
  });
}

/**
 * 新增车务用户 post /user/v1/b/user
 * @param {API.ServerUserAddRequest} body - body请求体数据 
 * @returns {Promise<API.ServerUserDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function insertUser_1( 
  body
) {
  return request(`/user/v1/b/user`, {
    method: "post",
    data: body,
  });
}

/**
 * 车务用户解绑用户身份 post /user/v1/b/user:unBindUserType
 * @param {API.ServerUserUnbindUserTypeReq} body - body请求体数据 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function userUnbindUserType( 
  body
) {
  return request(`/user/v1/b/user:unBindUserType`, {
    method: "post",
    data: body,
  });
}

/**
 * 车务用户绑定用户身份 post /user/v1/b/user:bindUserType
 * @param {API.ServerUserBindUserTypeReq} body - body请求体数据 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function userBindUserType( 
  body
) {
  return request(`/user/v1/b/user:bindUserType`, {
    method: "post",
    data: body,
  });
}

/**
 * 查询车务用户列表 get /user/v1/b/user:page
 * @param {API.ServerUserPageQueryRequest} query - query查询参数 
 * @returns {Promise<API.PageModelServerUserDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getUserPageInfo_1( 
  query,
) {
  return request(`/user/v1/b/user:page`, {
    method: "get",
    params: query,
  });
}

/**
 * 查询车务用户详情 — 依据用户ID get /user/v1/b/user/${userId}
 * @param {API.getUserDetailByUserId_1PathParams} params - path参数 
 * @returns {Promise<API.ServerUserDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getUserDetailByUserId_1(
  params, 
) {
  const { userId } = params;
  return request(`/user/v1/b/user/${userId}`, {
    method: "get",
  });
}

