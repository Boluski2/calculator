let buttonsEl = document.querySelectorAll("button");

let inputfieldEl = document.getElementById("result")

for (let i = 0; i <buttonsEl.length; i++){
  buttonsEl[i].addEventListener("click", ()=>{
   let buttonValue = buttonsEl[i].textContent;
   if (buttonValue === "C"){
    clearResult()
   } //else if (buttonValue === "D"){
  //   deleteResult()
  //  }
   else if (buttonValue === "="){
    claculateResult()
   } else {
    appendValue(buttonValue);
   }
  });
}



function clearResult(){
   inputfieldEl.value = "";
}

function  claculateResult(){
 inputfieldEl.value = eval(inputfieldEl.value);
}

function appendValue(buttonValue){
  inputfieldEl.value += buttonValue
}

// function deleteResult(buttonValue){
//   inputfieldEl.value += buttonValue
// }