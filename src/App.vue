<template>
  <div class="app">
    <div class="main">
      <HeaderComponent />
      <div class="container">
        <CardComponent :numbersArray="$state.array" />
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
import HeaderComponent from "./component/HeaderComponent.vue";
import CardComponent from "./component/CardComponent.vue";

export default {
  setup() {
    const number = useNumberStore();

    number.cards();

    const { add, sort, $state } = number;
    return { add, sort, $state };
  },
  components: { HeaderComponent, CardComponent },
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

.container {
  display: grid;
  width: 100%;
  height: 80%;
  border-bottom: 1px solid black;
  overflow-y: auto;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 10px 12%;
}
.footer {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
