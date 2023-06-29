import request from '@/utils/request';

/**
 * 获得合同签署URL get /car/v1/contract-sign-url
 * @param {API.GetContractSignUrlReq} query - query查询参数 
 * @returns {Promise<string>} - 返回一个Promise，解析为响应数据对象
 */
export async function getContractSignUrl( 
  query,
) {
  return request(`/car/v1/contract-sign-url`, {
    method: "get",
    params: query,
  });
}

/**
 * 获得合同文件URL get /car/v1/contract-file-url
 * @param {API.GetContractFileUrlReq} query - query查询参数 
 * @returns {Promise<API.ContractDocResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getContractFileUrl( 
  query,
) {
  return request(`/car/v1/contract-file-url`, {
    method: "get",
    params: query,
  });
}

