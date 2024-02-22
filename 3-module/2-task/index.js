function filterRange(arr, a, b) {
  
    return arr
      .filter(value => value >= a)
      .filter(value => value <= b);
  
  }