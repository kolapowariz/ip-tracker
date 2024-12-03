<script setup lang="ts">
import ArrowIcon from '../src/components/icons/IconArrow.vue';
</script>

<template>
  <header>
    <h1>IP Address Tracker</h1>

    <div class="input-container">
      <input type="text" name="address" id="address" />
      <button class="arrow">
        <ArrowIcon />
      </button>
    </div>

  </header>

</template>

<style scoped>
header {
  background-image: url('/public/pattern-bg-mobile.png');
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
}

input {
  display: block;
  position: absolute;
  height: 3.5rem;
  border-radius: 0.5rem;
  width: 20rem;
  font-size: larger;
  padding-left: 2rem;
  padding-right: 2rem;
}

.arrow {
  background-color: black;
  border: none;
  height: 3.5rem;
  width: 2rem;
  position: relative;
  left: 17.94rem;
}
</style>
