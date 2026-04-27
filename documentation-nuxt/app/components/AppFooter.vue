<script setup lang="ts">
const { footer } = useAppConfig();
</script>

<template>
  <UFooter>
    <template #left>
      Crafted by
      <a
        href="https://codecanyon.net/user/george_fx"
        target="_blank"
        class="underline hover:text-primary"
      >
        George_Fx
      </a>
      • © {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode" />

      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
