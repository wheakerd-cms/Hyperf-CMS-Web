import type {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
    InternalAxiosRequestConfig,
    RawAxiosRequestHeaders,
} from 'axios';

interface RequestInterceptors<T> {
    // 请求拦截
    requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestInterceptorsCatch?: (err: any) => any
    // 响应拦截
    responseInterceptors?: (config: T) => T
    responseInterceptorsCatch?: (err: any) => any
}

interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: RequestInterceptors<T>
}

declare type AxiosMethod = 'get' | 'post' | 'delete' | 'put';

interface AxiosConfig {
    params?: any;
    data?: any;
    url?: string;
    method?: AxiosMethod;
    headers?: RawAxiosRequestHeaders;
    responseType?: AxiosResponseType;
}

type AxiosContentType =
    | 'application/json'
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain';

type AxiosResponseType =
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'json'
    | 'text'
    | 'stream';

interface IResponse<T = any> {
    message: string;
    data: T extends any ? T : T & any;
}

export {
    type AxiosContentType,
    type IResponse,
    type AxiosConfig,
    type RequestConfig,
    type RequestInterceptors,
    AxiosError,
    AxiosResponse,
    AxiosInstance,
    AxiosRequestHeaders,
    InternalAxiosRequestConfig,
};
