/* 
方向：1.迭代算法发实现二叉树的先、中、后序遍历
      2.二叉树层序遍历的衍生问题
      3.反转二叉树


      递归和栈有着脱不开的干系

*/

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

/* 

1. 先序遍历   根  左  右
题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。
*/

// 递归

const preOrder = (root) => {
    if (!root) return
    console.log(root.value)
    preOrder(root.left)
    preOrder(root.right)
}

//迭代  栈先进后出  因此入栈顺序  中 -》 右 -》 左
// 合理地安排入栈和出栈的时机、使栈的出栈序列符合二叉树的前序遍历规则。

const preorderTraversal = (root) => {
    if (!root) return
    let res = []
    let stack = []
    stack.push(root)
    while (stack.length) {
        let current = stack.pop()
        // 当前结点就是当前子树的根结点，把这个结点放在结果数组的尾部
        res.push(current.value)
        if (current.right) {
            stack.push(current.right)
        }
        if (current.left) {
            stack.push(current.left)
        }
    }
    return res
}

// 后序遍历  左  右  中

const postorderTraversal = (root) => {
    if (!root) return
    let res = []
    let stack = []
    stack.push(root)
    while (stack.length) {
        let current = stack.pop()
        // 当前结点就是当前子树的根结点，把这个结点放在结果数组的头部
        res.unshift(current.value)
        if (current.left) {
            stack.push(current.left)
        }
        if (current.right) {
            stack.push(current.right)
        }
    }
    return res
}

//中序遍历  左 中 右

const inorderTraversal = (root) => {
    if (!root) return
    let res = []
    let stack = []
    let cur = root
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.value)
        cur = cur.right
    }
    return res
}

/* 
 层序遍历的衍生问题    
题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
*/


