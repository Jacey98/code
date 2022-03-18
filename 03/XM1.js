/**
 * @param matrix string字符串一维数组 
 * @param versionA int整型 
 * @param versionB int整型 
 * @return int整型
 */
 function Git( matrix ,  versionA ,  versionB ) {
    // 转换为二维数组，每个节点对应一个一维数组
    let arr = matrix.map(a => a.split('').map(a => Number(a)))
    // 记录总节点数
    let len = arr[0].length
    return dfs(0, -1)
    
    // 递归计算最近公共祖先，root为当前节点，pre为上一个节点，初始化为-1方便计算
    function dfs(root, pre) {
        // 从节点对应的数组中查找，除了自己的父节点之外的其他相邻节点，即子节点，存为数组
        let one = findOne(root, pre)
        // 找到所需节点，则返回root
        if (root === versionA || root === versionB) return root
        let cur2 = null
        // 遍历所有子节点，找到所需节点就记录下来，如果找到了两个，就返回root
        for (let i of one) {
            let cur1 = dfs(i, root)
            if (cur1 && cur2) {
                return root
            } 
            if (cur1) cur2 = cur1
        }
        // 只找到一个或没找到，就返回cur2
        return cur2
    }
    
    function findOne(root, pre){
        let one = []
        for (let i = 0; i < len; i++) {
            if (arr[root][i] === 1 && i !== pre) one.push(i)
        }
        return one
    }
}
module.exports = {
    Git : Git
};