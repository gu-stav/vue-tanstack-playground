<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query';

  const { isLoading, data } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      return res.json();
    },
    gcTime: 0
  });
</script>

<template>
  <div v-if="isLoading">
    LOADING
  </div>

  <div v-if="!isLoading">
    {{ data }}
  </div>
</template>

<style>

</style>
