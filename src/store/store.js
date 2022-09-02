import { defineStore } from "pinia";
import { VUE_APP_REQUEST_ADDRESS } from "../.env";

export const useNumberStore = defineStore({
  id: "numbers",
  state: () => ({ array: [] }),
  actions: {
    async cards() {
      try {
        await fetch(VUE_APP_REQUEST_ADDRESS)
          .then((res) => res.json())
          .then((data) => {
            this.array = data;
          });
      } catch (error) {
        console.error(error);
      }
    },
    async add() {
      const newObject = {
        num: Math.floor(Math.random() * 1000),
        id: Date.now() + Math.random() * 1000,
      };
      try {
        await fetch(VUE_APP_REQUEST_ADDRESS, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([newObject]),
        });
        this.array.push(newObject);
      } catch (error) {
        console.error(error);
      }
    },
    sort() {
      this.array.sort((a, b) => a.num - b.num);
      localStorage.setItem("card", JSON.stringify(this.array));
    },
    async remove(id) {
      try {
        await fetch(VUE_APP_REQUEST_ADDRESS, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([id]),
        });
        this.array = this.array.filter((elem) => elem.id != id);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
