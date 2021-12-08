function isZhiShu(number) {
  if (number === 2) {
    return false;
  }
  for (i = 1; i <= number; i++) {
    if (i !== 1 && i !== number && number % i === 0) {
      return false;
    }
  }
  return true;
}
function getCount(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (isZhiShu(i)) {
      for (let j = i; j <= n; j++) {
        if (isZhiShu(j) && i + j === n) {
          console.log(i, j);
          count++;
        }
      }
    }
  }

  return count;
}

// console.log(getCount(8));

function countSum(number) {
  let count = 0;
  for (let i = 1; i < number; i++) {
    if (isOk(i, number)) {
      count++;
    }
  }
  console.log(count);
}

function isOk(k, number) {
  if (k === number) {
    return true;
  }
  if (k > number) {
    return false;
  }
  return isOk(k + k + 1, number);
}

// countSum(1);

function generateCompose(n) {
  let initStrArr = new Array(n).fill(0);
  // console.log(initStrArr);
  insteadOfStr(initStrArr, 0, n);
}
function insteadOfStr(strArr, changeIndex, n) {
  if (changeIndex === n) {
    return;
  } else {
    for (let h = changeIndex; h < n; h++) {
      let replaceStr = strArr.concat();
      replaceStr.splice(h, 1, 1);
      // 只要判断，1的右边是0 就可以了
      // if (replaceStr[h + 1] === 0) {
      //   console.log(replaceStr);
      // }
      if (isWithOne(replaceStr)) {
        console.log(replaceStr);
      }
      insteadOfStr(replaceStr, h + 1, n); // 替换
    }
  }
}

function isWithOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 0 && i === 0) || (arr[i] === 0 && arr[i - 1] === 0)) {
      return false;
    }
  }

  return true;
}

// console.log(isWithOne([1, 0, 0]));

// generateCompose(5);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var purchasePlans = function (nums, target) {
  const sortedNums = nums.sort((a, b) => a - b < 0);
  let count = 0;
  for (let i = 0; i < sortedNums.length; i++) {
    for (let j = i + 1; j < sortedNums.length; j++) {
      if (sortedNums[i] + sortedNums[j] > target) {
        break;
      }
      count++;
    }
  }
};

function groupCount(nums, target) {
  let ants = 0;

  let sortedNums = nums.sort((a, b) => a - b);

  let i = 0,
    j = sortedNums.length;
  while (i < j) {
    if (sortedNums[i] + sortedNums[j] <= target) {
      ants += j - i;
      i++;
    } else {
      j--;
    }
  }
  console.log(ants);
  return ants;
}

// groupCount([2, 2, 1, 9], 10);

console.log([1, 23, 4, 5].includes(1));

// 二分法查找,前提，有序

function halfSearch(nums, target) {
  let low = 0;
  let height = nums.length - 1;
  while (low <= height) {
    let mid = Math.floor((low + height) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      low = mid + 1;
    } else if (target < nums[mid]) {
      height = mid - 1;
    }
  }
  return -1;
}

// console.log(halfSearch([1, 2, 3, 4, 5, 6], 5));
// console.log(halfSearch([1, 2, 3, 5, 6], 10));
// console.log(halfSearch([1, 2, 3, 5, 6], 9));

// console.log(halfSearch([1, 2, 3, 4, 5, 6], 2));
// console.log(halfSearch([1, 2, 3, 4, 5, 6], 3));
// console.log(halfSearch([1, 2, 3, 4, 5, 6], 4));
// console.log(halfSearch([1, 2, 3, 4, 5, 6], 5));
// console.log(halfSearch([1, 2, 3, 4, 5, 6], 6));
// console.log(halfSearch([1, 2, 3, 4, 5, 6], 0));
// console.log(halfSearch([1, 2, 3, 4, 5, 6], 0));

function frogJump(n) {
  let dp = [];

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp);
  return dp[n];
}

function eatNotHungerSum(children, cookies) {
  /*
    此外还有一种方法，就是先排序。后进行双指针进行比较
  */

  children.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b > 0);

  let i = 0;
  let j = 0;
  while (i < children.length && j < cookies.length) {
    if (children[i] <= cookies[j]) {
      i++;
    }
    j++;
  }

  console.log(i);

  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = 0; j < cookies.length; j++) {
  //     if (numbers[i] <= cookies[j]) {
  //       // 剔除
  //       cookies.splice(j, 1);
  //       sum++;
  //       break;
  //     }
  //   }
  // }
  // console.log(sum);
}

// eatNotHungerSum([2, 1, 5], [1, 3, 1, 3]);

function doublePoint(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] === target) {
      console.log(i, j);
      return;
    } else if (nums[i] + nums[j] < target) {
      i++;
    } else {
      j--;
    }
  }
}

// doublePoint([2, 7, 11, 15], 26);

function floatSort(nums) {
  // 最外层的代表排序几次，大约 nums.length 次
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  console.log(nums.slice());
}
// floatSort([2, 7, 3, 1, 3, 1, 1, 9]);

function floatSortTow(nums) {
  // 有一个标准位，看看是否已经排好序

  let done = false;
  let compare_count = 0;
  let round = 0; // 遍历趟数

  let length = nums.length;
  while (!done) {
    done = true;
    for (let i = 0; i < length - 1; i++) {
      compare_count++;

      if (nums[i] > nums[i + 1]) {
        // 差不多---运用位运算进行交换
        nums[i] = nums[i] ^ nums[i + 1];
        nums[i + 1] = nums[i] ^ nums[i + 1];
        nums[i] = nums[i] ^ nums[i + 1];
        done = false; // 发生了交换，数组还没排好序
      }
    }
    length--; // 最后一个元素已归位，下一趟排序无需进行比较
    console.log("第%d趟：%o", ++round, ...nums);
  }
  console.log("一共比较了%d次", compare_count);
  console.log(nums);
}

// floatSortTow([2, 7, 3, 1, 3, 1, 1, 9]);

function insertSort(nums) {
  /*
   插入排序的算法思想，假设前面已经排好序了，后面一个一个与排好的列表进行往比较，如果小，
   就往后移动
  */
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j != 0) {
      if (nums[j] < nums[j - 1]) {
        let temp = nums[j - 1];
        nums[j - 1] = nums[j];
        nums[j] = temp;
        j--;
      } else {
        break;
      }
    }
  }

  console.log(nums);
}

function selectSort(nums) {
  /*
    选择排序的思想也比较简单，就是在为排序中，遍历一遍，找到最大｜最小值，依次放在起始
  */

  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    // 记录下找到最小值的索引
    let k = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        k = j;
      }
    }
    nums[k] = nums[i];
    nums[i] = min;
  }
}
// selectSort([2, 7, 3, 1, 3, 1, 1, 9]);

/*
   快速排序的思想: 
      1 。选一个数为基准，然后左右指针开始遍历，比基准数小的，排在左边，大的排在右边。
        排序好后，
      2 。又以基数的位置为切割点，进行左右两边切割，左右两边又进行 1的操作
      3. 递归结束的条件，  数组切割的长度等于1个
*/
function quickSort(nums, start, end) {
  // 递归结束条件
  if (start >= end) return;

  //  选择基准
  let base = nums[start];
  // 左右指针
  let left = start;
  let right = end;

  while (left != right) {
    // 比基准小，排在左边
    while (left < right && nums[right] >= base) {
      right--;
    }

    nums[left] = nums[right];

    while (left < right && nums[left] <= base) {
      left++;
    }

    nums[right] = nums[left];

    // console.log(nums.slice());
  }
  nums[left] = base;
  // 难点在于分割
  quickSort(nums, left + 1, end);
  quickSort(nums, start, left - 1);
}

// let waitedSort = [5, 7, 1, 8, 4];
// quickSort(waitedSort, 0, waitedSort.length - 1);
// console.log(waitedSort);

// quickSort([6, 8, 7], 0, 2);

function mergeArray(array, first, mid, last) {
  let i = first,
    j = mid + 1; // i为第一组的起点, j为第二组的起点
  let m = mid,
    n = last; // m为第一组的终点, n为第二组的终点
  let k = 0;
  let temp = [];
  /*
    看着复杂，其实也就是两组数组排序的问题.
    把排序好的数据放入 temp 中,
    最后 用temp 覆盖 array 中相应的位置就行了
  */
  while (i <= m && j <= n) {
    if (array[i] <= array[j]) temp[k++] = array[i++];
    else temp[k++] = array[j++];
  }
  // 　如果 第一组数据还有剩余的，补上
  while (i <= m) {
    temp[k++] = array[i++];
  }

  // 如果第二组数据还有剩余的，补上
  while (j <= n) {
    temp[k++] = array[j++];
  }
  for (i = 0; i < k; i++) {
    array[first + i] = temp[i];
  }
}

function mergeSort(nums, start, end) {
  // 迭代结束的条件 start >end
  if (start >= end) return;

  let mid = Math.floor((start + end) / 2);
  // 左  切割
  mergeSort(nums, 0, mid);
  //右  切割
  mergeSort(nums, mid + 1, end);
  // 将左右两边的有序数列合并
  mergeArray(nums, start, mid, end);
}

// let nums = [5, 6, 2, 1, 4, 9, 6, 9];

// mergeSort(nums, 0, nums.length - 1);

// console.log(nums);
/*
   计数排序的基本思想:
   1.先取最大值，然后建立max长度的计数数组存放
   2. 计数数组的索引代表值，其值代表出现的次数, 遍历，统计原始数组中数字出现的次数
   3. 依次遍历计数数组中大于1的值，并用其索引回写原始数组即可
*/
function countSort(nums) {
  let max = Math.max(...nums);
  let countArray = new Array(max + 1).fill(0);

  for (val of nums) {
    countArray[val]++;
  }
  console.log(countArray);
  let k = 0;
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      nums[k++] = i;
      countArray[i]--;
    }
  }

  console.log(nums);
}

// countSort([1, 32, 4, 5, 6, 2]);

var islandPerimeter = function (grid) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const n = grid.length,
    m = grid[0].length;
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (grid[i][j]) {
        let cnt = 0;
        for (let k = 0; k < 4; ++k) {
          let tx = i + dx[k];
          let ty = j + dy[k];
          if (tx < 0 || tx >= n || ty < 0 || ty >= m || !grid[tx][ty]) {
            cnt += 1;
          }
        }
        ans += cnt;
      }
    }
  }
  console.log(ans);
  return ans;
};

islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);

const postOrder = (root) => {
  let result = [];
  let stack = [];
};

class MyStack {
  constructor() {
    this.deque1 = [];
    this.deque2 = [];
  }

  push(x) {
    this.deque1.push(x);
  }

  pop() {
    let len = this.deque1.length;
    while (len > 1) {
      this.deque2.push(this.deque1.shift());
      len--;
    }
    const last = this.deque1.shift();
    this.deque1 = this.deque2;
    this.deque2 = [];

    return last;
  }

  top() {
    let last = null;
    let len = this.deque1.length;

    while (len > 0) {
      this.deque2.push(this.deque1.shift());
      len--;
    }
    this.deque1 = this.deque2;

    this.deque2 = [];
    return last;
  }

  empty() {
    return this.deque1.length === 0;
  }
}

/*
   1 2 3

  辅助栈的思想:有点绕

  1 2 3
      1
    
     
  3 2 1
  1.2,3
  4,3,2,1
  3～
  stack : 1   2,1   
  helper: 1,2  1,2,3  
*/

class MyQueue {
  constructor() {
    this.stack = [];
    this.helper = [];
  }

  push(x) {
    let size = this.stack.length;

    // 反转 3 2 1.-> 1 2 3
    while (size > 0) {
      this.helper.push(this.stack.pop());
      size--;
    }
    this.stack = this.helper;
    this.helper = [x];
    // 4 3 2 1
    while (this.stack.length > 0) {
      this.helper.push(this.stack.pop());
    }
    this.stack = this.helper;
    this.helper = [];
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  empty() {
    return this.stack.length === 0;
  }
}

// let obj = new MyQueue();
// obj.push(1);
// obj.push(2);
// obj.push(3);
// console.log(obj.stack);
// console.log(obj.pop());

var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  for (const num of nums) {
    const x = (num - 1) % n;

    nums[x] += n;
    console.log(nums);
  }
  const ret = [];
  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      ret.push(i + 1);
    }
  }
  return ret;
};
// findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);

// 全排列问题 backTrack

const numberGroup = (nums) => {
  let result = [];
  let size = nums.length;
  const backTrack = (tacker) => {
    // 选择结束的条件
    if (tacker.length === size) {
      console.log(tacker);
      result.push(tacker);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      let val = nums[i];
      // 当前的选择不能重复
      if (!tacker.includes(val)) {
        //
        tacker.push(val);
        //进入下一层决策树
        backTrack(tacker);
        //取消选择 ，这个有点难理解 ，这边进行回溯 --取消选择
        tacker.pop();
      }
    }
  };
  backTrack([]);
  // console.log(result);
};

numberGroup([1, 2, 3]);

var partition = function (s) {
  const res = [];

  function dfs(temp, start) {
    if (start == s.length) {
      res.push(temp.slice());
      return;
    }
    for (let i = start; i < s.length; i++) {
      console.log(start, i);
      if (isPali(s, start, i)) {
        temp.push(s.substring(start, i + 1));
        dfs(temp, i + 1);
        temp.pop();
      }
    }
  }
  dfs([], 0);
  return res;
};

function isPali(s, l, r) {
  while (l < r) {
    if (s[l] != s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

// partition("aab");

const a = 8;
const b = 24;

console.log(a.toString(2));
console.log(b.toString(2));

function grayCode(n) {
  // 各类编码,任意有效的格雷编码序列
  const result = [];

  const backTrack = (arr) => {
    if (arr.length === Math.pow(2, n)) {
      //  第一个和第二个二近制比较
      if (isVaild(arr[0], arr[arr.length - 1])) {
        result.push(arr.slice());
      }
      return;
    }

    for (let i = 1; i <= Math.pow(2, n) - 1; i++) {
      let last = arr[arr.length - 1];

      if (!arr.includes(i) && isVaild(last, i)) {
        arr.push(i);
        // 选择
        backTrack(arr);
        //取消
        arr.pop();
      }
    }
  };
  backTrack([0]);
  console.log(result[0]);
  return result[0];
}

// 二进制数恰好有一位不同
function isVaild(num1, num2) {
  let first = num1.toString(2);
  let second = num2.toString(2);
  const addZore = (num) => {
    let str = "";
    for (let i = 0; i < num; i++) {
      str += "0";
    }
    return str;
  };
  const f1 = first.length;
  const f2 = second.length;
  // 首先把位数补相等
  if (f1 > f2) {
    second = addZore(f1 - f2) + second;
  } else {
    first = addZore(f2 - f1) + first;
  }
  // 开始判断位数
  let count = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      count++;
    }
  }
  return count === 1;
}

function isVaild(str) {
  if (str.length > 1 && str[0] === "0") return false;
  return 0 <= Number(str) && Number(str) <= 255;
}

"".split("");
// grayCode(5);

// console.log(isVaild("01"));
console.log("1234".slice(0, 3));

/*

  if(!root.left&&!root.right) return false

   
   const dfs=(node,acc)=>{
      if(!node) return false
      // 如果找到目标相等，返回ok
      if(node.val+acc===k) return true
      if(node.val+acc)

      return  dfs(node.left)|| dfs(node.right)

   }

   return dfs(root,0)
*/

const nums = [1, 3, 2, 6, 5];

function isBFS(nums) {
  function recur(left, right) {
    if (left >= right) return true;
    let rootVal = nums[right];

    // 划分左右分解
    let p = left;
    //找到第一个大于rootVal 的index
    while (num[p] < rootVal) {
      p++;
    }

    let mid = p;

    while (nums[p] > rootVal) {
      p++;
    }

    // p===right 看看是否符合 二叉树的性质
    return p === right && recur(left, mid - 1) && recur(mid, right - 1);
  }

  return recur(0, nums.length - 1);
}
