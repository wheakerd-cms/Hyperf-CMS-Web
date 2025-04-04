<script lang="tsx">
import { defineComponent, unref, type VNode } from 'vue';
import { Icon } from '@iconify/vue';

import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';

export default defineComponent(
    (
        props: {
            data: Array<any>,
        },
    ) => {
        const renderMenuItem = (item: {
            meta: {
                title: string,
                icon?: string,
            },
            name: string,
            path: string,
            children?: Array<any>,
        }): VNode => {
            const { title, icon } = item?.meta || {};
            return <ElMenuItem index={item.name}>
                {{
                    title: () => <>
                        {icon && <Icon icon={icon} />}
                        <span class="ms-2">{title}</span>
                    </>,
                }}
            </ElMenuItem>;
        };

        const render = (items: Array<{
            meta: {
                title: string,
                icon?: string,
            },
            name: string,
            path: string,
            children?: Array<any>,
        }>): Array<VNode> => Object.entries(items).map(([, item]) => {
            const { meta, children } = item;
            const { title, icon } = meta || {};

            return children
                ? <ElSubMenu index={item.name}>
                    {{
                        title: () => <>
                            {icon && <Icon icon={icon} />}
                            <span class="ms-2">{title}</span>
                        </>,
                        default: () => render(children),
                    }}
                </ElSubMenu>
                : renderMenuItem(item);
        });

        return () => <ElMenu class="h-100">
            {
                render(unref(props.data))
            }
        </ElMenu>;
    }, {
        props: ['data'],
    },
);
</script>