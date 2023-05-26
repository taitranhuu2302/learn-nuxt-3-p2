<script setup>
import { useHydration } from "#app";
import { useCounterStore } from "~/stores/useCounterStore";

// Using Pinia Store
const store = useCounterStore();

// // App Config
// const appConfig = useAppConfig();
// console.log(`App Config: `, appConfig.author); // Tran Huu Tai

// // useAsyncData
// const { data: asyncData } = await useAsyncData(
//   "mountains",
//   () => $fetch("https://api.nuxtjs.dev/mountains")
// );
// console.log(`useAsyncData: `, asyncData.value);

// // useCookie
// const token = useCookie('token')
// token.value = 'Tran Huu Tai'
// console.log(`useCookie: `, token.value);

// // useFetch
// const { data: fetchData } = await useFetch('https://api.nuxtjs.dev/mountains',{
//     query: { param1: 'value1' }
// })
// console.log(`useFetch: `,fetchData.value)

// // useHeadSafe
// useHeadSafe({
//   script: [
//     { id: 'xss-script', innerHTML: 'alert("xss")' }
//   ],
//   meta: [
//     { 'http-equiv': 'refresh', content: '0;javascript:alert(1)' }
//   ]
// })

// // useHead
// useHead({
//     title: 'Tran Huu Tai'
// })

// // useLazyAsyncData
// const { data: lazyAsyncData } = await useLazyAsyncData("mountains-lazy", () =>
//   $fetch("https://api.nuxtjs.dev/mountains")
// );
// console.log(lazyAsyncData.value)

// // useLazyFetch
// const { data: fetchLazyData } = await useLazyFetch('https://api.nuxtjs.dev/mountains',{
//     query: { param1: 'value1' }
// })
// console.log(`useLazyFetch: `, fetchLazyData.value)

// // useNuxtApp
// const nuxtApp = useNuxtApp()
// nuxtApp.provide('hello', (name) => `Hello ${name}!`)
// console.log(nuxtApp.$hello('name'))

// // useNuxtData
// await useFetch('https://api.nuxtjs.dev/mountains', { key: 'mountains-key' })
// const {data: mountains} = useNuxtData('mountains-key')
// console.log(mountains.value)

// // useRequestEvent
// const event = useRequestEvent()
// console.log(event) // In the browser, useRequestEvent will return undefined. 

// // useRequestHeaders
// const headers = useRequestHeaders(['cookie'])
// console.log(headers) // In the browser, useRequestHeaders will return an empty object

// // useRequestURL
// const url = useRequestURL()
// console.log(url);

// // useRoute
// const route = useRoute()
// console.log(route);

// // useRouter
// const router = useRouter()
// router.back();
// router.forward();
// router.go();
// router.push({ path: "/test" });

// // useRuntimeConfig
// const config = useRuntimeConfig()
// console.log(config.apiSecret); // is only accessible on the server-side.
// console.log(config.public.apiPublic);

// // useSeoMeta
// useSeoMeta({
//   title: 'My Amazing Site',
//   ogTitle: 'My Amazing Site',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })

// // useState
// const testState = useState('test', () => 'Tran Huu Tai')
// console.log(testState.value);
</script>

<template>
  <div id="root">
    <div class="flex flex-col items-center gap-10">
      <p>{{ store.count }}</p>
      <div class="flex gap-2.5 items-center">
        <button @click="store.decrement">-</button>
        <button @click="store.reset">Reset</button>
        <button @click="store.increment">+</button>
        <nuxt-link to="/test">TEST</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
#root {
  @apply h-screen flex justify-center items-center;
}
button {
  @apply px-3 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white;
}
</style>
