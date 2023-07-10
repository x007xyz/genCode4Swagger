import request from '@/utils/request';

/**
 * Portal-验证码登录 post /auth/v1/logout
 * @param {API.logoutQueryParams} query - query查询参数 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function logout( 
  query,
) {
  return request(`/auth/v1/logout`, {
    method: "post",
    params: query,
  });
}

/**
 * 依据用户ID获得菜单 get /auth/v1/user-menus/${userId}
 * @param {API.getMenusByUserIdPathParams} params - path参数 
 * @returns {Promise<API.MenuResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getMenusByUserId(
  params, 
) {
  const { userId } = params;
  return request(`/auth/v1/user-menus/${userId}`, {
    method: "get",
  });
}

/**
 * 获得权限类型 get /auth/v1/permission-types
 * @returns {Promise<API.PermissionTypeResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getPermissionTypeList() {
  return request(`/auth/v1/permission-types`, {
    method: "get",
  });
}

/**
 * 获得HTTP请求方法 get /auth/v1/http-methods
 * @returns {Promise<API.string[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getHttpMethodList() {
  return request(`/auth/v1/http-methods`, {
    method: "get",
  });
}

/**
 * 更新角色 put /auth/v1/role
 * @param {API.RoleUpdateRequest} body - body请求体数据 
 * @returns {Promise<API.RoleResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function updateRole( 
  body
) {
  return request(`/auth/v1/role`, {
    method: "put",
    data: body,
  });
}

/**
 * 新增角色 post /auth/v1/role
 * @param {API.RoleAddRequest} body - body请求体数据 
 * @returns {Promise<API.RoleResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function addRole( 
  body
) {
  return request(`/auth/v1/role`, {
    method: "post",
    data: body,
  });
}

/**
 * 用户绑定角色 post /auth/v1/role:bindUser
 * @param {API.UserBindRoleRequest} body - body请求体数据 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function userBindRole( 
  body
) {
  return request(`/auth/v1/role:bindUser`, {
    method: "post",
    data: body,
  });
}

/**
 * 角色绑定权限 post /auth/v1/role:bindPermission
 * @param {API.RoleBindPermissionRequest} body - body请求体数据 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function roleBindPermission( 
  body
) {
  return request(`/auth/v1/role:bindPermission`, {
    method: "post",
    data: body,
  });
}

/**
 * 查看用户的所有角色信息 get /auth/v1/user-roles/${userId}
 * @param {API.getUserRoleInfoByUserIdPathParams} params - path参数 
 * @returns {Promise<API.RoleCheckResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getUserRoleInfoByUserId(
  params, 
) {
  const { userId } = params;
  return request(`/auth/v1/user-roles/${userId}`, {
    method: "get",
  });
}

/**
 * 分页查询角色 get /auth/v1/role:page
 * @param {API.getRolePageInfoQueryParams} query - query查询参数 
 * @returns {Promise<API.PageModelRoleResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getRolePageInfo( 
  query,
) {
  return request(`/auth/v1/role:page`, {
    method: "get",
    params: query,
  });
}

/**
 * 查询角色详情 get /auth/v1/role/${roleId}
 * @param {API.getRoleDetailInfoPathParams} params - path参数 
 * @returns {Promise<API.RoleResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getRoleDetailInfo(
  params, 
) {
  const { roleId } = params;
  return request(`/auth/v1/role/${roleId}`, {
    method: "get",
  });
}

/**
 * 删除角色 delete /auth/v1/role/${roleId}
 * @param {API.deleteRolePathParams} params - path参数 
 * @returns {Promise<boolean>} - 返回一个Promise，解析为响应数据对象
 */
export async function deleteRole(
  params, 
) {
  const { roleId } = params;
  return request(`/auth/v1/role/${roleId}`, {
    method: "delete",
  });
}

/**
 * 更新权限 put /auth/v1/permission
 * @param {API.PermissionUpdateRequest} body - body请求体数据 
 * @returns {Promise<API.PermissionResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function updatePermission( 
  body
) {
  return request(`/auth/v1/permission`, {
    method: "put",
    data: body,
  });
}

/**
 * 新增权限 post /auth/v1/permission
 * @param {API.PermissionAddRequest} body - body请求体数据 
 * @returns {Promise<API.PermissionResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function addPermission( 
  body
) {
  return request(`/auth/v1/permission`, {
    method: "post",
    data: body,
  });
}

/**
 * 权限树 get /auth/v1/permission:tree
 * @returns {Promise<API.PermissionTreeResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getPermissionTree() {
  return request(`/auth/v1/permission:tree`, {
    method: "get",
  });
}

/**
 * 权限树 - 依据角色ID get /auth/v1/permission:tree/${roleId}
 * @param {API.getPermissionTreeInfoPathParams} params - path参数 
 * @returns {Promise<API.PermissionTreeResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getPermissionTreeInfo(
  params, 
) {
  const { roleId } = params;
  return request(`/auth/v1/permission:tree/${roleId}`, {
    method: "get",
  });
}

/**
 * 分页查询权限 get /auth/v1/permission:page
 * @param {API.getPermissionPageInfoQueryParams} query - query查询参数 
 * @returns {Promise<API.PageModelPermissionResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getPermissionPageInfo( 
  query,
) {
  return request(`/auth/v1/permission:page`, {
    method: "get",
    params: query,
  });
}

/**
 * 权限级联 get /auth/v1/permission:cascade/${parentId}
 * @param {API.getPermissionCascadePathParams} params - path参数 
 * @returns {Promise<API.PermissionResponse[]>} - 返回一个Promise，解析为响应数据对象
 */
export async function getPermissionCascade(
  params, 
) {
  const { parentId } = params;
  return request(`/auth/v1/permission:cascade/${parentId}`, {
    method: "get",
  });
}

/**
 * 查询权限详情 get /auth/v1/permission/${permissionId}
 * @param {API.getPermissionDetailInfoPathParams} params - path参数 
 * @returns {Promise<API.PermissionResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function getPermissionDetailInfo(
  params, 
) {
  const { permissionId } = params;
  return request(`/auth/v1/permission/${permissionId}`, {
    method: "get",
  });
}

/**
 * 删除权限 delete /auth/v1/permission/${permissionId}
 * @param {API.deletePermissionPathParams} params - path参数 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function deletePermission(
  params, 
) {
  const { permissionId } = params;
  return request(`/auth/v1/permission/${permissionId}`, {
    method: "delete",
  });
}

/**
 * Portal-发送验证码 post /auth/v1/verificationCode:send/${phone}
 * @param {API.sendVerificationCodePathParams} params - path参数 
 * @returns {Promise<Record<string, any>>} - 返回一个Promise，解析为响应数据对象
 */
export async function sendVerificationCode(
  params, 
) {
  const { phone } = params;
  return request(`/auth/v1/verificationCode:send/${phone}`, {
    method: "post",
  });
}

/**
 * Portal-验证码登录 post /auth/v1/login:verificationCode
 * @param {API.LoginVerificationCodeRequest} body - body请求体数据 
 * @returns {Promise<API.PortalLoginResponse>} - 返回一个Promise，解析为响应数据对象
 */
export async function loginWithVerificationCode( 
  body
) {
  return request(`/auth/v1/login:verificationCode`, {
    method: "post",
    data: body,
  });
}

