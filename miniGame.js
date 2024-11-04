

function promptExample(){
    let dice = Math.floor(Math.random() *6) + 1
    test =  document.getElementById('ice').innerText = prompt("Guess again")
   


    while(test!= dice){

      if (Number(test) > dice ){
        test = prompt("Number is to high")
      } else if (Number(test) < dice) {
        test =  prompt("Number is to low")
      } else {alert("You didn't enter a number, Christina would be dissapoint! ?")
        test = prompt("You can't leave until you guess right")
      }
       
    }
}

