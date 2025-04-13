import type {UserInfo,} from '@vben/types';

import {requestClient,} from '#admin/api/request';

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
    return requestClient.get<UserInfo>('/user/info');
}
