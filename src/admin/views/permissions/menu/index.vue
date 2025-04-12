<script lang="ts" setup>
import {reactive} from 'vue';
import {save} from "@/application/admin/api/permissions/menu.ts";

const form: { [key: string]: any } = reactive({
    sort: 0,
    status: true,
});
const onSubmit = () => {
    console.log(form);
    save(form).then((data) => {
    }).catch((err) => {
    });
};

const data: Array<Record<string, any>> = [];
</script>
<template>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="菜单类型">
            <el-radio-group v-model="form.type">
                <el-radio-button :value="0" label="目录"/>
                <el-radio-button :value="1" label="菜单"/>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="父级菜单">
            <el-tree-select
                v-model="form.pid"
                :data="data"
                :render-after-expand="false"
                style="width: 240px"
            />
        </el-form-item>
        <el-form-item label="菜单名称">
            <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="组件">
            <el-input v-model="form.component"/>
        </el-form-item>
        <el-form-item label="组件名称">
            <el-input v-model="form.componentName"/>
        </el-form-item>
        <el-form-item label="图标">
            <el-input v-model="form.icon"/>
        </el-form-item>
        <el-form-item label="路径">
            <el-input v-model="form.path"/>
        </el-form-item>
        <el-form-item label="状态">
            <el-switch v-model="form.status" :value="true"/>
        </el-form-item>
        <el-form-item label="是否固定标签页">
            <el-switch v-model="form.fix" :value="false"/>
        </el-form-item>
        <el-form-item label="排序">
            <el-input-number v-model="form.sort"
                             :min="0"
                             :step="1"
                             :step-strictly="true"
                             :value="0"
            />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>
