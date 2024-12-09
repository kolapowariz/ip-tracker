<script setup lang="ts">
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, ref } from 'vue';
import type { Location } from './HeaderView.vue';
import { getIpLocation } from '@/services/ip';

const location = ref<Location | null>(null);
const data = await getIpLocation();
if (data) {
  location.value = data;
  // console.log(location.value);
} else {
  console.error('Failed to fetch IP location');
}

console.log(location.value);
const mapRef = ref(null as unknown as string | HTMLElement);

onMounted(() => {
  const map = L.map(mapRef.value).setView([location.value?.location.lat ?? 0, location.value?.location.lng ?? 0], 17);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add a marker
  L.marker([location.value?.location.lat ?? 0, location.value?.location.lng ?? 0])
    .addTo(map)
    .bindPopup(location.value?.location.city ?? '')
    .openPopup();
});

</script>


<template>
  <div id="map" ref="mapRef" class="map-container"></div>
</template>


<style scoped>
.map-container {
  height: 67vh;
  width: 100%;
  z-index: -1;
}
</style>
