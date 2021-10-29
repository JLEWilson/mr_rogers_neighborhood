function contains1(int){
  intArray = (int).toString().split("").map(Number); // turn the int into a string so we can split, map(Number) will loop through and change them to a number, parseInt() does not work in this instance
  
  for(const int of intArray){
    if(int === 1){
      return true;
    } 
  }
  return false;
}


function beepBoopify(int){

  let outputArray = [];
  for (let i = 0; i <= int; i++)
  {
    if(contains1(i)){
      outputArray.push("Beep!");
    } else if(i === 2){
      outputArray.push("Boop!");
    }
    else{
      outputArray.push(i);
    }
    
  }

  return outputArray;
}