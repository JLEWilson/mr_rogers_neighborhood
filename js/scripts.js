function containsX(int, X){
  intArray = (int).toString().split("").map(Number); // turn the int into a string so we can split, map(Number) will loop through and change them to a number, parseInt() does not work in this instance
  for(const int of intArray){
    if(int === X){
      return true;
    } 
  }
  return false;
}

function reverseArray(array){
  if(!Array.isArray(array)){
    console.error("This is not an array, nothing is going to happen");
  }
  return array.reverse();
}

function reverseStrings(array){
  if(!Array.isArray(array)){
    console.error("This is not an array, nothing is going to happen");
  }
  let outputArray = []
  array.forEach(function(element) {
    if(typeof element === 'string'){
      outputArray.push(element.split("").reverse().join(""));
    }
  });
  return outputArray;
}

function beepBoopify(int){
  let outputArray = [];
  if(isNaN(int)){
    outputArray.push("Numbers only please");
  } else if(int === "143"){
    outputArray.push("I love you!");  // Mr. Rogers' favorite number, a numerical code he used 1=I 4=Love 3=You. RIP Rogers'! We love you too.
  } else{
    for (let i = 0; i <= int; i++) {
      if(containsX(i, 3)){
        outputArray.push(" " + "\"Won't you be my neighbor?\"");
      } else if(containsX(i, 2)){
        outputArray.push(" " + "\"Boop!\"");
      } else if(containsX(i, 1)){
        outputArray.push(" " + "\"Beep!\"");
      } else{
        if(i === 0){
          outputArray.push(i);
        } else {
          outputArray.push(" " + i);  
        }
      }
    }
  } 
  return outputArray;
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
  });
  $("#submitButton").click(function(){    // Unsure of where to scope these buttons. 
    let inputNumber = $("#inputNumber").val(); 
    $("#output").text(beepBoopify(inputNumber));
    $(".output").show();
    $("#clearButton").show();
  });
  $("#submitButton2").click(function(){    
    let inputNumber = $("#inputNumber").val(); 
    $("#output").text(reverseArray(beepBoopify(inputNumber)));
    $(".output").show();
    $("#clearButton").show();
  });
  $("#submitButton3").click(function(){    
    let inputNumber = $("#inputNumber").val(); 
    $("#output").text(reverseStrings(reverseArray(beepBoopify(inputNumber))));
    $(".output").show();
    $("#clearButton").show();
  });
  $("#clearButton").click(function(){
    $("#output").text("");
    $(".output").hide();
    $("#clearButton").hide();
  });
  $("#lyricsButton").click(function(){
    $(".lyrics").toggle();
  });
});