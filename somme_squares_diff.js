function squares(n){
    var result = 0;
    var i = 1;
    while(i <= n){
      result += i;
      i++;
    }
    return Math.pow(result, 2);
  }
  function sommeSquares(n){
    var i = 1;
    var result = 0;
    while(i <= n){
      result += Number(Math.pow(i, 2));
      i++;
    }
    return result;
  }
  function diff(n){
    var result = squares(n) - sommeSquares(n);
    return result;
  }
  console.log(diff(100));