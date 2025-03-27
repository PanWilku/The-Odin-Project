export function analyzeArray(arr) {
    return {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: length(arr)
    }

}



function average(arr) {
    let result = 0;
    for(const num of arr) {
        result += num
    }
    result = result / arr.length
    return result;
}

function min(arr) {
    let min = Infinity;

    for(const num of arr) {
        if(num < min) {
            min = num;
        }
    }
    return min;
}

function max(arr) {
    let max = 0;
    for(const num of arr) {
        if(num > max) {
            max = num;
        }
    }
    return max;
}


function length(arr) {
    return arr.length;
}


console.log(analyzeArray([1,8,3,4,2,6]));