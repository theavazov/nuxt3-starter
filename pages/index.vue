<script setup lang="ts">
const { locale } = useI18n();

useHead({
  title: "Nuxt3",
});
</script>

<template>
  <div>
    <Header />
    <div>
      <h1>Hello Nuxt 3</h1>
      <p>locale: {{ locale }}</p>
    </div>
  </div>
</template>
