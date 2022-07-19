/**
 * 
 * @param A int整型一维数组 
 * @param B int整型一维数组 
 * @return void
 */
 function merge( A, m, B, n ) {
    let idx = m+n-1, i = m-1, j = n-1
    while (i >= 0 && j >= 0){
        A[idx--] = A[i] > B[j] ? A[i--] : B[j--]
    }
    if (j >= 0) {
        A.splice(0, idx+1, ...B.slice(0, j+1))
    }
}
module.exports = {
    merge : merge
};