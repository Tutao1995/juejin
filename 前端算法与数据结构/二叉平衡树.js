/* 
    二叉平衡树
    概念：树的左右子节点高度差不超过1
    平衡二叉树的出现，是为了降低二叉搜索树的查找时间复杂度。

*/
// 平衡二叉树的判定
function isBalanced(root) {
    if (!root) return true
    let flag = true

    function balance(root) {
        if (!root || !flag) {
            return 0
        }
        const left = balance(root.left)
        const right = balance(root.right)
        if (Math.abs(left - right) > 1) {
            flag = false
            return 0
        }
        return Math.max(left, right) + 1
    }
    balance(root)
    return false
}

// 平衡二叉树的构造   

function balanceTree(root) {
    let array = []
    inOrder(root)
    return buildAVL(0, array.length - 1)
    function inOrder(root) {
        inOrder(root.left)
        array.push(root.value)
        inOrder.push(root.right)
    }
    function buildAVL(low, high) {
        if (low > high) {
            return null
        }
        const middle = Math.floor((low + hight) / 2)
        const cur = new TreeNode(array[middle])
        cur.left = buildAVL(low, middle - 1)
        cur.right = buildAVL(middle + 1, high)
        return cur
    }
}
