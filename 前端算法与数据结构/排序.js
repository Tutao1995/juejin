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
/* 
并归排序  分治思想

分解子问题：将需要被排序的数组从中间分割为两半，然后再将分割出来的每个子数组各分割为两半，重复以上操作，直到单个子数组只有一个元素为止。
求解每个子问题：从粒度最小的子数组开始，两两合并、确保每次合并出来的数组都是有序的。（这里的“子问题”指的就是对每个子数组进行排序）。
合并子问题的解，得出大问题的解：当数组被合并至原有的规模时，就得到了一个完全排序的数组
*/

function mergeSort(array) {
    let len = array.length
    if (len === 1) return array //边界处理
    let middle = Math.floor(len / 2)
    let left = mergeSort(array.slice(0, middle))
    let right = mergeSort(array.slice(middle, len))
    return mergeArr(left, right)
}

function mergeArr(arr1, arr2) {
    let res = []
    let len1 = arr1.length
    let len2 = arr2.length
    let i = 0
    let j = 0
    while (i < len1 && j < len2) {
        if (arr1[i] > arr2[j]) {
            res.push(arr2[j])
            j++
        } else {
            res.push(arr1[i])
            i++
        }
    }
    if (i < len1) {
        res.concat(arr1.slice(i, len1))
    } else {
        res.concat(arr2.slice(j, len2))
    }
    return res
}

/* 
    快速排序
*/

function quickSort(arr, left = 0, right = arr.length) {
    if (arr.length > 1) {
        let middle = partition(arr, left, right)
        if (left < middle - 1) {
            quickSort(arr, left, middle - 1)
        }
        if (middle < right) {
            quickSort(arr, middle, right)
        }
    }
    return arr
}

function partition(arr, left, right) {
    let i = left,
        j = right
    let middle = Math.floor(right / 2)
    let cu = arr[middle]
    while (i <= j) {
        while (arr[i] < cu) {
            i++
        }
        while (arr[j] > cu) {
            j--
        }
        if (i <= j) {
            ;[arr[j], arr[i]] = [arr[i], arr[j]]
            i++
            j--
        }
    }
    return i
}
