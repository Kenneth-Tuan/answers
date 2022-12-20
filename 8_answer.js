let sum = function (a) {
    return function (b) {
      return function (c) {
        return a+b+c;
      }
    }
  }
  
  let summary = sum(1)(2)(3);
  
  console.log(summary)