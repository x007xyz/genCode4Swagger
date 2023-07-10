declare namespace API {

  /**
  * 更新角色Req
  */
  type RoleUpdateRequest = {
    /**
    * 角色ID
    */
    roleId: number;
    /**
    * 角色名称
    */
    roleName: string;
    /**
    * 角色描述
    */
    roleDesc?: string;
    /**
    * 排序
    */
    roleSort?: number;
  };

  /**
  * 结果
  */
  type ResultRoleResponse = {
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
    data?: RoleResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 角色Resp
  */
  type RoleResponse = {
    /**
    *  角色ID
    */
    roleId?: number;
    /**
    *  角色权限字符串
    */
    roleKey?: string;
    /**
    *  角色名称
    */
    roleName?: string;
    /**
    *  显示顺序
    */
    roleSort?: number;
    /**
    *  角色描述
    */
    roleDesc?: string;
    /**
    *  创建者
    */
    createBy?: string;
    /**
    *  创建时间
    */
    createTime?: string;
    /**
    *  更新者
    */
    updateBy?: string;
    /**
    *  更新时间
    */
    updateTime?: string;
  };

  /**
  * 权限更新Req
  */
  type PermissionUpdateRequest = {
    /**
    * 权限id
    */
    permissionId: number;
    /**
    * 权限名称
    */
    permissionName: string;
    /**
    * 权限类型
    */
    permissionType: string;
    /**
    * 权限描述
    */
    permissionDesc?: string;
    /**
    * 父ID
    */
    parentId?: number;
    /**
    * 请求方法
    */
    httpMethod: string;
    /**
    * url地址
    */
    url: string;
  };

  /**
  * 权限Resp
  */
  type PermissionResponse = {
    /**
    * 权限ID
    */
    permissionId?: number;
    /**
    * 权限名称
    */
    permissionName?: string;
    /**
    * 父权限ID
    */
    parentId?: number;
    /**
    * 权限类型
    */
    permissionType?: string;
    /**
    * 请求地址
    */
    url?: string;
    /**
    * 请求方法
    */
    httpMethod?: string;
    /**
    * 显示顺序
    */
    sort?: number;
    /**
    * 权限说明
    */
    permissionDesc?: string;
    /**
    * 创建者
    */
    createBy?: string;
    /**
    * 创建时间
    */
    createTime?: string;
    /**
    * 更新者
    */
    updateBy?: string;
    /**
    * 更新时间
    */
    updateTime?: string;
  };

  /**
  * 结果
  */
  type ResultPermissionResponse = {
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
    data?: PermissionResponse;
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
  * 新增角色Req
  */
  type RoleAddRequest = {
    /**
    * 角色名称
    */
    roleName: string;
    /**
    * 角色描述
    */
    roleDesc?: string;
    /**
    * 排序
    */
    roleSort?: number;
  };

  /**
  * 角色绑定权限Req
  */
  type UserBindRoleRequest = {
    /**
    * 用户ID
    */
    userId: number;
    /**
    * 角色ID
    */
    roleId: number;
    /**
    * 是否绑定
    */
    bind: boolean;
  };

  /**
  * 角色绑定权限Req
  */
  type RoleBindPermissionRequest = {
    /**
    * 角色ID
    */
    roleId: number;
    /**
    * 权限ID集合
    */
    permissionId: number;
    /**
    * 是否绑定
    */
    bind: boolean;
  };

  /**
  * 权限新增Req
  */
  type PermissionAddRequest = {
    /**
    * 权限名称
    */
    permissionName: string;
    /**
    * 权限类型
    */
    permissionType: string;
    /**
    * 权限描述
    */
    permissionDesc?: string;
    /**
    * 父ID
    */
    parentId?: number;
    /**
    * 请求方法
    */
    httpMethod: string;
    /**
    * url地址
    */
    url: string;
    /**
    * 排序
    */
    sort: number;
  };

  /**
  * 验证码登录Req
  */
  type LoginVerificationCodeRequest = {
    /**
    * 手机号码
    */
    phoneNum: string;
    /**
    * 验证码
    */
    verificationCode: string;
  };

  /**
  * 验证码登录Req
  */
  type PortalLoginResponse = {
    /**
    * 用户ID
    */
    userId?: number;
    /**
    * 用户名
    */
    userName?: string;
    /**
    * token
    */
    authToken?: string;
  };

  /**
  * 结果
  */
  type ResultPortalLoginResponse = {
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
    data?: PortalLoginResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 结果
  */
  type ResultListRoleCheckResponse = {
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
    data?: RoleCheckResponse[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 角色Resp
  */
  type RoleCheckResponse = {
    /**
    *  角色ID
    */
    roleId?: number;
    /**
    *  角色权限字符串
    */
    roleKey?: string;
    /**
    *  角色名称
    */
    roleName?: string;
    /**
    * 是否有该角色
    */
    isCheck?: boolean;
  };

  /**
  * 菜单返回对象
  */
  type MenuResponse = {
    /**
    * id
    */
    id?: number;
    /**
    * 父id
    */
    parentId?: number;
    /**
    * name
    */
    name?: string;
    /**
    * http 方法
    */
    method?: string;
    /**
    * http url
    */
    url?: string;
    /**
    * 子集菜单
    */
    child?: MenuResponse[];
  };

  /**
  * 结果
  */
  type ResultListMenuResponse = {
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
    data?: MenuResponse[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 角色分页查询Req
  */
  type RolePageQueryRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 角色名称
    */
    roleName?: string;
  };

  /**
  * 数据
  */
  type PageModelRoleResponse = {
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
    rows?: RoleResponse[];
  };

  /**
  * 结果
  */
  type ResultPageModelRoleResponse = {
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
    data?: PageModelRoleResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 权限树Resp
  */
  type PermissionTreeResponse = {
    /**
    * 权限ID
    */
    permissionId?: number;
    /**
    * 父级ID
    */
    parentId?: number;
    /**
    * 权限名称
    */
    permissionName?: string;
    /**
    * 权限类型
    */
    permissionType?: string;
    /**
    * 请求地址
    */
    url?: string;
    /**
    * 请求方法
    */
    httpMethod?: string;
    /**
    * 权限说明
    */
    permissionDesc?: string;
    /**
    * 排序
    */
    sort?: number;
    /**
    * 创建者
    */
    createBy?: string;
    /**
    * 是否选中
    */
    isCheck?: boolean;
    /**
    * 子权限
    */
    child?: PermissionTreeResponse[];
  };

  /**
  * 结果
  */
  type ResultListPermissionTreeResponse = {
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
    data?: PermissionTreeResponse[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 权限分页查询Req
  */
  type PermissionPageQueryRequest = {
    /**
    * 
    */
    pageNum?: number;
    /**
    * 
    */
    pageSize?: number;
    /**
    * 角色ID
    */
    roleId?: number;
  };

  /**
  * 数据
  */
  type PageModelPermissionResponse = {
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
    rows?: PermissionResponse[];
  };

  /**
  * 结果
  */
  type ResultPageModelPermissionResponse = {
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
    data?: PageModelPermissionResponse;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 结果
  */
  type ResultListPermissionResponse = {
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
    data?: PermissionResponse[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 权限类型返回对象
  */
  type PermissionTypeResponse = {
    /**
    * type
    */
    type?: string;
    /**
    * type名称
    */
    typeName?: string;
  };

  /**
  * 结果
  */
  type ResultListPermissionTypeResponse = {
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
    data?: PermissionTypeResponse[];
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 结果
  */
  type ResultListString = {
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
    data?: string[];
    /**
    * 
    */
    success?: boolean;
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
  * sendVerificationCode路径参数对象
  */
  type sendVerificationCodePathParams = {
    /**
    * 
    */
    phone: string;
  };

  /**
  * logout查询参数对象
  */
  type logoutQueryParams = {
    /**
    * 
    */
    userId: number;
  };

  /**
  * getUserRoleInfoByUserId路径参数对象
  */
  type getUserRoleInfoByUserIdPathParams = {
    /**
    * 
    */
    userId: number;
  };

  /**
  * getMenusByUserId路径参数对象
  */
  type getMenusByUserIdPathParams = {
    /**
    * 
    */
    userId: number;
  };

  /**
  * getRolePageInfo查询参数对象
  */
  type getRolePageInfoQueryParams = {
    /**
    * 
    */
    request: RolePageQueryRequest;
  };

  /**
  * getRoleDetailInfo路径参数对象
  */
  type getRoleDetailInfoPathParams = {
    /**
    * 
    */
    roleId: number;
  };

  /**
  * deleteRole路径参数对象
  */
  type deleteRolePathParams = {
    /**
    * 
    */
    roleId: number;
  };

  /**
  * getPermissionTreeInfo路径参数对象
  */
  type getPermissionTreeInfoPathParams = {
    /**
    * 
    */
    roleId: number;
  };

  /**
  * getPermissionPageInfo查询参数对象
  */
  type getPermissionPageInfoQueryParams = {
    /**
    * 
    */
    request: PermissionPageQueryRequest;
  };

  /**
  * getPermissionCascade路径参数对象
  */
  type getPermissionCascadePathParams = {
    /**
    * 
    */
    parentId: number;
  };

  /**
  * getPermissionDetailInfo路径参数对象
  */
  type getPermissionDetailInfoPathParams = {
    /**
    * 
    */
    permissionId: number;
  };

  /**
  * deletePermission路径参数对象
  */
  type deletePermissionPathParams = {
    /**
    * 
    */
    permissionId: number;
  };

}
