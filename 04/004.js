/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let sum = 0, res = 0
    for (let i = 31; i >= 0; i--) {
        for (let value of nums) {
            if (value & (1 << i)) sum++ 
        }
        res += (sum % 3) << i
        sum = 0
    }
    return res
};