function FindGreatestSumOfSubArray(array) {
    let dp = array[0], res = array[0]
    for (let i = 1; i < array.length; i++) {
        dp = Math.max(dp + array[i], array[i])
        res = Math.max(res, dp)
    }
    return res
}
module.exports = {
    FindGreatestSumOfSubArray : FindGreatestSumOfSubArray
};