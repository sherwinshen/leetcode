/* 数组 */
const array = [];

/* 链表(单向) */
class ListNode {
  value: any;
  next: ListNode;

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  size: number;
  head: ListNode;

  constructor() {
    this.size = 0;
    this.head = new ListNode(null, null);
  }

  // 添加节点
  addNode(value, index: number) {
    if (index < 0 || index > this.size) throw Error("Index error");
    let prev = this.findIndex(this.head, index, 0);
    prev.next = new ListNode(value, prev.next);
    this.size++;
    return prev.next;
  }

  // 删除节点
  deleteNode(index: number) {
    if (index < 0 || index > this.size) throw Error("Index error");
    let prev = this.findIndex(this.head, index, 0);
    const node = prev.next;
    prev.next = node.next;
    node.next = null;
    this.size--;
    return node;
  }

  // 根据值查找节点
  findNode(value) {
    let node = this.head;
    while (node !== null) {
      if (node === value) {
        return node;
      } else {
        node = node.next;
      }
    }
    return "not found";
  }

  // 根据索引查找节点
  findIndex(header: ListNode, index: number, currentIndex: number) {
    if (index === currentIndex) return header;
    return this.findIndex(header.next, index, currentIndex + 1);
  }

  // 判空
  isEmpty() {
    return this.size === 0;
  }

  // 计数
  getSize() {
    return this.size;
  }
}
const linkedList = new LinkedList();

/* 栈 */
class Stack {
  stack: any[];

  constructor() {
    this.stack = [];
  }

  // 入栈
  push(item) {
    this.stack.push(item);
  }

  // 出栈
  pop() {
    this.stack.pop();
  }

  // 栈顶
  getHeader() {
    return this.isEmpty()
      ? new Error("stack empty")
      : this.stack[this.getLength() - 1];
  }

  // 计数
  getLength() {
    return this.stack.length;
  }

  // 判空
  isEmpty() {
    return this.getLength() === 0;
  }
}
const stack = new Stack();

/* 普通队列 */
class Queue {
  queue: any[];

  constructor() {
    this.queue = [];
  }

  // 入队
  enQueue(item) {
    this.queue.push(item);
  }

  // 出队
  deQueue() {
    return this.queue.shift();
  }

  // 队首
  getHeader() {
    return this.queue[0];
  }

  // 计数
  getLength() {
    return this.queue.length;
  }

  // 判空
  isEmpty() {
    return this.getLength() === 0;
  }
}
const queue = new Queue();

/* 循环队列 */
class SqQueue {
  queue: any[];
  first: number;
  last: number;
  size: number;

  // 需要给一个初始长度
  constructor(length) {
    this.queue = new Array(length + 1);
    // 队头
    this.first = 0;
    // 队尾
    this.last = 0;
    // 当前队列大小
    this.size = 0;
  }

  // 入队
  enQueue(item) {
    // 判断是否队列已满，如果满了就需要扩容
    if ((this.last + 1) % this.queue.length === this.first) {
      this.resize(this.getLength() * 2 + 1);
    }
    this.queue[this.last] = item;
    this.size++;
    this.last = (this.last + 1) % this.queue.length;
  }

  // 出队
  deQueue() {
    if (this.isEmpty()) {
      throw Error("Queue is empty");
    }
    const item = this.queue[this.first];
    this.first = (this.first + 1) % this.queue.length;
    this.size--;
    // 判断队列是否过小，如果过小就需要减容
    // 在队列空间等于总长度四分之一时且不为 2 时缩小总长度为当前的一半
    if (this.size === this.getLength() / 4 && this.getLength() / 2 !== 0) {
      this.resize(this.getLength() / 2);
    }
    return item;
  }

  // 队首
  getHeader() {
    if (this.isEmpty()) {
      throw Error("Queue is empty");
    }
    return this.queue[this.first];
  }

  // 计数 - 注意是队列大小，不是数据量，数据量通过this.size直接可以获得
  getLength() {
    return this.queue.length - 1;
  }

  // 判空
  isEmpty() {
    return this.first === this.last;
  }

  // 扩容或减容
  resize(length) {
    const newQueue = new Array(length);
    for (let i = 0; i < length; i++) {
      newQueue[i] = this.queue[(i + this.first) % this.queue.length];
    }
    this.queue = newQueue;
    this.first = 0;
    this.last = this.size;
  }
}
const sqQueue = new SqQueue(2);

/* 二分搜索树 */
class TreeNode {
  value: any;
  left: TreeNode;
  right: TreeNode;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  root: TreeNode;
  size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  addNode(v) {
    this.root = this._addChild(this.root, v);
  }

  // 添加节点时，需要比较添加的节点值和当前节点值的大小
  _addChild(node, v) {
    if (!node) {
      this.size++;
      return new TreeNode(v);
    }
    if (node.value > v) {
      node.left = this._addChild(node.left, v);
    } else if (node.value < v) {
      node.right = this._addChild(node.right, v);
    }
    return node;
  }
}
const bst = new BST();

/* Trie树 */
class TrieNode {
  path: number;
  end: number;
  next: TrieNode[];

  constructor() {
    this.path = 0; // 代表经过该节点的字符次数
    this.end = 0; // 代表到该节点终止的字符串有几个
    this.next = new Array(26).fill(null);
  }
}
class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // 插入字符串
  insert(str) {
    if (!str) return true;
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt() - "a".charCodeAt(0);
      if (!node.next[index]) {
        node.next[index] = new TrieNode();
      }
      node.path += 1;
      node = node.next[index];
    }
    node.end += 1;
  }

  // 删除字符串
  delete(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt() - "a".charCodeAt(0);
      node.next[index].path -= 1;
      if (node.next[index].path === 0) {
        node.next[index] = null;
        return true;
      }
      node = node.next[index];
    }
    node.end -= 1;
  }

  // 搜索字符串
  search(str) {
    if (!str) return false;
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt() - "a".charCodeAt(0);
      if (!node.next[index]) {
        return false;
      }
      node = node.next[index];
    }
    return node.end !== 0;
  }
}
const trie = new Trie();

/* 堆 - 大根堆
 * 大根堆通过数组来存储，注意，节点没有值但是位置还是存在的，值设置null
 * 索引从0开始，则子节点为 2i+1 2i+2，父节点为 Math.ceil(i/2)-1
 * 添加元素：将添加元素加至末尾，然后一路将节点与父节点对比大小，如果比父节点大，就和父节点交换位置
 * 删除元素(根)：先将根节点和末尾交换位置，然后现在的根节点循环判断和两个子节点的大小，如果子节点大，就把最大的子节点和父节点交换。
 */
class MaxHeap {
  heap: any[];

  constructor() {
    this.heap = [];
  }

  // 添加元素
  add(item) {
    this.heap.push(item);
    let index = this.heap.length - 1;
    while (index > 0) {
      const parIndex = Math.ceil(index / 2) - 1;
      if (this.heap[parIndex] < item) {
        this.heap[index] = this.heap[parIndex];
        index = parIndex;
      } else {
        break;
      }
    }
    this.heap[index] = item;
  }

  // 删除顶元素
  delete() {
    const temp = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = temp;
    this.heap.pop();
    let index = 0;
    while (index < this.heap.length) {
      let left = this.heap[2 * index + 1];
      let right = this.heap[2 * index + 2];
      let tempIndex = left > right ? 2 * index + 1 : 2 * index + 2;
      if (this.heap[tempIndex] > this.heap[index]) {
        const temp = this.heap[tempIndex];
        this.heap[tempIndex] = this.heap[index];
        this.heap[index] = temp;
        index = tempIndex;
      } else {
        break;
      }
    }
  }
}
const maxHeap = new MaxHeap();
