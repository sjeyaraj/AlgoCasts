function bonAppetit(arr, k, paid) {
    let actualPrice = 0;
    for (let i = 0; i < arr.length; i++) {

        if (i !== k) {
            actualPrice += arr[i];
        }
    }

    if ((actualPrice / 2) === paid) {
        return "Bon";
    } else {
        return paid - (actualPrice / 2);
    }


}


bonAppetit([3, 10, 2, 9], 1, 7)