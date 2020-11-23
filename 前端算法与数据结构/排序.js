/* 
    基本排序算法：冒泡排序 插入排序  选择排序
    进阶排序算法：并归排序 快速排序
*/

function sort(array) {
    return array.sort((a, b) => a - b)
}

/* 
冒泡排序 ： 重复比较相邻的两项，如果第一相比第二项大，则交换两项的位置
 */

const testArray = [1, 3, 5, 6, 333, 2, 3, 1, 4]
function bubbleSort(array) {
    let len = array.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (array[i] > array[j]) {
                ;[array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
    return array // O(n2)
}

function betterBubbleSort(array) {
    let len = array.length
    for (let i = 0; i < len; i++) {
        let flag = true
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
                flag = false
            }
        }
        if (flag) return array //证明是有序的  直接返回数组  O(n)
    }
    return array
}

console.log(bubbleSort(testArray))

/* 

    选择排序 ：循环遍历数组，每次都找出当前范围内的最小值，把它放在当前范围的头部；然后缩小排序范围，继续重复以上操作，直至数组完全有序为止。
*/

function selectSort(array) {
    let len = array.length
    for (let i = 0; i < len; i++) {
        let min = i
        for (let j = i; j < len; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        if (min !== i) {
            ;[array[i], array[min]] = [array[min], array[i]]
        }
    }
    return array // O(n^2)
}

/* 

    插入排序：当前元素前面有序
*/

function insertSort(array) {
    let len = array.length
    for (let i = 1; i < len; i++) {
        let temp = array[i]
        let j = i
        while (j > 0 && temp < array[j - 1]) {
            array[j] = array[j - 1]
            j--
        }
        array[j] = temp
    }
    return array
}
