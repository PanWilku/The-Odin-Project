import {analyzeArray} from "./analyze-array.js";


test('object has 4 properties', () => {
    expect(Object.keys(analyzeArray([3,4,5,6,7,11])).length).toBe(4);
});


test('average min max length values are correct', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
});