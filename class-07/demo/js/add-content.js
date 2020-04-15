'use strict'

function createGreeting() {
  var hourNow = prompt('What\'s the hour?');
  var greeting;
    
    if (hourNow > 18) {
      greeting = 'Good evening!';
    } else if (hourNow > 12) {
      greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
      greeting = 'Good morning!';
    } else {
      greeting = 'Welcome!';
    }
    
    return greeting;
  }




var showOrder = function () {
//input
  var order = prompt('what would you like to order?');
  var item;

  //processing
  if (order === 'house'){
    item='<img src="images/house.png">';

  }else if (order ==='hotel'){
    item='<img src="images/hotel.png">';
  }else{
    item='product not found ';
  }

  //output
  return item;
  
}

var getAvrg=function(a,b){

  var avg =(a+b)/2;
  console.log(avg);
  
}
getAvrg(2,5);
getAvrg(5,9);





