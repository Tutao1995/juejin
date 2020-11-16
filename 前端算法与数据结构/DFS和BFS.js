/* 
    DFS: deep first search   深度优先搜索  
    是试图穷举所有的完整路径。
    本质： 栈结构
    使用递归来模拟入栈、出栈操作
*/

const preOrder = (root) => {
  if (!root) return
  console.log(root.value)
  preOrder(root.left)
  preOrder(root.right)
}

/* 
    BFS: 广度优先搜索

    二叉树层次遍历

*/

const BFS = (root) => {
  const queue = []
  queue.push(root)
  while (queue.length) {
    const top = queue[0]
    console.log(top.val)
    if (top.left) {
      queue.push(top.left)
    }
    if (top.right) {
      queue.push(top.right)
    }
    queue.shift()
  }
}

const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
}

console.log(BFS(root))

/* 

    层序遍历 模板

    function BFS(入口坐标) {
    const queue = [] // 初始化队列queue
    // 入口坐标首先入队
    queue.push(入口坐标)
    // 队列不为空，说明没有遍历完全
    while(queue.length) {
        const top = queue[0] // 取出队头元素  
        
        访问 top // 此处是一些和 top 相关的逻辑，比如记录它对应的信息、检查它的属性等等
        
        // 注意这里也可以不用 for 循环，视题意而定
        for(检查 top 元素出发能够遍历到的所有元素)  {
            queue.push(top能够直接抵达的元素)
        }
        
        queue.shift() // 访问完毕。将队头元素出队
    }
}
*/
