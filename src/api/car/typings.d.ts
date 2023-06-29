declare namespace API {

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
  * 获得合同签署的URL的Req
  */
  type GetContractSignUrlReq = {
    /**
    * 车辆ID
    */
    carId: number;
    /**
    * 签署人类型
    */
    signerBizRole: number;
    /**
    * 合同类型
    */
    signFlowType: number;
  };

  /**
  * 结果
  */
  type ResultString = {
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
    data?: string;
    /**
    * 
    */
    success?: boolean;
  };

  /**
  * 获得合同文件的URL的Req
  */
  type GetContractFileUrlReq = {
    /**
    * 车辆ID
    */
    carId: number;
    /**
    * 合同类型
    */
    signFlowType: number;
  };

  /**
  * 合同文件resp
  */
  type ContractDocResponse = {
    /**
    * 合同名称
    */
    fileName?: string;
    /**
    * 合同url
    */
    fileUrl?: string;
  };

  /**
  * 结果
  */
  type ResultListContractDocResponse = {
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
    data?: ContractDocResponse[];
    /**
    * 
    */
    success?: boolean;
  };

}
