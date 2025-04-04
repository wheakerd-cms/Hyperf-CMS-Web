<script lang="tsx" setup>
import {reactive, ref} from 'vue';
import Menu from '@/application/admin/layout/components/Menu';
import Header from '@/application/admin/layout/components/Header';

const state = reactive({
    rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
    openKeys: ['sub1'],
    selectedKeys: [],
});

const collapsed = ref<boolean>(false);

const menuListData = ref([
    {
        name: 'Home',
        path: '/home',
        redirect: '/home/index',
        meta: {
            title: '控制台',
            icon: 'ion:speedometer',
        },
        children: [
            {
                name: 'Home-Dashboard',
                path: 'dashboard',
                meta: {
                    title: '仪表板',
                    icon: 'ion:speedometer',
                },
            },
            {
                name: 'Home-Analysis',
                path: 'analysis',
                meta: {
                    title: '分析页',
                    icon: 'ion:speedometer',
                },
            },
        ],
    },
    {
        name: 'Navigation-One',
        path: '/Navigation-One',
        redirect: '/home/index',
        meta: {
            title: 'Navigation One',
            icon: 'ion:speedometer',
        },
        children: [
            {
                name: 'Home-Dashboard',
                path: 'dashboard',
                meta: {
                    title: '仪表板',
                    icon: 'ion:speedometer',
                },
            },
            {
                name: 'Home-Analysis',
                path: 'analysis',
                meta: {
                    title: '分析页',
                    icon: 'ion:speedometer',
                },
            },
        ],
    },
]);
</script>
<template>
    <ElContainer class="vw-100 vh-100 bg-white">
        <ElAside class="overflow-hidden d-flex flex-column border-end border-1" width="220px">
            <div class="d-flex align-items-center justify-content-center py-2">
                <img alt="logo"
                     height="40"
                     src="/logo.svg"
                     style="width: 40px; height: auto;"
                     width="40"
                />
                <span class="ms-2">系统管理中心</span>
            </div>
            <ElScrollbar class="flex-grow-1">
                <Menu :data="menuListData" class="bg-white border-0"/>
            </ElScrollbar>
        </ElAside>
        <ElContainer>
            <ElHeader class="px-0 h-auto">
                <Header/>
                <div class="border-bottom border-1" style="height: 35px"></div>
            </ElHeader>
            <ElMain class="p-0 h-100 overflow-hidden">
                <ElScrollbar class="h-100 p-3">
                    <RouterView/>
                </ElScrollbar>
            </ElMain>
            <ElFooter
                class="h-auto d-flex align-items-center justify-content-center py-2 border-top border-1">
                <span>Copyright &copy; 2024 wheakerd. 保留所有权利</span>
            </ElFooter>
        </ElContainer>
    </ElContainer>
</template>
<style lang="css" scoped>
</style>
