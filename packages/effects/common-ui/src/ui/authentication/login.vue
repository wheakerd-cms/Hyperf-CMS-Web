<script lang="ts" setup>
import type {Recordable} from '@vben/types';

import type {VbenFormSchema} from '@vben-core/form-ui';
import {useVbenForm} from '@vben-core/form-ui';

import type {AuthenticationProps} from './types';

import {computed, onMounted, reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import {VbenButton, VbenCheckbox} from '@vben-core/shadcn-ui';

import Title from './auth-title.vue';
import ThirdPartyLogin from './third-party-login.vue';

interface Props extends AuthenticationProps {
    formSchema: VbenFormSchema[];
}

defineOptions({
    name: 'AuthenticationLogin',
});

const props = withDefaults(defineProps<Props>(), {
    codeLoginPath: '/auth/code-login',
    forgetPasswordPath: '/auth/forget-password',
    formSchema: () => [],
    loading: false,
    qrCodeLoginPath: '/auth/qrcode-login',
    registerPath: '/auth/register',
    showCodeLogin: true,
    showForgetPassword: true,
    showQrcodeLogin: true,
    showRegister: true,
    showRememberMe: true,
    showThirdPartyLogin: true,
    submitButtonText: '',
    subTitle: '',
    title: '',
});

const emit = defineEmits<{
    submit: [Recordable<any>];
}>();

const [Form, formApi] = useVbenForm(
    reactive({
        commonConfig: {
            hideLabel: true,
            hideRequiredMark: true,
        },
        schema: computed(() => props.formSchema),
        showDefaultActions: false,
    }),
);
const router = useRouter();

const REMEMBER_ME_KEY = `REMEMBER_ME_USERNAME_${location.hostname}`;

const localUsername = localStorage.getItem(REMEMBER_ME_KEY) || '';

const rememberMe = ref(!!localUsername);

async function handleSubmit() {
    const {valid} = await formApi.validate();
    const values = await formApi.getValues();
    if (valid) {
        localStorage.setItem(
            REMEMBER_ME_KEY,
            rememberMe.value ? values?.username : '',
        );
        emit('submit', values);
    }
}

function handleGo(path: string) {
    router.push(path);
}

onMounted(() => {
    if (localUsername) {
        formApi.setFieldValue('username', localUsername);
    }
});

defineExpose({
    getFormApi: () => formApi,
});
</script>

<template>
    <div @keydown.enter.prevent="handleSubmit">
        <slot name="title">
            <Title>
                <slot name="title">
                    {{ title || '欢迎回来 👋🏻' }}
                </slot>
                <template #desc>
                    <span class="text-muted-foreground">
                        <slot name="subTitle">
                          {{ subTitle || '请输入您的帐户信息以开始管理您的项目' }}
                        </slot>
                    </span>
                </template>
            </Title>
        </slot>

        <Form/>

        <div
            v-if="showRememberMe || showForgetPassword"
            class="mb-6 flex justify-between"
        >
            <div class="flex-center">
                <VbenCheckbox
                    v-if="showRememberMe"
                    v-model:checked="rememberMe"
                    name="rememberMe"
                >
                    {{ '记住账号' }}
                </VbenCheckbox>
            </div>

            <span
                v-if="showForgetPassword"
                class="vben-link text-sm font-normal"
                @click="handleGo(forgetPasswordPath)"
            >
        {{ '忘记密码?' }}
      </span>
        </div>
        <VbenButton
            :class="{
        'cursor-wait': loading,
      }"
            :loading="loading"
            aria-label="login"
            class="w-full"
            @click="handleSubmit"
        >
            {{ submitButtonText || '登录' }}
        </VbenButton>

        <div
            v-if="showCodeLogin || showQrcodeLogin"
            class="mb-2 mt-4 flex items-center justify-between"
        >
            <VbenButton
                v-if="showCodeLogin"
                class="w-1/2"
                variant="outline"
                @click="handleGo(codeLoginPath)"
            >
                {{ '手机号登录' }}
            </VbenButton>
            <VbenButton
                v-if="showQrcodeLogin"
                class="ml-4 w-1/2"
                variant="outline"
                @click="handleGo(qrCodeLoginPath)"
            >
                {{ '扫码登录' }}
            </VbenButton>
        </div>

        <!-- 第三方登录 -->
        <slot name="third-party-login">
            <ThirdPartyLogin v-if="showThirdPartyLogin"/>
        </slot>

        <slot name="to-register">
            <div v-if="showRegister" class="mt-3 text-center text-sm">
                {{ '还没有账号?' }}
                <span
                    class="vben-link text-sm font-normal"
                    @click="handleGo(registerPath)"
                >
          {{ '创建账号' }}
        </span>
            </div>
        </slot>
    </div>
</template>
