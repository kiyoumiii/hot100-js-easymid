var exist = function(board, word) {
    const m = board.length, n = board[0].length;
    function dfs(i,j,k) {
        if (board[i][j] !== word[k]) {
            return false;
        }
        if (k+1 === word.length) {
            return true;
        }
        board[i][j] = 0;
        for (const [x,y] of [[i,j-1],[i,j+1],[i-1,j],[i+1,j]]) {
            if (0 <= x && x < m && 0 <= y && y < n && dfs(x,y,k+1)) {
                return true;
            }
        }
        board[i][j] = word[k];
        return false;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i,j,0)) {
                return true;
            }
        }
    }
    return false;
}

// 9.2
var exist = function(board, word) {
    const m = board.length, n = board[0].length;

    function dfs(i, j, k) {
        // k是匹配进度指针，通过k+1实现匹配进度的推进
        if (board[i][j] !== word[k]) {
            return false; // 字符不匹配
        }
            
        if (k+1 === word.length) {
            // 因为k从0开始计数，此时已经匹配成功
            return true;
        }

        board[i][j] = 0; // 将当前位置标记为已访问，因为不允许重复使用同一单元格

        for (const [x,y] of [[i,j-1],[i,j+1],[i-1,j],[i+1,j]]) {
            if (0<=x && x<m && 0<=y && y<n && dfs(x,y,k+1)) {
                return true; // 搜到了
            }
        }

        board[i][j] = word[k]; // 恢复现场
        return false; // 所有方向都没找到解
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i,j,0)) {
                return true;
            }
        }
    }
    return false; // 没搜到
}