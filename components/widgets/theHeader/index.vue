<template>
    <div ref="$nav">
        <WidgetsTheHeaderDesktop></WidgetsTheHeaderDesktop>
        <ClientOnly>
            <WidgetsTheHeaderMobile v-if="width < 991"></WidgetsTheHeaderMobile>
        </ClientOnly>
    </div>
</template>
<script setup>
import { useElementSize } from '@vueuse/core';
const $nav = ref(null);
const { width } = useElementSize($nav);
</script>