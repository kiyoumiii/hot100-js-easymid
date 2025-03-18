// 漏洞百出版
var rightSideView = function(root) {
    let levels = [];

    function travel(node,level) {
        if(levels.length === level) {
            levels.push([]);
        }
        levels[level].push(node.val);
        travel(node.left,level+1);
        travel(node.right,level+1);
    }

    travel(root,0);
    let res = [];
    for (let level of levels) {
        res.push(level[level.length-1]);
    }

    return res;
}

// 二刷-正确版
var rightSideView = function(root) {
    let levels = [];
    if (!root) { // 这个判空必须要有，没有就过不了
        return levels;
    }

    function travel(node,level) {
        if(levels.length === level) {
            levels.push([]);
        }
        levels[level].push(node.val);

        if (node.left) { // 左右子树的判存在必须要有，没有也会报错
            travel(node.left,level+1);
        }
        if (node.right) {
            travel(node.right,level+1);
        }
    }

    travel(root,0);
    let res = [];
    for (let level of levels) {
        res.push(level[level.length-1]);
    }

    return res;
};