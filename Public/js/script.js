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

//cambiar el color de los enlaces del navegador segun se hace scroll
//https://desarrolloweb.com/faq/como-saber-si-un-elemento-esta-en-el-viewport
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

//Se definen las capas que se quiere controlar y se meten en un array
let capa_descripcion=document.getElementById("tab_description");
let capa_features=document.getElementById("tab_features");
let capa_screens=document.getElementById("tab_user_testimonials");
let capa_extra=document.getElementById("tab_extras");

let arrayCapas=[capa_descripcion, capa_features, capa_screens, tab_extras];

//Se define un escuchador de eventos de scroll para el documento
//Cuando se haga scroll se activa la funcion "revisarSiEnPantalla"
document.addEventListener("scroll", revisarSiEnPantalla);

//La funcion "isInViewport" devuelve verdadero si el elemento esta en la zona visible de la pantalla (viewPort)
function isInViewport(elem) {
    let distance = elem.getBoundingClientRect();
    return (
        distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom >= 0
    );
}

//La funcion "revisarSiEnPantalla" cambia el color de la fuente del enlace segun si se ve o no la capa
function revisarSiEnPantalla(){

    //Defino los enlaces que voy a querer cambiar
    let enlace1= document.querySelector("#dropdown li:nth-child(1) a");
    let enlace2= document.querySelector("#dropdown li:nth-child(2) a");
    let enlace3= document.querySelector("#dropdown li:nth-child(3) a");
    let enlace4= document.querySelector("#dropdown li:nth-child(4) a");

    let arrayEnlaces=[enlace1, enlace2, enlace3, enlace4];

    //Reviso cuales eran ciertos
    for(let i=0; i<arrayCapas.length; i++){
        if(isInViewport(arrayCapas[i])){
            arrayEnlaces[i].classList.add('js_tab_scroll_find');
        }
        else{
            arrayEnlaces[i].classList.remove('js_tab_scroll_find');
        }
    }
}







