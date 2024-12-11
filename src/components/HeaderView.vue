<script setup lang="ts">
import { getIpLocation } from '@/services/ip';
import { onMounted, ref } from 'vue';
import type { Location } from '../types';
import ArrowIcon from './icons/IconArrow.vue';

const location = ref<Location | null>(null);

onMounted(async () => {
  const data = await getIpLocation();
  if (data) {
    location.value = data;
  } else {
    console.error('Failed to fetch IP location');
  }
});

</script>


<template>
  <header>
    <h1>IP Address Tracker</h1>

    <section class="input-container" v-if="location">
      <input type="text" name="address" id="address" class="address" :value="location.ip" />
      <button class="arrow">
        <ArrowIcon />
      </button>
    </section>
    <div class="details" v-if="location">
      <section>
        <p class="gray">IP ADDRESS</p>
        <p class="black">{{ location.ip }}</p>
      </section>
      <section>
        <p class="gray">LOCATION</p>
        <p class="black">{{ location.location.city }}</p>
        <p class="black">{{ location.location.region }}</p>
        <p class="black">{{ location.location.country }}</p>
      </section>
      <section>
        <p class="gray">TIMEZONE</p>
        <p class="black">{{ location.location.timezone }}</p>
      </section>
      <section>
        <p class="gray">ISP</p>
        <p class="black">{{ location.isp }}</p>
      </section>
      <section>
        <p class="gray">LAT</p>
        <p class="black">{{ location.location.lat }}</p>
      </section>
      <section>
        <p class="gray">LNG</p>
        <p class="black">{{ location.location.lng }}</p>
      </section>
    </div>
    <div v-else>
      <p class="loading">Loading your location...</p>
    </div>

  </header>
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

@media (min-width: 768px) {
  header {
    background-image: url('/pattern-bg-desktop.png');
    height: 15rem;
  }

  .details {
    width: 80%;
    height: 8rem;
    background-color: white;
    margin: 2rem auto;
    border-radius: 0.5rem;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 1rem;
    padding: 1rem 1rem;
  }

  .details section {
    border-right: 0.5px solid gray;
  }

}
</style>
