<script lang="tsx">
import {defineComponent, onMounted, ref} from 'vue';
import {ElTabs} from 'element-plus';
import {collections} from '../api';

export default defineComponent({
    setup() {
        // 使用 ref 存储异步请求的结果
        const data = ref<any>(null);

        // 异步请求数据
        onMounted(async () => {
            try {
                const result = await collections();
                console.log(Object.keys(result as any));
                data.value = result; // 更新数据
            } catch (error) {
                console.error('Failed to fetch collections:', error);
            }
        });

        // 返回渲染函数
        return () => (
            <>
                <ElTabs style="height:200px;" tabPosition="left">
                    <el-tab-pane label="User">User</el-tab-pane>
                    <el-tab-pane label="Config">Config</el-tab-pane>
                    <el-tab-pane label="Role">Role</el-tab-pane>
                    <el-tab-pane label="Task">Task</el-tab-pane>
                </ElTabs>
            </>
        );
    },
});
</script>

<style lang="css" scoped>
</style>
