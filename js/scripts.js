function containsX(int, X){
  intArray = (int).toString().split("").map(Number); // turn the int into a string so we can split, map(Number) will loop through and change them to a number, parseInt() does not work in this instance
  
  for(const int of intArray){
    if(int === X){
      return true;
    } 
  }
  return false;
}


function beepBoopify(int){

  let outputArray = [];
  for (let i = 0; i <= int; i++)
  {
    if(containsX(i, 3)){
      outputArray.push("Won't you be my neighbor?");
    } else if(containsX(i, 2)){
      outputArray.push("Boop!");
    } else if(containsX(i, 1)){
      outputArray.push("Beep!");
    } else{
      outputArray.push(i);
    }
    
  }

  return outputArray;
}