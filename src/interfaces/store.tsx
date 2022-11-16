
export interface IAuthReducer {
  isLogin: boolean;
  token?: string;
  username?: string;
  rol?: string[]; // 'Oficial / Ejecutivo','Jefe / Encargado','Gerente','Administrador'
  expire?: number;
  name?: string;
  sucursales?: number[];
  departamento?: number;
}


export interface AuthAction {
  type: string
  payload: IAuthReducer
}

export interface MessageResponse {
  success: boolean,
  message: string,
  code: number,
  data?:any,
  total?:number
}

// export {IAuthReducer};