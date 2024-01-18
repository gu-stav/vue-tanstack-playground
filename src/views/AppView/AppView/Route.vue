<script setup lang="ts">
    import { inject } from 'vue';
    import { AuthenticatedUser } from '../../../symbols';

    const data = inject(AuthenticatedUser);
</script>

<template v-if="data">
    {{ data.data }}

    <button @click="data.refetch">
        Refetch
    </button>
</template>
