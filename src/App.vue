<template>
  <div class="app">
    <div class="main">
      <div class="header">
        <button v-on:click="add">Add Card</button>
        <button v-on:click="sort">Sort Cards</button>
      </div>
      <div class="container">
        <MyCard :numbers="$state.array" />
      </div>
      <div class="footer">
        <h4>Learning SolicyTask</h4>
      </div>
    </div>
    <div class="instruction">
      <h3>
        Press the "Add Card" button to add the new Card.Use the "Sort Cards"
        button to sort the Cards by the increase. Press an X icon on the top
        right to delete them
      </h3>
    </div>
  </div>
</template>

<script>
import { useNumberStore } from "./store/store";
import MyCard from "./component/MyCard.vue";
export default {
  setup() {
    const number = useNumberStore();
    const { add, sort, $state } = number;
    return { add, sort, $state };
  },
  components: { MyCard },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  justify-content: center;
}
.app {
  display: flex;
  width: 700px;
  height: 700px;
  border: solid 1px black;
}
.instruction {
  display: flex;
  width: 150px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  padding: 15px;
}
.main {
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 100%;
}
.header {
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  border-bottom: solid 1px black;
}
button {
  margin-left: 40px;
  background-color: white;
  width: 100px;
  height: 45px;
  cursor: pointer;
}
.container {
  display: grid;
  width: 100%;
  height: 520px;
  border-bottom: 1px solid black;
  overflow-y: auto;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding-top: 10px;
  padding-right: 12%;
  padding-left: 12%;
  padding-bottom: 10px;
}
.footer {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
