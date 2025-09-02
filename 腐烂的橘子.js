// 题目要求计算所有新鲜橘子（1）被腐烂橘子（2）感染所需的最少时间（分钟数），如果无法全部感染则返回 -1。
// 找出所有腐烂橙子和新鲜橙子的位置，分别存储在集合rotten和fresh中
function orangesRotting(grid) {
    const m = grid.length;    // 网格的行数（修正：统一用 m 和 n，避免 row/col 混淆）
    const n = grid[0].length; // 网格的列数

    let fresh = 0; // 记录新鲜橘子的数量
    let q = [];    // 队列，存储腐烂橘子的位置（用于 BFS）

    // 遍历网格，统计新鲜橘子数量（fresh）和初始腐烂橘子的位置（q）
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                fresh++; // 如果是新鲜橘子，计数增加
            }
            else if (grid[i][j] === 2) {
                q.push([i, j]); // 腐烂橘子加入队列
            }
        }
    }

    // 如果没有新鲜橘子，直接返回0（修正：增加边界条件处理）
    if (fresh === 0) return 0;

    let ans = 0; // 记录感染所需的时间（分钟数）

    // BFS 开始：当还有新鲜橘子且队列不为空时继续循环
    while (fresh > 0 && q.length > 0) {
        ans++; // 每分钟感染一轮

        // tmp 的作用：
        // 冻结当前层的节点：tmp 保存当前层的所有腐烂橘子，q 清空后用于存储下一层。
        // 确保 BFS 按层推进：每分钟只感染一层，时间计算正确。
        const tmp = q; // 当前所有腐烂橘子
        q = [];        // 清空队列，准备存储新感染的橘子

        // 遍历当前层的所有腐烂橘子
        for (const [x, y] of tmp) {
            // 检查四个方向（上、下、左、右）
            for (const [i, j] of [[x-1, y], [x+1, y], [x, y-1], [x, y+1]]) {
                // 如果相邻位置是新鲜橘子，则感染它
                if (i >= 0 && i < m && j >= 0 && j < n && grid[i][j] === 1) {
                    fresh--;         // 新鲜橘子减少
                    grid[i][j] = 2;  // 标记为腐烂
                    q.push([i, j]);  // 新腐烂橘子加入队列（下一层）
                }
            }
        }
    }

    // 如果还有新鲜橘子剩余，返回-1；否则返回感染时间（修正：return 移到循环外）
    return fresh === 0 ? ans : -1;
}