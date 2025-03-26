// 思路就是DFS深度优先搜索
// 如果遇到1，启动DFS，标记所有与之相连的陆地，使用一个visited数组记录哪些点已经访问
// 使用方向数组direction表示四个可能的移动方向上下左右

// 注意初始化visited数组的时候，千万不要用花括号包裹箭头函数右边的函数体，在单行的情况下可以省略花括号。因为如果省略花括号会自动将右边的值返回，如果有花括号就必须写return不然返回的就是undefined.

var numsIslands = function (grid) {
    if(!grid || grid.length === 0 || grid[0].length === 0) {
        return 0; //网格为空，返回0
    }

    const direction = [[0,1],[1,0],[0,-1],[-1,0]];  // 方向数组
    const r = grid.length;
    const c = grid[0].length;
    const visited = new Array(r).fill(false).map(() => new Array(c).fill(false));//注意初始化visited数组的方式
    let res = 0; //岛屿数量

    // dfs函数
    const dfs = (x,y) => {
        if (visited[x][y] || grid[x][y] === '0') {
            return; //如果已经访问过或者此处是水，直接返回，会回到上一层循环，千万不要写成continue
        }

        visited[x][y] = true;

        for (const [dx,dy] of direction) { //遍历四个方向，也就是遍历方向数组
            const xNext = x + dx;
            const yNext = y + dy;
            // 检查边界条件
            if (xNext < 0 || xNext >= r || yNext < 0 || yNext >= c) {
                continue; //越界要跳过
            }
            dfs(xNext, yNext); //递归调用DFS
        }
    }

    // 遍历，遇到没访问过的陆地节点就启动dfs函数
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (!visited[i][j] && grid[i][j] === '1') {
                res++;
                dfs(i,j);
            }
        }
    }
    return res;
}


// 测试用例
const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
let res = numsIslands(grid);
console.log(res); // 输出: 3


// 二刷

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const r = grid.length;
    const c = grid[0].length;
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    let visited = new Array(r).fill(false).map(() => new Array(c).fill(false));
    let res = 0;

    const dfs = (x,y) => {
        if (visited[x][y] || grid[x][y] === '0') {
            return;
        }
        visited[x][y] = true;
        for (const [dx,dy] of directions) {
            let nextx = x + dx;
            let nexty = y + dy;
            if (nextx < 0 || nextx >= r || nexty < 0 || nexty >= c) {
                continue;
            }
            dfs(nextx,nexty);
        }
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if(!visited[i][j] && grid[i][j] === '1') {
                res++;
                dfs(i,j);
            }
        }
    }

    return res;
};