<template>
  <div>{{ pending }}</div>
</template>

<script setup>
const { data: asyncData, pending } = await useLazyAsyncData("mountains", () =>
  $fetch("https://api.nuxtjs.dev/mountains"),
);
console.log(`useAsyncData: `, pending.value);
console.log(`useAsyncData: `, asyncData.value);

</script>

<style lang="scss" scoped></style>
