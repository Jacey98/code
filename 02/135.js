/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    if (ratings.length === 1) return 1
    let num = ratings.length, candy = [0]
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) { 
            candy[i] = candy[i-1] + 1
        } else {
            candy[i] = 0
        }
    }
    num += candy[ratings.length - 1]
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1] && candy[i] <= candy[i+1]) { 
            candy[i] = candy[i+1] + 1
        }
        num += candy[i]
    }
    return num
};