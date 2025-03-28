// LRU缓存，用Map数据结构实现
// 由于 Map 会记住插入顺序，第一个元素就是最近最少使用的元素。
// 不管是push还是get方法，已经存在就先删掉，这样它才会变成最近使用的

var LRUCahce = function(capacity) {
    this.limit = capacity;
    this.cache = new Map();
}

// get方法：如果关键字存在于缓存中，则返回关键字的值，否则返回-1
// put方法：如果关键字key已经存在，则变更其数据值value，如果不存在，则向缓存中插入该组key-value
// put方法补充： 如果插入操作导致关键字数量超过了capacity,则应该逐出最久未使用的关键字

LRUCahce.prototype.get = function(key) {
    let tmp;

    if (this.cache.has(key)) {
        tmp = this.cache.get(key); //获取值

        this.cache.delete(key); // 删除旧键值对
        this.cache.set(key, tmp); // 重新插入，这样的话它就成为最近使用的
    }

    return tmp ?? -1; // ??的意思是tmp是否是null和undefined，如果是那么就返回-1
}

LRUCahce.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key); // 已经存在就先删掉，后面插入的时候才是最近使用的
    }

    this.cache.set(key,value); // 插入新的键值对

    if (this.cache.size > this.limit) { // this.cache是有size属性的
        this.cache.delete(this.cache.keys().next().value); // keys()返回一个迭代器，next()获取迭代器的第一个值（第一个键），value返回第一个键的值
    }
}

const cache = new LRUCahce(2);

cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));
cache.put(3,3);
console.log(cache.get(2));
cache.put(4,4);
console.log(cache.get(1));

// 三刷

var LRUCache = function(capacity) {
    this.map = new Map();
    this.limit = capacity;
};

LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let tmp = this.map.get(key);
        this.map.delete(key);
        this.map.set(key,tmp);
        return tmp;
    }
    else {
        return -1;
    }
};

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.map.delete(key);
        this.map.set(key,value);
    }
    else {
        this.map.set(key,value);
        if (this.map.size > this.limit) {
            this.map.delete((this.map.keys().next().value));
        }  
    }
};

// 再写一遍
var LRUCache = function(capacity) {
    this.map = new Map();
    this.limit = capacity;
};

LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        this.map.delete(key);
        this.map.set(key,tmp);
        return tmp;
    }
    else {
        return -1;
    }
};

LRUCache.prototype.put = function(key,value) {
    if (this.map.has(key)) {
        this.map.delete(key);
        this.map.set(key,value);
    }
    else {
        this.map.set(key,value);
        if (this.map.size > this.limit) {
            this.map.delete((this.map.keys().next().value));
        }
    }
}
