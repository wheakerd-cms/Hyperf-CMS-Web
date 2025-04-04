<script lang="tsx">
import {defineComponent} from 'vue';
import {ElAvatar, ElCard, ElDivider, ElPopover} from 'element-plus';
import defaultAvatar from '/public/images/default_avatar.png';
import useUserinfoStore from "@/application/admin/store/userinfo";
import {Icon} from '@iconify/vue';

export default defineComponent((
        props: {},
    ) => {
        const userinfoStore = useUserinfoStore();

        const {
            username,
            nickname,
            avatar,
        } = userinfoStore.userinfo;

        return () => <>
            <ElPopover trigger="hover"
                       showArrow={false}
                       showAfter={618}
                       width={248}
                       popperClass="p-0"
            >
                {{
                    reference: () => <>
                        <ElAvatar size={32} src={avatar} style="cursor:pointer;">
                            <img src={defaultAvatar} alt="avatar"/>
                        </ElAvatar>
                    </>,
                    default: () => <>
                        <ElCard class={'w-100'}>
                            <div class="d-flex mx-3 py-2">
                                <div>
                                    <ElAvatar size={48} src={avatar}>
                                        <img src={defaultAvatar} alt="avatar"/>
                                    </ElAvatar>
                                </div>
                                <div class="ms-2 d-flex flex-column py-1">
                                    <div style="font-size:1rem" class="mb-auto">{nickname}</div>
                                    <div style="font-size:.8rem" class="text-secondary">{username}</div>
                                </div>
                            </div>
                            <ElDivider class="my-0"/>
                            <div class="p-1">
                                <div
                                    class="ps-2 py-2 d-flex align-items-center button-hover-style rounded-1">
                                    <Icon icon="material-symbols:lock-outline"
                                          width="1rem"
                                          height="1rem"
                                          class="me-2"
                                    />
                                    <span>锁定屏幕</span>
                                </div>
                            </div>
                            <ElDivider class="my-0"/>
                            <div class="p-1">
                                <div
                                    class="ps-2 py-2 d-flex align-items-center button-hover-style rounded-1">
                                    <Icon icon="material-symbols:logout-rounded"
                                          width="1rem"
                                          height="1rem"
                                          class="me-2"
                                    />
                                    <span>退出登录</span>
                                </div>
                            </div>
                        </ElCard>
                    </>,
                }}
            </ElPopover>
        </>;
    },
    {},
);
</script>

<style lang="css" scoped>
:deep(.el-card__body) {
    padding: 2px 0;
}

.button-hover-style:hover {
    cursor: pointer;
    background-color: rgba(170, 170, 170, 0.1);
}
</style>
