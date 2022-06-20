/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
    let len = graph.length
    let res = [], cur = [0]
    dfs(0)
    return res

    function dfs (start) {
        if (start === len-1) {
            res.push([...cur])
            return 
        }
        for (let i of graph[start]) {
            cur.push(i)
            dfs(i)
            cur.pop()
        }
    }
};