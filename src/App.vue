<script setup lang="ts">
import HeaderView from '../src/components/HeaderView.vue';
import MapView from '../src/components/MapView.vue';
</script>

<template>
  <HeaderView />
  <Suspense>
    <MapView />
  </Suspense>

</template>

<style scoped></style>
