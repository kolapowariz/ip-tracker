<script setup lang="ts">
import { getIpLocation as fetchIpLocation } from '@/services/ip';
import { ref } from 'vue';
import ArrowIcon from '../src/components/icons/IconArrow.vue';

const address = ref('');

const getIpLocation = async (event: MouseEvent) => {
  event.preventDefault();
  await fetchIpLocation(address.value);
  
};
</script>

<template>
  <header>
    <h1>IP Address Tracker</h1>

    <section class="input-container">
      <input type="text" name="address" id="address" class="address" />
      <button class="arrow" @click="getIpLocation">
        <ArrowIcon />
      </button>
    </section>

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
</style>
