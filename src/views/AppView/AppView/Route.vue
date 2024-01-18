<script setup lang="ts">
    import { inject } from 'vue';
    import { AuthenticatedUser } from '../../../symbols';
    import Button from '../../../components/Button.vue';
    import Box from '../../../components/Box.vue';
    import { useAuth } from '../../../lib/useAuth';

    const auth = useAuth();

    const data = inject(AuthenticatedUser);
</script>

<template v-if="data">
    {{ data.data }}

    <Box asChild display="block">
        <p>
            This is something
        </p>
    </Box>

    <Button type="submit" @click="data.refetch" display="inline-block">
        Refetch
    </Button>

    <button type="button" @click="auth.update('some-token')" display="inline-block">
        Update token
    </button>
</template>
