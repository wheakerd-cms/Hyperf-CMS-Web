<script lang="ts" setup>
import {DotLottieVue} from '@lottiefiles/dotlottie-vue';
import {reactive, ref} from "vue";
import type {Reactive} from "@vue/runtime-core";
import {Icon} from "@iconify/vue";
import type {FormInstance, FormRules} from "element-plus";
import {login} from "@/application/admin/api";

interface FormType {
    username: string;
    password: string;
    remember: boolean;
}

const formRef = ref<FormInstance>();
const form: Reactive<Record<string, any>> = reactive({
    username: '',
    password: '',
});

const formRules = reactive<FormRules<FormType>>({
    username: [{required: true, message: '请输入账号', trigger: 'blur',}],
    password: [{required: true, message: '请输入密码', trigger: 'blur',}],
});

const onSubmit = async (formEl?: FormInstance) => {
    if (!formEl) return
    await formEl.validate((valid) => {
        if (!valid) return

        const res = login(form);

        console.log(res);
    });
};
</script>
<template>
    <div class="position-fixed top-0 start-0 p-4">
        <span>中控管理系统</span>
    </div>
    <div class="vw-100 vh-100 d-inline-flex bg-background-deep flex-row-reverse">
        <div class="shadow-lg p-4 bg-white d-flex align-items-center"
             style="width: 420px;"
        >
            <div class="w-100">
                <p class="fs-2 mb-3">欢迎回来 👋🏻</p>
                <p class="fs-6 mb-3">请输入您的帐户信息以开始管理您的项目</p>
                <el-form ref="formRef"
                         :model="form"
                         :rules="formRules"
                         class="w-100"
                         label-width="auto"
                         size="large"
                         status-icon
                >
                    <el-form-item class="mb-3" prop="username">
                        <el-input v-model="form.username"
                                  placeholder="请输入账号"
                                  type="text"
                        />
                    </el-form-item>
                    <el-form-item class="mb-3" prop="password">
                        <el-input v-model="form.password"
                                  placeholder="请输入密码"
                                  show-password
                                  type="password"
                        />
                    </el-form-item>
                    <div class="d-flex justify-content-between mb-3">
                        <el-checkbox v-model="form.remember" class="h-auto" label="记住账号"/>
                        <el-link type="primary">忘记密码?</el-link>
                    </div>
                    <el-button class="w-100 mb-3"
                               type="primary"
                               @click="onSubmit(formRef)"
                    >登录
                    </el-button>
                    <div class="row mx-0">
                        <el-button class="col">手机号登录</el-button>
                        <el-button class="col">扫码登录</el-button>
                    </div>
                    <el-divider>
                        <span class="text-secondary" style="font-size: .8rem">其他登录方式</span>
                    </el-divider>
                    <div class="d-flex justify-content-center">
                        <Icon color="#000000" icon="ant-design:wechat-filled" width="24"/>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="flex-grow-1 d-none d-lg-flex justify-content-center align-items-center">
            <div>
                <DotLottieVue autoplay
                              loop
                              src="/src/assets/admin/lottie/vB5ZVUPnEc.lottie"
                              style="width: 500px; height: 500px;"
                />
                <p class="text-center fs-5">欢迎访问 wheakerd 后台中控管理系统</p>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.bg-background-deep {
    background: linear-gradient(154deg, rgba(7, 7, 9, 0.08235) 30%, hsl(212 100% 45% / 20%) 48%, rgba(7, 7, 9, 0.08235) 64%);
}
</style>
