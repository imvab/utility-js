const tail = require('./tail');

describe('Tail', () => {

    it('Tail of empty array is undefined', () => {
        var arr = []
        expect(tail(arr)).toEqual(undefined);
    });

    it('Should Return Rest of the Elements of Array', () => {
        var arr = [7, 8, 9, 0]
        expect(tail(arr)).toEqual([8, 9, 0]);
    });

})