/**
 * Initialize your data structure here.
 */
 var Trie = function() {
    this.set = new Set()
    this.arr = new Array(26)
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.set.add(word)
    let cur = this.arr
    for (let i of word) {
        let code = i.charCodeAt() - 'a'.charCodeAt()
        if (!cur[code]) cur[code] = new Array(26)
        cur = cur[code]
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.set.has(word)
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let cur = this.arr
    for (let i of prefix) {
        let code = i.charCodeAt() - 'a'.charCodeAt()
        if (!cur[code]) return false
        cur = cur[code]
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */