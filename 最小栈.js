// 支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// 最小栈 ​​O(1) 时间复杂度​​ 内返回栈中的最小元素

// 思路就是维护一个x_stack栈和一个min_stack栈

var MinStack = function() {
    this.x_stack = [];
    this.min_stack = [Infinity]; //这里如果写成[]就无法通过
}

MinStack.prototype.push = function(val) {
    this.x_stack.push(val);
    this.min_stack.push(Math.min((this.min_stack[this.min_stack.length-1]), val))
}

MinStack.prototype.pop = function() {
    this.x_stack.pop(this.x_stack.length-1);
    this.min_stack.pop(this.min_stack.length-1);
}

MinStack.prototype.top = function() {
    return this.x_stack[this.x_stack.length-1];
}

MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length-1];
}
