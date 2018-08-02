'use strict';
// const arr = [
//   89,
//   30,
//   25,
//   32,
//   72,
//   70,
//   51,
//   42,
//   25,
//   24,
//   53,
//   55,
//   78,
//   50,
//   13,
//   40,
//   48,
//   32,
//   26,
//   2,
//   14,
//   33,
//   45,
//   72,
//   56,
//   44,
//   21,
//   88,
//   27,
//   68,
//   15,
//   62,
//   93,
//   98,
//   73,
//   28,
//   16,
//   46,
//   87,
//   28,
//   65,
//   38,
//   67,
//   16,
//   85,
//   63,
//   23,
//   69,
//   64,
//   91,
//   9,
//   70,
//   81,
//   27,
//   97,
//   82,
//   6,
//   88,
//   3,
//   7,
//   46,
//   13,
//   11,
//   64,
//   76,
//   31,
//   26,
//   38,
//   28,
//   13,
//   17,
//   69,
//   90,
//   1,
//   6,
//   7,
//   64,
//   43,
//   9,
//   73,
//   80,
//   98,
//   46,
//   27,
//   22,
//   87,
//   49,
//   83,
//   6,
//   39,
//   42,
//   51,
//   54,
//   84,
//   34,
//   53,
//   78,
//   40,
//   14,
//   5
// ];

const arr = [5, 3, 8, 9, 6];
let count = 0;

const qSort = (array, start, end) => {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;



  if (start >= end) {
    return array;
  }

  const mid = partition(array, start, end);
  array = qSort(array, start, mid);
  array = qSort(array, mid + 1, end);

  return array;
};

const partition = (array, start, end) => {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
};

const swap = (array, i, j) => {
    count++;
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

qSort(arr);
console.log(count);

const mSort = array => {
  count++;

  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
};

const merge = (left, right, array) => {
  let leftI = 0;
  let rightI = 0;
  let outputI = 0;

  while (leftI < left.length && rightI < right.length) {
    if (left[leftI] < right[rightI]) {
      array[outputI++] = left[leftI++];
    } else {
      array[outputI++] = right[rightI++];
    }
  }

  for (let i = leftI; i < left.length; i++) {
    array[outputI++] = left[i];
  }

  for (let i = rightI; i < right.length; i++) {
    array[outputI++] = right[i];
  }
  return array;
};

// mSort(arr);
// console.log(count);

function bucketSort(arr) {
    let sortedArray = [];  
    
    for (let i = 0; i < arr.length; i++) {
       sortedArray[arr[i]] = arr[i]; 
    }
    
    return sortedArray.filter(item => item !== undefined);
  }

  console.log(bucketSort([23, 12, 4, 1, 6, 10, 15, 18]))