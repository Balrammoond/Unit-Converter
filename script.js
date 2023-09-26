var Feet =
 document.getElementById("Feet");

 var inch = 
 document.getElementById("inch");

 Feet.addEventListener("input", function(){
    let f = this.value;
    let i = f*12;
    inch.value = i;
 });

 inch.addEventListener("input", function(){
    let i = this.value;
    let f = i/12;
    Feet.value = f;
 })
