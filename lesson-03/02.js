// При помощи метода indexOf() найди массиве апельсин. Если найдешь, 
// напиши в консоли: «Ура! нашел», а если не нашел «Придется поискать в другом магазине…»
// ❗Массив изменять нельзя
// ❗Кавычки в массиве должны быть двойными.


const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function findApelsin (array){{
        if (array.indexOf("апельсин") != -1){
            return "Ура! нашел"
        } else {
            return "Придется поискать в другом магазине…"
        }
    }
}

console.log(findApelsin(words))