import { defineStore } from "pinia";

export const useNumberStore = defineStore({
  id: "numbers",
  state: () => ({ array: [] }),
  actions: {
    async cards() {
      try {
        await fetch(" http://localhost:3000")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.array = data;
          });
      } catch (error) {
        console.error(error);
      }
    },
    async add() {
      this.array.push({
        num: Math.floor(Math.random() * 1000),
        id: Date.now() + Math.random() * 1000,
      });
      try {
        const test = await fetch("http://localhost:3000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([this.array[this.array.length - 1]]),
        });
        const result = await test.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
    sort() {
      this.array.sort((a, b) => a.num - b.num);
      localStorage.setItem("card", JSON.stringify(this.array));
    },
    async remove(id) {
      this.array = this.array.filter((elem) => elem.id != id);

      try {
        const test = await fetch("http://localhost:3000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([id]),
        });
        const result = await test.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
