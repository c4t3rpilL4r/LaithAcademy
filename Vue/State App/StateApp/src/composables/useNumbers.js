import { ref } from "vue";

export default function () {
    const numbers = ref([1, 2, 3, 4]);

    const addNumber = (num) => {
        return numbers.value.push(num);
    };

    const filterNumbers = (minNum) => {
        return numbers.value.filter((num) => num >= minNum);
    };

    return {
        numbers,
        addNumber,
        filterNumbers,
    };
}
