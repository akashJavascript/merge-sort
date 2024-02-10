function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    const chunk1 = mergeSort(arr.slice(0, mid));
    console.log(chunk1);
    const chunk2 = mergeSort(arr.slice(mid));
    console.log(chunk2);
    return merge(chunk1, chunk2);
  }
}
function merge(left, right) {
  let mergedArr = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergedArr.push(left[i]);
      i++;
    } else {
      mergedArr.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    mergedArr.push(left[i]);
    i++;
  }

  while (j < right.length) {
    mergedArr.push(right[j]);
    j++;
  }
  return mergedArr;
}

mergeSort([1, 4, 3, 7, 99, 15]);
