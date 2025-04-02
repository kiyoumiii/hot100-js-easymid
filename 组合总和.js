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