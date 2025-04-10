<script lang="tsx">
import {Icon} from '@iconify/vue';
import {defineComponent} from 'vue';
import {ElButton} from 'element-plus';
import Avatar from "./Avatar";

export default defineComponent((
        props: {},
    ) => {
        const buttonIcon = (
            icon: string,
            type: 'curve' | 'round' = 'curve',
        ) => <>
            <ElButton text={true}
                      size={'default'}
                      class={
                          'border-0 mx-1 d-flex justify-content-center align-items-center '
                          + (type === 'curve' ? 'rounded-1' : 'rounded-circle')
                      }
                      style="width: 32px; height: 32px;"
            >
                <Icon icon={icon}
                      width={18}
                      height={18}
                      color="#000000"
                />
            </ElButton>
        </>;

        return () => <>
            <div class="border-bottom border-1 d-flex align-items-center justify-content-between px-2"
                 style="height: 50px"
            >
                <div class="d-flex flex-row">
                    {buttonIcon('ic:outline-menu')}
                    {buttonIcon('ic:outline-refresh')}
                </div>
                <div class="d-flex flex-row">
                    {buttonIcon('uil:setting', 'round')}
                    {buttonIcon('line-md:sunny-filled', 'round')}
                    {buttonIcon('ion:moon-sharp', 'round')}
                    {buttonIcon('mingcute:fullscreen-line', 'round')}
                    {buttonIcon('mingcute:fullscreen-exit-fill', 'round')}
                    <Avatar/>
                </div>
            </div>
        </>;
    },
    {},
);
</script>
