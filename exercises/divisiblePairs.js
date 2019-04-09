function divisibleSumPairs(array, n, k) {
    let counter = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((array[i] + array[j]) % k === 0) {
                counter++;
            }
        }

    }

    return counter;

}

divisibleSumPairs([1, 3, 2, 6, 1, 2], 6, 3)