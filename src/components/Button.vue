<script setup lang="ts">
    import { defineProps } from 'vue';

    import Box from './Box.vue';
    import type { BoxProps } from './Box.vue';

    export type ButtonProps = BoxProps & {
        type?: 'submit' | 'button'
    };

    const props = withDefaults(defineProps<ButtonProps>(), {
        type: 'button'
    })
</script>

<template>
    <Box asChild display="inline-block">
        <button v-bind="props">
            <slot />
        </button>
    </Box>
</template>

<style scoped>
    button {
        background: red;
    }
</style>
