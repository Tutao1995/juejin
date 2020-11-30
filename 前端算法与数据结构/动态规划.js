/*

    递归思想明确树形思维模型：找到问题终点，思考倒退的姿势，往往可以帮助你更快速地明确状态间的关系
结合记忆化搜索，明确状态转移方程
递归代码转化为迭代表达（这一步不一定是必要的，1、2本身为思维路径，而并非代码实现。若你成长为熟手，2中分析出来的状态转移方程可以直接往循环里塞，根本不需要转换）。
*/

/* 
    爬楼梯
    题目描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
    注意：给定 n 是一个正整数。
*/

function getNumber(n) {
    let fn = []
    fn[1] = 1
    fn[2] = 2
    for (let i = 3; i < n; i++) {
        fn[n] = fn[n - 1] + fn[n - 2]
    }
    return fn[n]
}

/* 

    找硬币
    题目描述：给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
*/

function getCoins(array, count) {
    let fn = []
    for (let i = 1; i <= count; i++) {
        fn[i] = Infinity
        for (let j = 0; j < array.length; j++) {
            if (i - array[j] > 0) {
                f[i] = Math.min(fn[i], fn[i - fn[array[j]] + 1])
            }
        }
    }
    if (fn[count] === Infinity) return -1
    return fn[count]
}
