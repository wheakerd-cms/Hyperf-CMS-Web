import axiosPlugin from '@/application/admin/axios';

const login = (data: any) => {
    return axiosPlugin.post({
        url: '/admin/login/password',
        data,
    });
};

export {login,};
