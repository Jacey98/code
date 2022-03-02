/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
    people.sort((a, b) => b[1] - a[1])
    people.sort((a, b) => a[0] - b[0])
    for (let i = people.length - 2; i >= 0; i--) {
        let num = people[i][1]
        if (num > 0) {
            people = people.slice(0, i).concat(people.slice(i+1, i+num+1), [people[i]], people.slice(i+num+1))
        }
    }
    return people
};
console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))