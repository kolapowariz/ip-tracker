<script setup lang="ts">
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const mapRef = ref(null);

onMounted(() => {
  const map = L.map(mapRef.value).setView([6.52563, 3.37761], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add a marker
  L.marker([6.52563, 3.37761])
    .addTo(map)
    .bindPopup('A pretty marker.')
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
