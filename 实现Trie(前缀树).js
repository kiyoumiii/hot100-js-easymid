class TrieNode {
    constructor() {
        this.children = {}; // 存储子节点
        this.isEnd = false; // 标记是否是单词的结尾
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // 根节点
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char]; // 移动到子节点
        }
        node.isEnd = true;
        // 遍历完成后，将最后一个节点的 isEnd 设为 true，表示这是一个完整的单词。
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if(!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEnd; 
        // 检查是否是单词的结尾,false代表单词不存在（只是某个单词的前缀）
    }

    startWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false; // 字符不存在，则直接返回false
            }
            node = node.children[char]; // 移动到子节点
        }
        // 遍历完就是所有字符都存在，那么前缀存在
        return true;
    }

}