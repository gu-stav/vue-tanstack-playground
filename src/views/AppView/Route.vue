<script setup lang="ts">
    import { useQuery } from '@tanstack/vue-query';
    import { defineProps, provide, computed } from 'vue';
    import { AuthenticatedUser} from '../../symbols';
    import { useAuth } from '../../lib/useAuth';

    const auth = useAuth();

    defineProps<{
        something: string;
    }>();

    const { data, isFetching, refetch } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

            await new Promise(resolve => setTimeout(() => {
                resolve(null);
            }, 1000))

            return res.json();
        },
        staleTime: 0
    });

    provide(AuthenticatedUser, {
        data,
        refetch,
    })
</script>

<template>
    <h1>Token {{ JSON.stringify(auth.token) }}</h1>

    <p v-if="isFetching">Loading</p>

    <router-view v-if="!isFetching" />
</template>
