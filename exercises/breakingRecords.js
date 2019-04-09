function breakingRecords(array) {
    let minCounter = 0;
    let maxCounter = 0;

    let max = array[0];
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            maxCounter++;
            max = array[i];
        }

        if (array[i] < min) {
            minCounter++;
            min = array[i]
        }
    }

    return [maxCounter, minCounter]

}
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])