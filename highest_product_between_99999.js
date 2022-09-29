function palindrome3(n){
	
    var num_max = '9';
    num_max = Number(num_max.repeat(n-1));
    var largestNumb = Number(num_max);
    var highest = 1;
    for(var i = largestNumb; i>0; i--){
      for(var j = largestNumb; j>0; j--){
        var product = i*j;
         var reverse = this.reverseNUmber(product);
        if(product == reverse && product > highest){
            highest = product;
          
        }
      }
    }
    return highest;
  }
  function reverseNUmber(num){
      var split = num.toString().split('');
    var tab = [];
    for (var i = split.length - 1; i>=0 ; i--){
        tab.push(split[i]);
     }
    return 	Number(tab.join(''));
  }
  console.log(this.palindrome3(4));