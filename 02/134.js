/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    let cur = 0, total = 0, start = 0
    for (let i = 0; i < gas.length; i++) {
        cur += gas[i] - cost[i]
        total += gas[i] - cost[i]
        if (cur < 0) {
            start = i + 1
            cur = 0
        }
    }
    if (total < 0) return -1
    return start
};