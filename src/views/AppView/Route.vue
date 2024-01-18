<script setup lang="ts">
    import { useQuery } from '@tanstack/vue-query';
    import { defineProps, provide } from 'vue';
    import { AuthenticatedUser} from '../../symbols';

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
    <p v-if="isFetching">Loading</p>

    <router-view v-if="!isFetching" />
</template>
