function getMinMax(str) {
  let myObj = {};

  str = str.split(' ')
           .filter(num => +num)
           .sort(sortArr); 
  
  myObj.min = Math.min(...str);
  myObj.max = Math.max(...str);
  
  return myObj;
}

function sortArr (a, b) {
   return a - b; 
}