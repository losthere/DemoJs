"use strict"
let x=5;
x=4.6;

//alert(`value would be ${x}`);

//document.write("Hello");
//alert('baby step');

function welcome(user="User"){
   // alert("Welcome "+user);
}
welcome();

function orderWhiskey(){
    let amount = prompt('How many pegs would you like to order',1);
    //alert(amount);
    alert(`please pay ${amount*1000} rupayee` );
}

