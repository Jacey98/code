/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b) 
    let res = [], cur = [], len = nums.length, arr = new Array(len).fill(0)
    backtracking()
    return res

    function backtracking() {
        if (cur.length === len) {
            res.push([...cur])
            return
        }
        for (let i = 0; i < len; i++) {
            if (arr[i] === 1 ||(i !== 0 && nums[i] === nums[i-1] && arr[i-1] === 0)) continue
            arr[i] = 1
            cur.push(nums[i])
            backtracking()
            cur.pop()
            arr[i] = 0
        }
    }
};