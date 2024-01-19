<script setup lang="ts">
    import { defineProps } from 'vue';

    import Box from './Box.vue';
    import type { BoxProps } from './Box.vue';

    export type ButtonProps = BoxProps & {
        type?: 'submit' | 'button'
    };

    const props = withDefaults(defineProps<ButtonProps>(), {
        display: 'inline-block',
        type: 'button'
    })
</script>

<template>
    <Box v-bind="props" asChild>
        <button>
            <slot />
        </button>
    </Box>
</template>

<style scoped>
    button {
        background: red;
        color: green
    }
</style>
