// Удали все нечетные цифры в двухмерном массиве.
// Полученный результат выведи в консоль

const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

function fff(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 !== 0){
                array[i].splice(j,1)
            }    
        } 
    }
    return array
}

console.log(fff(numbers))