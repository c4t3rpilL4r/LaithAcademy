import { defineStore } from "pinia";

export const useNumbersStore = defineStore("numbers", {
    state: () => {
        return {
            numbers: [1, 2, 3, 4],
        };
    },
    actions: {
        addNumber(num) {
            this.numbers.push(num);
        },
    },
    getters: {
        doubleNumber: (state) => {
            return state.numbers.map((num) => num * 2);
        },
        filterNumber: (state) => {
            return (minNumber) =>
                state.numbers.filter((num) => num >= minNumber);
        },
    },
});
