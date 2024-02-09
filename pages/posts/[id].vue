<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

useHead({
  title: `Nuxt3 | Post with id: ${id}`,
});
</script>

<template>
  <div>
    <h1>post</h1>
    {{ id }}
  </div>
</template>
