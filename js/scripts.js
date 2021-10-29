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

  if(int === "143"){
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
    let inputNumber = $("#inputNumber").val();    
    $("#output").text(beepBoopify(inputNumber));
    $("#clearButton").show();
  });

  $("#clearButton").click(function(){
    $("#output").text("");
    $("#clearButton").hide();
  });
  $("#lyricsButton").click(function(){
    $(".col-md-6").toggle();
  });
});