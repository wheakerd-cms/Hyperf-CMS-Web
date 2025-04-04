import service from './service';
import {CONTENT_TYPE,} from '@/application/admin/constants';
// import {useUserStoreWithOut,} from '@/application/admin/store/modules/user';
import {
    AxiosConfig,
    IResponse,
} from '@/application/admin/axios/types';

const request = (option: AxiosConfig) => {
    const {
        url, method, params, data, headers, responseType,
    } = option;

    // const userStore = useUserStoreWithOut();
    return service.request({
        url: url,
        method,
        params,
        data: data,
        responseType: responseType,
        headers: {
            'Content-Type': CONTENT_TYPE,
            // [userStore.getTokenKey ?? 'Token']: userStore.getToken ?? '',
            ...headers,
        },
    });
};

export default {
    get: <T = any>(option: AxiosConfig) => {
        return request({
            method: 'get',
            ...option,
        }) as Promise<IResponse<T>>;
    },
    post: <T = any>(option: AxiosConfig) => {
        return request({
            method: 'post',
            ...option,
        }) as Promise<IResponse<T>>;
    },
    delete: <T = any>(option: AxiosConfig) => {
        return request({
            method: 'delete',
            ...option,
        }) as Promise<
            IResponse<T>
        >;
    },
    put: <T = any>(option: AxiosConfig) => {
        return request({
            method: 'put',
            ...option,
        }) as Promise<IResponse<T>>;
    },
    cancelRequest: (url: string | string[]) => {
        return service.cancelRequest(url);
    },
    cancelAllRequest: () => {
        return service.cancelAllRequest();
    },
};
