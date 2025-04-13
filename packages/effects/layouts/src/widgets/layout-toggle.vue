<script lang="ts" setup>
import type {AuthPageLayoutType} from '@vben/types';

import type {VbenDropdownMenuItem} from '@vben-core/shadcn-ui';
import {VbenDropdownRadioMenu, VbenIconButton} from '@vben-core/shadcn-ui';

import {computed} from 'vue';

import {InspectionPanel, PanelLeft, PanelRight} from '@vben/icons';
import {preferences, updatePreferences, usePreferences,} from '@vben/preferences';

defineOptions({
    name: 'AuthenticationLayoutToggle',
});

const menus = computed((): VbenDropdownMenuItem[] => [
    {
        icon: PanelLeft,
        label: '居左',
        value: 'panel-left',
    },
    {
        icon: InspectionPanel,
        label: '居中',
        value: 'panel-center',
    },
    {
        icon: PanelRight,
        label: '居右',
        value: 'panel-right',
    },
]);

const {authPanelCenter, authPanelLeft, authPanelRight} = usePreferences();

function handleUpdate(value: string) {
    updatePreferences({
        app: {
            authPageLayout: value as AuthPageLayoutType,
        },
    });
}
</script>

<template>
    <VbenDropdownRadioMenu
        :menus="menus"
        :model-value="preferences.app.authPageLayout"
        @update:model-value="handleUpdate"
    >
        <VbenIconButton>
            <PanelRight v-if="authPanelRight" class="size-4"/>
            <PanelLeft v-if="authPanelLeft" class="size-4"/>
            <InspectionPanel v-if="authPanelCenter" class="size-4"/>
        </VbenIconButton>
    </VbenDropdownRadioMenu>
</template>
