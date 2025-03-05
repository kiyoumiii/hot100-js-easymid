var maxAreaOfIsland = function(grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }

    const direction = [[0,1], [1,0], [0,-1], [-1,0]];
    const r = grid.length;
    const c = grid[0].length;
    const visited = new Array(r).fill(false).map(() => new Array(c).fill(false));
    let maxArea = 0;

    const dfs = (x,y) => {
        if(x<0 || x>=r || y<0 || y>=c || visited[x][y] || grid[x][y] === '0') {
            return 0; //这里千万不能return;不然直接return成undefined了
        }

        visited[x][y] = true;
        let area = 1; //岛屿面积初始化为1
        // 递归探索4个方向
        for (const [dx,dy] of direction) {
            const xNext = x + dx;
            const yNext = y + dy;
            area += dfs(xNext, yNext); //探索一个陆地就加1，这样area就逐渐更新了
        }
        return area;
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            const area = dfs(i,j);
            maxArea = Math.max(maxArea, area); //遍历期间，边遍历边找最大的岛屿
        }
    }

    return maxArea;
}