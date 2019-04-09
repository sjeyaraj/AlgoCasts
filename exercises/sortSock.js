function sortSack(arr) {
    const sorted = arr.sort();
    let counter = 0;
    let i = 0;
    while (i < sorted.length) {

        if (sorted[i] === sorted[i + 1]) {
            counter++;
            i += 2;
        } else {
            i++;
        }
    }
    return counter;

}

sortSack([10, 20, 20, 10, 10, 30, 50, 10, 20])