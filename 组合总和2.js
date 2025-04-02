// 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 
// 每个数字在每个组合中只能使用一次

function combinationSum2(candidates, target) {
    const result = [];
    candidates.sort((a,b) => a-b);
    backtrack(candidates, target, 0, 0, [], result);
    return result;
}

function backtrack(candidates, target, total, startIndex, path, result) {
    if(total === target) {
        result.push([...path]);
        return ;
    }
    for (let i = startIndex; i < candidates.length; i++) {
        if (total + candidates[i] > target) {
            break;
        }

        if(i > startIndex && candidates[i] === candidates[i-1]) {
            continue;
        }

        total += candidates[i];
        path.push(candidates[i]);

        backtrack(candidates, target, total, i+1, path, result);

        total -= candidates[i];
        path.pop();
    }
}