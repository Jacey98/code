/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
 var findItinerary = function(tickets) {
    tickets.sort((a, b) => a[1].localeCompare(b[1]))
    console.log(tickets)
    let res = ['JFK'], used = []
    dfs()
    return res

    function dfs() {
        if (res.length === tickets.length + 1) return true
        for (let i = 0; i < tickets.length; i++) {
            if (used[i] || tickets[i][0] !== res[res.length - 1]) continue
            res.push(tickets[i][1])
            used[i] = true
            if (dfs()) return true
            res.pop()
            used[i] = false
        }
    }
};