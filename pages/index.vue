<template>
    <div>
        {{ msg }}
    </div>
</template>

<script lang="ts" setup>
    const { hello } = useServerFunctions();
    const msg = await hello("Nuxt 3");
</script>
