<script setup lang="ts">
    import { ref } from 'vue';
    import { AuthenticatedUser, injectStrict } from '../../../symbols';
    import Button from '../../../components/Button.vue';
    import Box from '../../../components/Box.vue';
    import { useAuth } from '../../../lib/useAuth';
    import Reactive from '../../../components/Reactive.vue';
    import Flex from '../../../components/Flex.vue';

    const auth = useAuth();
    const reactive = ref('asdasdas');
    const data = injectStrict(AuthenticatedUser);

    function updateReactive(value) {
        reactive.value = value;
    }
</script>

<template v-if="data">
    {{ data.data }}

    <Reactive :reactive="reactive" reactiveStatic="reactive">
        {{ reactive }}
    </Reactive>

    <Box asChild display="block">
        <p>
            This is something
        </p>
    </Box>

    <Flex direction="column" gap="1">
        <Button type="submit" @click="data.refetch" display="block">
            Refetch
        </Button>

        <Button type="button" @click="auth.update('some-token')">
            Update token
        </Button>

        <Button type="button" @click="updateReactive('test')">
            Update reactive value
        </Button>
    </Flex>
</template>
