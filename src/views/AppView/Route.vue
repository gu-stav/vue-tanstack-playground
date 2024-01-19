<script setup lang="ts">
    import { useQuery } from '@tanstack/vue-query';
    import { defineProps, provide } from 'vue';
    import { AuthenticatedUser} from '../../symbols';
    import { useAuth } from '../../lib/useAuth';
    import { useApi } from '../../lib/useApi';

    const auth = useAuth();
    const { get } = useApi();

    defineProps<{
        something: string;
    }>();

    const { data, isFetching, refetch } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const data = await get<{ something: boolean }>('https://jsonplaceholder.typicode.com/posts/1');

            await new Promise(resolve => setTimeout(() => {
                resolve(null);
            }, 1000))

            return data;
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
