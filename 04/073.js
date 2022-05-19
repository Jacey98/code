/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    let l = 1, r = Math.max(...piles), res = r
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        let count = 0
        for (let item of piles) {
            count += Math.ceil(item / mid)
        }
        if (count <= h) {
            res = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return res
};