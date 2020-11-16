/* 
    1.全排列问题

    题目描述： 给定一个没有重复数字的序列，返回其所有可能的全排列。
    示例：   
输入: [1,2,3]
输出: [
[1,2,3],
[1,3,2],
[2,1,3],
[2,3,1],
[3,1,2],
[3,2,1]
]


概念：从n个不同元素中任取m（m≤n）个元素，按照一定的顺序排列起来，叫做从n个不同元素中取出m个元素的一个排列。当m=n时所有的排列情况叫全排列。


重复： 递归  DFS 
*/

const permute = (arr) => {
    const len = arr.length
    const current = []
    const res = []
    const visited = {}

    const a = 1
    function dfs(nth) {
        if (nth === len) {
            res.push(current.slice(0))
            return
        }
        for (let i = 0, temp; (temp = arr[i++]); ) {
            if (!visited[temp]) {
                visited[temp] = 1
                current.push(temp)
                dfs(nth + 1)
                current.pop()
                visited[temp] = 0
                if (true) {
                    console.log('hah1')
                }
            }
        }
    }
    dfs(0)
    return res
}

const subsets = (arr) => {
    const len = arr.length
    const res = []
    const subset = []
    dfs(0)

    function dfs(index) {
        res.push(subset.slice())
        for (let i = index, temp; (temp = arr[i++]); ) {
            subset.push(temp)
            dfs(i + 1)
            subset.pop()
        }
    }
    return res
}

console.log(permute([1, 2, 3, 5]))
