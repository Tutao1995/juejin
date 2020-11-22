/* 
    二叉搜索树： Binary Search Tree  BST  限制条件和特性
    定义：1. 是一个空树  2.是一棵由根结点、左子树、右子树组成的树，同时左子树和右子树都是二叉搜索树，且左子树上所有结点的数据域都小于等于根结点的数据域，右子树上所有结点的数据域都大于等于根结点的数据域
    数据域的有序性   左孩子 <= 根结点 <= 右孩子
    特点：中序遍历 有序

    查找数据域为某一特定值的结点
    插入新结点
    删除指定结点
    */
function TreeNode(n) {
    this.value = n
    this.left = this.right = null
}

// 查找数据域为某一特定值的结点
function search(root, n) {
    if (!root) return
    if (root.value === n) {
        return root
    } else if (root.value > n) {
        search(root.left, n)
    } else {
        search(root.right, n)
    }
}

// 插入新节点

function insertIntoBST(root, n) {
    if (!root) return new TreeNode(n)
    if (root.value > n) {
        root.left = insertIntoBST(root.left, n)
    } else {
        root.right = insertIntoBST(root.right, n)
    }
    return root
}

function deleteNode(root, n) {
    if (!root) return
    if (root.value === n) {
        if (!root.left && !root.right) {
            root = null
        } else if (root.left) {
            const maxLeft = findMax(root.left)
            root.value = maxLeft.value
            root.left = deleteNode(root.left, maxLeft.value)
        } else {
            const minRight = findMin(root.right)
            root.value = minRight.value
            root.right = deleteNode(root.right, minRight.value)
        }
    } else if (root.value > n) {
        root.left = deleteNode(root.left, n)
    } else {
        root.right = deleteNode(root.right, n)
    }

    function findMin(root) {
        while (root.left) {
            root = root.left
        }
        return root
    }

    function findMax(root) {
        while (root.right) {
            root = root.right
        }
        return right
    }
    return root
}

// 判断一棵树是不是搜索二叉树
function treeIsBTS(root) {
    if (!root) return true
    return dfs(root, -Infinity, +Infinity)
    function dfs(root, min, max) {
        if (root.value <= min || root.value >= max) {
            return false
        }
        return dfs(root.left, min, root.value) && dfs(root.right, root.value, max)
    }
}

// 有序数组变成二叉搜索树
function sortedArrayToBST(array) {
    if (!array.length) {
        return null
    }
    buildBST(0, array.length - 1)
    function buildBST(low, high) {
        if (low > high) {
            return null
        }
        const middle = Math.floor((low + high) / 2)
        let cur = new TreeNode(array[middle])
        cur.left = buildBST(low, middle - 1)
        cur.right = buildBST(middle + 1, high)
        return cur
    }
}

function sortedArrayToBSTOther(array) {
    if (!array.length) return null
    const middle = Math.floor((0 + array.length - 1) / 2)
    return {
        value: array[middle],
        left: middle ? sortedArrayToBSTOther(array.slice(0, middle)) : null,
        right: middle ? sortedArrayToBSTOther(array.slice(middle, array.length - 1)) : null,
    }
}
