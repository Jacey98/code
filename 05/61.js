/**
  * 
  * @param numbers int整型一维数组 
  * @param target int整型 
  * @return int整型一维数组
  */
 function twoSum( numbers ,  target ) {
    let map = new Map()
    let len = numbers.length
    for (let i = 0; i < len; i++) {
        if (map.has(target - numbers[i])) return [1 + map.get(target - numbers[i]), 1 + i]
        map.set(numbers[i], i)
    }
}
module.exports = {
    twoSum : twoSum
};