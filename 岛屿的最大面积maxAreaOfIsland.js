// 岛屿数量已经使用了DFS，这里使用BFS
// 广度优先搜索，用队列queue来实现，适合逐层扩展不会栈溢出；从起点开始，逐层扩展搜索范围
// 遍历网格中的每个点，如果当前点是1且未被访问过，启动BFS，标记所有相连陆地为已访问，并计算面积

var maxAreaOfIsland = function(grid) {
    if(!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }

    const direction = [[0,1], [1,0], [0,-1], [-1,0]];
    const r = grid.length;
    const c = grid[0].length;
    const visited = new Array(r).fill(false).map(() => new Array(c).fill(false));
    let maxArea = 0;

    const bfs = (x,y) => {
        let area = 0;
        const queue = [[x,y]];
        visited[x][y] = true;

        while (queue.length > 0) {
            const [curX, curY] = queue.shift(); //取出队列的第一个点
            area++;

            for (const [dx,dy] of direction) {
                const xNext = curX + dx;
                const yNext = curY + dy;
                if (xNext < 0 || xNext >= r || yNext < 0 || yNext >= c) {
                    continue; //越界要跳过
                }  
                if (!visited[xNext][yNext] && grid[xNext][yNext] === '1') {
                    visited[xNext][yNext] = true;
                    queue.push([xNext, yNext]);
                }
            }
        }

        return area;
    }

    // 遍历网络
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (!visited[i][j] && grid[i][j] === '1') {
                const area = bfs(i,j);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
}

// 测试用例
const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
let res = maxAreaOfIsland(grid);
console.log(res); // 输出: 4