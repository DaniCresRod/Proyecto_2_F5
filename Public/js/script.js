//Cambia el color de la flechita cuando se hace hover sobre la palabra "extra"
var palabra_extra=document.querySelector("nav ul :nth-child(4)");

palabra_extra.addEventListener("mouseover", function(e){
    document.getElementById("menu_arrow").src="./images/down-arrow-red.png";
})

palabra_extra.addEventListener("mouseout", function(e){
    document.getElementById("menu_arrow").src="./images/down-arrow.png";
})

//Cambia la imagen del boton a blanco
var icono_reloj=document.querySelector("#tab_features div :nth-child(1)");
var icono_hamburguesa=document.querySelector("#tab_features div :nth-child(2)");
var icono_calendario=document.querySelector("#tab_features div :nth-child(3)");

icono_reloj.addEventListener("mouseover", function(e){

    icono_reloj.querySelector("img").src="./images/reloj.png";
});

icono_reloj.addEventListener("mouseout", function(e){

    icono_reloj.querySelector("img").src="./images/reloj_2.png";
});

icono_hamburguesa.addEventListener("mouseover", function(e){

    icono_hamburguesa.querySelector("img").src="./images/menu_hamb.png";
});

icono_hamburguesa.addEventListener("mouseout", function(e){

    icono_hamburguesa.querySelector("img").src="./images/menu_hamb_2.png";
});

icono_calendario.addEventListener("mouseover", function(e){

    icono_calendario.querySelector("img").src="./images/calendario.png";
});

icono_calendario.addEventListener("mouseout", function(e){

    icono_calendario.querySelector("img").src="./images/calendario_2.png";
});



