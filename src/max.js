const max = (arr) => {
    if (arr.length == 0) return undefined;
    var max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }

    return max;
}
module.exports = max;