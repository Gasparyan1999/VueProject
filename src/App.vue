<template>
  <div class="app">
    <button v-on:click="increment">+</button>
    <div class="container">
      <h1>{{ $state.count }}</h1>
    </div>
    <button v-on:click="decrement">-</button>
  </div>
</template>

<script>
import { useCounterStore } from "./store/store";
export default {
  setup() {
    const counter = useCounterStore();
    const { increment, decrement, $state } = counter;

    return { increment, decrement, $state };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  display: flex;
  width: 400px;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: solid 1px black;
  row-gap: 10px;
}
button {
  display: flex;
  width: 120px;
  height: 70px;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  cursor: pointer;
}
.container {
  display: flex;
  width: 240px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border: solid 1px green;
}
</style>
