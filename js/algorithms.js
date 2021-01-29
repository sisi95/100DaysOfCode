function bubbleSort(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let smaller = array[j]
                array[j] = array[j+1];
                array[j + 1] = smaller;
            }
        }
    }

    return array;
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

function implementationSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];

        for (var j = i - 1; j >= 0 && array[j] > current; j--) {
            array[j + 1] = array[j];
        }

        array[j + 1] = current;
    }

    return array;
}

implementationSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

function pairwise(arr, arg) {
    const newArr = [];
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[i] + arr[x] === arg && !newArr.includes([arr[x], arr[i]])) {
                newArr.push([arr[i], arr[x]]);
                counter += x + i;
                arr[i] = arr[x] = NaN;
            }
        }
    }

    return counter;
}
  
pairwise([1, 1, 1], 2);
pairwise([1,4,2,3,0,5], 7);
pairwise([0, 0, 0, 0, 1, 1], 1);

const diff = (arr1, arr2) => [
    ...arr1.filter(e => !arr2.includes(e)),
    ...arr2.filter(e => !arr1.includes(e))
];

const sym = (...args) => [...new Set(args.reduce(diff))];

sym([1, 2, 3], [5, 2, 1, 4]);

function implementationQuickSort(array) {
    if (array.length === 0) {
        return [];
    } else {
        const pivotValue = array[0];
        let greater = [];
        let lesser = [];
        let equal = [];

        for (let e of array) {
            if (e > pivotValue) {
                greater.push(e);
            } else if (e === pivotValue) {
                equal.push(e);
            } else {
                lesser.push(e);
            }
        }

        return [...implementationQuickSort(lesser), ...equal, ...implementationQuickSort(greater)];
    }
}

implementationQuickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

function mergeSort(array) {
    if (array.length == 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));

    return merger(left, right);
}

function merger(array1, array2) {
    let i = 0, j = 0, mergedArr = [];

    while(i < array1.length && j < array2.length) {
        if (array1[i] > array2[j]) {
            mergedArr.push(array2[j++]);
        } else {
            mergedArr.push(array1[i++]);
        }
    }

    while (i < array1.length) {
        mergedArr.push(array1[i++]);
    }

    while (j < array2.length) {
        mergedArr.push(array2[j++]);
    }

    return mergedArr;
}

mergeSort([1, 4, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let smallestNumber = i;
      
      for (let j = i + 1; j < array.length; j++) {
        if (array[smallestNumber] > array[j]) {
          smallestNumber = j;
        }
      }
  
      swap(i, smallestNumber, array);
    }
    return array;
}

function swap(i, smallestNumber, array) {
let tmp = array[i];
array[i] = array[smallestNumber];
array[smallestNumber] = tmp;
}
  
selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

function updateInventory(curInv, newInv) {
    const inventory = Array.prototype.concat.apply([], curInv);
    
    for (let i = 0; i < newInv.length; i++) {
        const itemName = newInv[i][1];
        const itemQuantity = newInv[i][0];

        const position = inventory.indexOf(itemName);
        
        if (position !== -1) {
            const row = Math.floor(position / 2);
            curInv[row][0] += itemQuantity;
            continue;
        }

        curInv.push([itemQuantity, itemName]);
    }

    curInv.sort((a, b) => (a[1] > [b[1]] ? 1 : -1));

    return curInv;
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

function noRepeats(str) {
    var regex = /(.)\1+/;

    // Split the string into an array of characters.
    var arr = str.split("");
    var permutations = [];
    var tmp;

    // Return 0 if str contains same character.
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

    // Function to swap variables' content.
    function swap(index1, index2) {
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }

    // Generate arrays of permutations using the algorithm.
    function generate(int) {
        if (int === 1) {
            // Make sure to join the characters as we create  the permutation arrays
            permutations.push(arr.join(""));
        } else {
            for (var i = 0; i != int; ++i) {
                generate(int - 1);
                swap(int % 2 ? 0 : i, int - 1);
            }
        }
    }

    generate(arr.length);

    // Filter the array of repeated permutations.
    var filtered = permutations.filter(function(string) {
        return !string.match(regex);
    });

    return filtered.length;
}

noRepeats("aabbdkljd");
