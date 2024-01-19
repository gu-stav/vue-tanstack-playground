<script setup lang="ts">
    import { defineProps } from 'vue';

    const { reactive, reactiveStatic } = defineProps<{
        reactive: string;
        reactiveStatic: string;
    }>();
</script>

<template>
    <p>Reactive: {{ JSON.stringify(reactive) }}</p>
    <p>reactiveStatic: {{ JSON.stringify(reactiveStatic) }}</p>

    <slot />
</template>
