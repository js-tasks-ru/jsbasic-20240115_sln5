function truncate(str, maxlength) {

  if (str.length > maxlength) {

    maxlength -= 1;
    str = str.substring(0, maxlength) + '…';  
  } 

  return str; 
}