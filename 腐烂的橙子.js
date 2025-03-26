// 找出所有腐烂橙子和新鲜橙子的位置，分别存储在集合rotten和fresh中
function orangesRotting(grid) {
    const row = grid.length;
    const col = grid[0].length;

    let fresh = 0;
    let q = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            }
            else if (grid[i][j] === 2) {
                q.push([i,j]);
            }
        }
    }

    let ans = 0;
    while (fresh && q.length) {
        ans++;
        const tmp = q;
        q = [];
        for (const [x,y] of tmp) {
            for (const [i,j] of [[x-1,y],[x+1,y],[x,y-1]]) {
                if ( 0<=i && i<m && 0<=j && j<n && grid[i][j] === 1) {
                    fresh--;
                    grid[i][j] = 2;
                    q.push([i,j]);
                }
            }
        }

        return fresh ? -1 : ans;
    }
}