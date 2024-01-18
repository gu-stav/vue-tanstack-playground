<script setup lang="ts">
    import { Primitive, type PrimitiveProps } from 'radix-vue'

    export type BoxProps = PrimitiveProps & {
        display?: 'inline-block' | 'block'
    };

    const { display, ...props } = withDefaults(defineProps<BoxProps>(), {
        display: undefined,
        asChild: false
    })
</script>

<template>
    <Primitive :class="{ 'display-inline-block': display === 'inline-block', 'display-block': display === 'block' }" v-bind="props">
        <slot />
    </Primitive>
</template>

<style scoped>
    .display-inline-block {
        display: inline-block;
    }

    .display-block {
        display: block;
    }
</style>
