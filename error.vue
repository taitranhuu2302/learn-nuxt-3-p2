<template>
    <div class="flex h-screen items-center justify-center flex-col gap-5">
        <p>Message: {{ error?.message }}</p>
    </div>
</template>

<script setup lang="ts">
// use Error
const error = useError()
console.log(error.value);
</script>

<style scoped>

</style>