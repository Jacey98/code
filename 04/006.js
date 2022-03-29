/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let begin = 0, end = numbers.length-1
    while (begin < end) {
        let res = numbers[begin] + numbers[end]
        if (res < target) begin++
        else if (res > target) end--
        else return [begin, end]
    }
};