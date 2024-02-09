<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  <header>
    <nav>
      <NuxtLink :to="localePath('/')">Home</NuxtLink>
      <NuxtLink :to="localePath('/about')">About</NuxtLink>
    </nav>
    <div>
      <NuxtLink
        v-for="{ code, name } in locales"
        :key="code"
        :to="switchLocalePath(code)"
      >
        {{ name }}
      </NuxtLink>
    </div>
  </header>
</template>
