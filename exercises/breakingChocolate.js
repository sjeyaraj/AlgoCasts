function breakingChocolate(array, m, d) {

    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = i; j < m + i; j++) {
            sum += array[j];
        }
        console.log(sum);
        if (sum === d) {
            counter++;
        }
    }
    return counter;
}

breakingChocolate([1, 2, 1, 3, 2], 2, 3)