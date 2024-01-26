function factorial(num) {
  let x = 0, y = 0;

        while (x <= num) {

            if (x == 0 || x == 1) {
                y = 1;
              } else {
                y *= x;
        }
        x++;
        
    } return y;
  }
