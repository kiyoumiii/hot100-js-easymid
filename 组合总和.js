// 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 
// 同一个数字可以无限制的重复被选取

function combinationSum(candidates, target) {
    let result = [];
    trackBack(candidates, target, 0, 0, [], result);
    return result;
}

function trackBack(candidates, target, total, startIndex, path, result) {
    if (total > target) {
        return ;
    }
    if (total === target) {
        result.push([...path]);
        return ;
    }
    for (let i = startIndex; i < candidates.length; i++) {
        total += candidates[i];
        path.push(candidates[i]);
        trackBack(candidates, target, total, i, path, result);
        total -= candidates[i];
        path.pop();
    }
}



// 9.1

function combinationSum(candidates, target) {
    let result = [];
    trackBack(candidates, target, 0, 0, [], result);
    return result;
}

function trackBack(candidates, target, total, startIndex, path, result) {
    // 终止条件1：总和超过目标值
    if (total > target) {
        return ;
    }
    
    // 终止条件2：找到有效组合
    if (total === target) {
        result.push([...path]);
        return ;
    }

    for (let i = startIndex; i < candidates.length; i++) {
        total += candidates[i];
        path.push(candidates[i]);
        trackBack(candidates, target, total, i, path, result);
        total -= candidates[i];
        path.pop();
    }
    
}

// 更符合编程习惯的：
var combinationSum = function(candidates, target) {
    const result = [];

    function trackBack(candidates, startIndex, path, result) {
        const currentSum = path.reduce((sum, num) => sum + num, 0); // 累加

        if (currentSum > target) return ; // 剪枝： 和超过目标值

        if (currentSum  === target) {
            result.push([...path]);  // 找到有效组合
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            path.push(candidates[i]);
            trackBack(candidates, i, path, result); //注意这里是i不是i+1（允许重复使用）
            path.pop();
        }

    }

    trackBack(candidates, 0, [], result);
    return result;
}