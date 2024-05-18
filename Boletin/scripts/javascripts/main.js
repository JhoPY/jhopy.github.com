console.log("hola mundo")

let celdas = document.querySelectorAll("td")

celdas.forEach(function(td){
 td.addEventListener("click", function(){
    console.log("Click");
 })
});


