//Cambia el color de la flechita cuando se hace hover sobre la palabra "extra"
var palabra_extra=document.querySelector("nav ul :nth-child(4)");

palabra_extra.addEventListener("mouseover", function(e){
    document.getElementById("menu_arrow").src="/images/down-arrow-red.png";
})

palabra_extra.addEventListener("mouseout", function(e){
    document.getElementById("menu_arrow").src="/images/down-arrow.png";
})