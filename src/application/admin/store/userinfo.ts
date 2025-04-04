import {defineStore,} from 'pinia';
import {reactive,} from 'vue';

const useUserinfoStore = defineStore('userinfo', () => {
    const userinfo = reactive({
        username: 'wheakerd@gmail.com',
        nickname: 'wheakerd',
        avatar: 'http://192.168.0.188:9505/public/uploads/avatar/20250108/c54ce62f48cf75bd1f1c1d2c38ee5180.png',
    });

    return {
        userinfo,
    };
});

export default useUserinfoStore;
