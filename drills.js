'use strict';
const arr = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5
];

// We were able to use both Quick Sort & Merge Sort
// to sort book titles alphabetically.

let books = [
  'harry potter',
  'lord of the rings',
  'other book',
  'the jungle book',
  'chronicles of narnia'
];

let count = 0;

////////////////////////////////////////////////////////////////////////////////

const qSort = (array, start, end) => {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;
  count++;

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
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

console.log(count, qSort(books));

////////////////////////////////////////////////////////////////////////////////

const mSort = array => {
  if (array.length <= 1) {
    return array;
  }

  count++;

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

// console.log(count, mSort(arr));

////////////////////////////////////////////////////////////////////////////////

function bucketSort(arr) {
  let sortedArray = [];

  for (let i = 0; i < arr.length; i++) {
    sortedArray[arr[i]] = arr[i];
  }

  return sortedArray.filter(item => item !== undefined);
}

// console.log(bucketSort(arr));

////////////////////////////////////////////////////////////////////////////////

const arrShuffle = arr => {
  let currIndex = arr.length;

  while (0 !== currIndex) {
    let ranIndex = Math.floor(Math.random() * currIndex);
    currIndex--;
    const temp = arr[currIndex];
    arr[currIndex] = arr[ranIndex];
    arr[ranIndex] = temp;
  }
  return arr;
};

// console.log(arrShuffle(arr));
