const min = (arr) => {
    if (arr.length == 0) return undefined;
    var min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }

    return min;
}
module.exports = min;