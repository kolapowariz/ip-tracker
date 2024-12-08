<script setup lang="ts">
import MapView from '../src/components/MapView.vue';
import HeaderView from '../src/components/HeaderView.vue';
</script>

<template>
  <HeaderView />
  <MapView />

</template>

<style scoped>
header {
  background-image: url('/pattern-bg-mobile.png');
  height: 18rem;
}

header h1 {
  text-align: center;
  color: white;
  padding-top: 10px;
  font-weight: bold;
}

.loading {
  text-align: center;
  padding-top: 10px;
  font-weight: bold;
  font-size: 1.5rem;
}

.input-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.address {
  width: 20rem;
  height: 3rem;
  border-radius: 0.5rem;
  position: relative;
  font-size: larger;
  padding-left: 2rem;
  padding-right: 4rem;
  border: none;
}

.arrow {
  width: 3rem;
  background-color: black;
  border: none;
  position: absolute;
  margin-left: 17rem;
  height: 3rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  cursor: pointer;
}

.details {
  width: 20rem;
  height: 20rem;
  background-color: white;
  margin: 2rem auto;
  border-radius: 0.5rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  padding: 0.5rem 0;
}

.details section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.gray {
  color: gray;
  font-size: 0.7rem;
  font-weight: 700;
}

.black {
  color: black;
  font-size: 1rem;
  font-weight: 700;
}
</style>
