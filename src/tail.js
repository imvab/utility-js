const tail = (arr) => {
    if (arr.length == 0) return undefined;
    return arr.slice(1, arr.length);
}

module.exports = tail