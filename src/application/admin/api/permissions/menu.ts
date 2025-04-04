import axiosPlugin from '@/application/admin/axios';

const save = (data: any) => {
    return axiosPlugin.post({
        url: '/admin/permissions/menu/save',
        data,
    });
};

export {save,};
