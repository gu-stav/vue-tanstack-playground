<script setup lang="ts">
    import Box, { type BoxProps } from './Box.vue';

    export type FlexProps = Omit<BoxProps, 'display'> & {
        display?: 'flex';
        direction?: 'row' | 'column';
        gap?: string;
    };

    const props = withDefaults(defineProps<FlexProps>(), {
        display: 'flex'
    })

    const { display, ...restProps } = props;
</script>

<template>
    <Box class="display-flex" :class="{ 'direction-column': props.direction === 'column', 'direction-row': props.direction === 'row', 'gap-1': props.gap === '1' }" v-bind="restProps">
        <slot />
    </Box>
</template>

<style scoped>
    .display-flex {
        display: flex;
    }

    .direction-column {
        flex-direction: column;
    }

    .direction-row {
        flex-direction: row;
    }

    .gap-1 {
        gap: 10px;
    }
</style>
