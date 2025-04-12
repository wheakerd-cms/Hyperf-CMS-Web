import {defineStore,} from 'pinia';
import {
    computed,
    reactive,
    Ref,
    ref,
} from 'vue';
import {store,} from '@/plugin/pinia.plugin.ts';

export const useUserStore = defineStore('user', () => {
    const userinfo = reactive({
        username: 'wheakerd@gmail.com',
        nickname: 'wheakerd',
        avatar: 'http://192.168.0.188:9505/public/uploads/avatar/20250108/c54ce62f48cf75bd1f1c1d2c38ee5180.png',
    });

    const isLogin: Ref<boolean> = ref(false);

    const getLoggedIn: Ref<boolean> = computed(() => isLogin.value);

    return {
        userinfo,
        getLoggedIn,
    };
});

export const useUserStoreWithOut = () => {
    return useUserStore(store);
};
