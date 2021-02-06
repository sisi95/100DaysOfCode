class Stack {
    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection);
    };

    push(value) {
        return this.collection.push(value);
    };

    pop() {
        return this.collection.pop();
    };

    peek() {
        return this.collection[this.collection.length - 1];
    };

    isEmpty() {
        return this.collection.length === 0;
    };

    clear() {
        return (this.collection.length = 0);
    };
}

class Queue {
    constructor() {
        this.collection = [];
    }

    enqueue(elem) {
        this.collection.push(elem);
    }

    dequeue() {
        this.collection.shift();
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}

class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    enqueue(newItem) {
        if (this.isEmpty()) {
            return this.collection.push(newItem);
        }

        this.collection = this.collection.reverse();
        var found_index = this.collection.findIndex(function(item) {
            return newItem[1] >= item[1];
        });

        if (found_index === -1) {
            this.collection.push(newItem);
        } else {
            this.collection.splice(found_index, 0, newItem);
        }

        this.collection = this.collection.reverse();
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.collection.shift()[0];
        } else {
            return "The priority queue is empty.";
        }
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}

class CircularQueue {
    constructor(size) {

        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size - 1;

        while (size > 0) {
            this.queue.push(null);
            size--;
        }
    }

    print() {
        return this.queue;
    }

    enqueue(item) {
        if (this.queue[this.write] === null) {
            this.queue[this.write++] = item;

            if (this.write > this.max) {
                this.write = 0;
            }

            return item;
        }

        return null;
    }

    dequeue() {
        if (this.queue[this.read] != null) {
            let item = this.queue[this.read];
            this.queue[this.read++] = null;

            if (this.read > this.max) {
                this.read = 0;
            }

            return item;
        }

        return null;
    }
}

class Set {
    constructor() {
        this.collection = [];
    }

    has(element) {
        return this.collection.indexOf(element) !== -1;
    }

    values() {
        return this.collection;
    }

    add(element) {
        if (!this.has(element)) {
            this.collection.push(element);
            this.length++;
            return true;
        } 

        return false;
    }

    remove(element) {
        if (this.has(element)) {
            let i = this.collection.indexOf[element];
            this.collection.splice(i, 1);
            return true;
        }

        return false;
    }

    size() {
        return this.collection.length;
    }

    union(set) {
        const newSet = new Set();

        this.values().forEach(value => {
            newSet.add(value);
        });

        set.values().forEach(value => {
            newSet.add(value);
        });

        return newSet;
    }

    intersection(set) {
        const newSet = new Set();

        this.values().forEach(value => {
            if (set.has(value)) {
                newSet.add(value);
            }
        });

        return newSet;
    }

    difference(set) {
        const newSet = new Set();

        this.values().forEach(value => {
            if (!set.has(value)) {
                newSet.add(value);
            }
        });

        return newSet;
    }

    isSubsetOf(set) {
        const newSet = new Set();

        this.values().forEach(value => {
            if (set.has(value)) {
                newSet.add(value);
            }
        });

        if (newSet.length === this.values().length) {
            return true;
        }

        return false;
    }
}

function checkSet(arrToBeSet, checkValue){
    let returnValue = [];
    var hasValue = arrToBeSet.includes(checkValue);
    var size = arrToBeSet.length;
 
    returnValue.push(hasValue, size);
    
    return returnValue;
}

class Map {
    constructor() {
        this.collection = [];
    }

    add(key, value) {
        if (!this.collection.has(key)) {
            this.collection[key] = value;
        }
    }

    remove(key) {
        if (this.collection.hasOwnProperty(key)) {
            this.collection.delete(key);
        }
    }

    has(item) {
        return this.collection[key];
    }

    values() {
        return this.collection;
    }

    size() {
        return this.collection.length;
    }

    clear() {
        this.collection = [];
    }
}

class HashTable {
    constructor() {
        this.collection = [];
        this.called = 0;
    }

    add(key, value) {
        var hash = hash(key);

        if (!this.collection.hasOwnProperty(hash)) {
            this.collection[hash] = [];
        }

        this.collection[hash][key] = value;
    }

    remove(key) {
        var hashedObject = this.collection[this.hash(key)];

        if (this.collection.hasOwnProperty(key)) {
            delete hashedObject[key];
        }

        if (!Object.keys(hashedObject).length) {
            delete this.collection[this.hash(key)];
        }
    }

    lookup(key) {
        var hash = hash(key);

        if (this.collection.hasOwnProperty(hash)) {
            return this.collection[hash][key];
        }

        return null;
    }

    hash(string) {
        this.called++;

        var hash = 0;
        for (var i = 0; i < string.length; i++) { 
            hash += string.charCodeAt(i); 
        }

        return hash;
    }
}

var Node = function(element) {
    this.element = element;
    this.next = null;
}

var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');
var Cat = new Node('Cat');
var Dog = new Node('Dog');

Kitten.next = Puppy;
Puppy.next = Cat;
Cat.next = Dog;

function LinkedList() {
    let length = 0;
    let head = null;

    function Node(element) {
        this.element = element;
        this.next = null;
    }

    this.head = () => head;

    this.size = () => length;

    this.add = (element) => {
        length++;
        const node = new Node(element);

        if (head) {
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }

            current.next = node;
        } else {
            head = node;
        }
    }

    this.remove = (element) => {
        if (head.element === element) {
            head = head.next;
            return length--;
        }

        let previous = head;
        while (previous) {
            let current = previous.next;
            if (current) {
                if (current.element === element) {
                    previous.next = current.next;
                    return length--;
                }
            }

            previous = current;
        }
    }

    this.isEmpty = () => {
        return this.size() > 0 ? false : true;
    }

    this.indexOf = (element) => {
        let current = head, index = -1, indexFound = false;

        while (!indexFound && current) {
            index++;

            if (current.element === element) {
                indexFound = true;
            }

            current = current.next;
        }
        
        return indexFound ? index : -1;
    }

    this.elementAt = (i) => {
        let currentNode = head, currentElement, index = -1, indexReached = false;
        while (!indexReached && currentNode) {
            index++;
            currentElement = currentNode.element;
            if (index === i) {
                indexReached = true;
            }

            currentNode = currentNode.next;
        }

        return indexReached ? currentElement : undefined;
    }

    this.removeAt = (index) => {
        if (index < 0 || index >= length) {
            return null;
        } 

        let node = head;
        if (index === 0) {
            head = head.next;
            length--;
            return node.element;
        }

        let i = 0;
        while (i + 1 !== index) {
            node = node.next;
            i++;
        }

        const deleted = node.next;
        node.next = node.next.next;
        length--;

        return deleted.element;
    }

    this.addAt = (index, element) => {
        if (index < 0 || index >= length) {
            return false;
        }

        let node = head;
        if (index > 0) {
            let i = 0;
            while (i + 1 !== index) {
                node = node.next;
                i++;
            }
        }

        const newNode = new Node(element);
        newNode.next = node.next;

        if (index === 0) {
            head = newNode;
        } else {
            node.next = newNode;
        }

        length++;
    }
}

var Node1 = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};

function DoublyLinkedList() {
    let head = null;
    let tail = null;

    this.add = (data) => {
        if (!data) {
            return false;
        }

        let newNode = new Node1(data, null);
        if (head === null) {
            head = newNode;
        } else {
            let nextNode = head;
            while (nextNode.next) {
                nextNode = nextNode.next;
            }

            nextNode.next = newNode;
        }

        if (tail === null) {
            tail = newNode;
        } else {
            let prevNode = tail;
            tail = newNode;
            tail.prev = prevNode;
        }
    }

    this.remove = (element) => {
        let current = head;
        if (!current && !tail) {
            return null;
        }

        if (tail.data === element) {
            let prevNode = tail.prev;
            tail = prevNode;
            tail.next = null;
            return;
        }

        while(current.next) {
            if (current.data === element) {
                let removedNode = current;
                let prevNode = current.prev;
                let nextNode = current.next;

                if (head.data === removedNode.data) {
                    head = nextNode;
                    head.prev = null;
                    break;
                }

                prevNode.next = nextNode;
                nextNode.prev = prevNode;
            }

            current = current.next;
        }
    }

    this.reverse = () => {
        let currentNode = this.head;

        if (!head) {
            return null;
        }

        let temp = null;
        tail = currentNode;

        while (currentNode) {
            temp = currentNode.prev; 
            currentNode.prev = currentNode.next;
            currentNode.next = temp;
            currentNode = currentNode.prev;
        }

        if (temp !== null) {
            head = temp.prev;
        }
    }
}

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

var Node2 = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function binarySearchTree() {
    this.root = null;

    this.add = (value) => {
        let newNode = new Node2(value);
        let current = this.root;
        
        if (this.root === null) {
            this.root = newNode;
            return undefined;
        } 

        while (current) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return undefined;
                }

                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return undefined;
                }

                current = current.right;
            } else {
                return null;
            }
        }
    }

    this.findMin = () => {
        let current = this.root;
        let minimum = null;

        if (this.root === null) {
            return null;
        }

        while (current.left !== null) {
            minimum = current.left;
            current = current.left;
        }

        return minimum.value;
    }

    this.findMax = () => {
        let current = this.root;
        let max = null;

        if (this.root === null) {
            return null;
        }

        while (current.right) {
            max = current.right;
        }

        return max;
    }

    this.isPresent = (value) => {
        let current = this.root;

        while (current) {
            if (value === current.value) {
                return true;
            } if (value > current.value) {
                current = current.right;
            } else if (value < current.value) {
                current = current.left;
            }
        }

        return false;
    }

    this.checkTree = (node) => {
        let isIt = true;

        if (node.left !== null) {
            const left = node.left;
            if (left.value > node.value) {
                isIt = false;
            } else {
                this.checkTree(left);
            }
        }

        if (node.right !== null) {
            const right = node.right;
            if (right.value < node.value) {
                isIt = false;
            } else {
                this.checkTree(right);
            }
        }
    }

    this.isBinarySearchTree = (tree) => {
        if (this.root === null) {
            return null;
        } else {
            return this.checkTree(tree.root);
        }
    }

    this.findMinHeight = (root = this.root) => {

        if (root === null) {
            return -1;
        }

        if (root.left === null && root.right === null) {
            return 0;
        }

        if (root.right === null) {
            return this.findMinHeight(root.left) + 1;
        }

        if (root.left === null) {
            return this.findMinHeight(root.right) + 1;
        }

        const leftHeight = this.findMinHeight(root.left);
        const rightHeight = this.findMinHeight(root.right);

        return Math.min(leftHeight, rightHeight) + 1;
    }

    this.findMaxHeight = (root = this.root) => {
        if (this.root === null) {
            return -1;
        }

        if (root.left === null && root.right === null) {
            return 0;
        }

        if (root.right === null) {
            return this.findMaxHeight(root.left) + 1;
        }

        if (root.left === null) {
            return this.findMaxHeight(root.right) + 1;
        }

        const leftHeight = this.findMaxHeight(root.left);
        const rightHeight = this.findMaxHeight(root.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    this.isBalanced = (root = this.root) => {
        if (root === null) {
            return true;
        }

        if (root.left === null && root.right === null) {
            return true;
        }

        if (root.left === null) {
            return this.findMaxHeight(root.right) <= 0;
        } 

        if (root.right === null) {
            return this.findMaxHeight(root.left) <= 0;
        }

        const leftHeight = this.findMaxHeight(root.left);
        const rightHeight = this.findMaxHeight(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    this.inorder = (root = this.root, treeArray = []) => {
        if (root === null) {
            return null;
        }

        if (root.left) {
            this.inorder(root.left, treeArray);
        }

        treeArray.push(root.value);

        if (root.right) {
            this.inorder(root.right, treeArray);
        }

        return treeArray;
    }

    this.preorder = (root = this.root, treeArray = []) => {
        if (root === null) {
            return null;
        }

        treeArray.push(root.value);

        if (root.left) {
            this.preorder(root.left, treeArray);
        }

        if (root.right) {
            this.preorder(root.right, treeArray);
        }

        return treeArray;
    }

    this.postorder = (root = this.root, treeArray = []) => {
        if (this.root === null) {
            return null;
        }

        if (root.left) {
            this.preorder(root.left, treeArray);
        }

        if (root.right) {
            this.preorder(root.right, treeArray);
        }

        treeArray.push(root.value);

        return treeArray;
    }

    this.levelOrder = (root = this.root) => {
        if (this.root === null) {
            return null;
        }

        let queue = [root];
        let results = [];

        while (queue.length > 0) {
            let node = queue.shift();
            
            results.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return results;
    }

    this.reverseLevelOrder = (root = this.root) => {
        if (this.root === null) {
            return null;
        }

        let queue = [root];
        let results = [];

        while (queue.length > 0) {
            let node = queue.shift();

            results.push(node.value);
            if (node.right) {
                queue.push(node.right);
            }

            if (node.left) {
                queue.push(node.left);
            }
        }

        return results;
    }

    this.remove = (element) => {
        if (element === null) {
            return null;
        }

        if (node.value === element) {
            
        }
    }
}

var tree = new binarySearchTree();

tree.add(4);
tree.add(10);
tree.add(41);
tree.add(2);
tree.add(40)
tree.add(19);
tree.add(23);
tree.add(3);

console.log(tree.levelOrder());
console.log(tree.reverseLevelOrder());
