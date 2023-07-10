import request from '@/utils/request';

/**
 * 订单列表 get /order/v1/orders:page
 * @param {API.queryOrderPageQueryParams} query - query查询参数 
 * @returns {Promise<API.PageModelPortalOrderListResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function queryOrderPage( 
  query,
) {
  return request(`/order/v1/orders:page`, {
    method: "get",
    params: query,
  });
}

/**
 * 导出订单 get /order/v1/orders:exportOrder
 * @param {API.exportOrderQueryParams} query - query查询参数 
 * @returns {Promise<API.undefined>} - 返回一个Promise，解析为响应数据对象
 */
export async function exportOrder( 
  query,
) {
  return request(`/order/v1/orders:exportOrder`, {
    method: "get",
    params: query,
  });
}

/**
 * 获取订单详情 get /order/v1/orders/${subOrderNo}
 * @param {API.getOrderDetailPathParams} params - path参数 
 * @returns {Promise<API.OrderDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getOrderDetail(
  params, 
) {
  const { subOrderNo } = params;
  return request(`/order/v1/orders/${subOrderNo}`, {
    method: "get",
  });
}

/**
 * 收款记录列表 get /order/v1/orders/payment:page
 * @param {API.queryPaymentListQueryParams} query - query查询参数 
 * @returns {Promise<API.PageModelPaymentListResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function queryPaymentList( 
  query,
) {
  return request(`/order/v1/orders/payment:page`, {
    method: "get",
    params: query,
  });
}

/**
 * 编辑方案中的分佣比例 put /order/v1/portal/commission/plan/ratio/edit
 * @param {API.CommissionPlanRatioEditRequest} body - body请求体数据 
 * @returns {Promise<API.CommissionPlanDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function updateRatioInPlan( 
  body
) {
  return request(`/order/v1/portal/commission/plan/ratio/edit`, {
    method: "put",
    data: body,
  });
}

/**
 * 停用/启用方案 put /order/v1/portal/commission/plan/enable
 * @param {API.CommissionPlanEditRequest} body - body请求体数据 
 * @returns {Promise<API.CommissionPlanListResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function enableOrUnablePlan( 
  body
) {
  return request(`/order/v1/portal/commission/plan/enable`, {
    method: "put",
    data: body,
  });
}

/**
 * 编辑分佣方案 put /order/v1/portal/commission/plan/edit
 * @param {API.CommissionPlanEditRequest} body - body请求体数据 
 * @returns {Promise<API.CommissionPlanDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function updateCommissionPlan( 
  body
) {
  return request(`/order/v1/portal/commission/plan/edit`, {
    method: "put",
    data: body,
  });
}

/**
 * 列表 get /order/v1/portal/commission/plan:page
 * @param {API.listCommissionPlansQueryParams} query - query查询参数 
 * @returns {Promise<API.PageModelCommissionPlanListResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function listCommissionPlans( 
  query,
) {
  return request(`/order/v1/portal/commission/plan:page`, {
    method: "get",
    params: query,
  });
}

/**
 * 详情 get /order/v1/portal/commission/plan/detail
 * @param {API.getCommissionPlanDetailQueryParams} query - query查询参数 
 * @returns {Promise<API.CommissionPlanDetailResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getCommissionPlanDetail( 
  query,
) {
  return request(`/order/v1/portal/commission/plan/detail`, {
    method: "get",
    params: query,
  });
}

/**
 * 列表 get /order/v1/portal/commission/role:page
 * @param {API.listCommissionRolesQueryParams} query - query查询参数 
 * @returns {Promise<API.PageModelCommissionRoleListResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function listCommissionRoles( 
  query,
) {
  return request(`/order/v1/portal/commission/role:page`, {
    method: "get",
    params: query,
  });
}

