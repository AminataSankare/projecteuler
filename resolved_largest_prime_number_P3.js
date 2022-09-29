//-------      Work with smal number -------///
/* function isPrime(a){
  var isPrime = true;
  for(var j = 2; j< a; j++){
    if(a%j == 0){
      isPrime = false;
      continue;
    }
  }
  return isPrime;
  
}
function largestFactor(number){
  var max = 1;
  for(i=0; i<= number/5 ; i++){
     var isFactor = number%i == 0;
     var isPrime = this.isPrime(i);

     if(isFactor && isPrime){
         max = i;
     }
  }
  return max;
}

console.log(this.largestFactor(13195)); */




//--------- Work with big numbers -------- /////
function largestFactorNumber(number){
  var factor = 2;
  var test = 0;
  while(factor * factor <= number){
  	while(number % factor == 0){
    	test = factor;
      number /= factor;
    }
    factor += 1;
  }
  if(number>1){
  	return number;
  }
  return test;
}
console.log(this.largestFactorNumber(600851475143));