const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const stock = document.querySelector("#li-1");
const pedidos = document.querySelector("#li-2")

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible")
});

stock.addEventListener("click", ()=>{
    nav.classList.add("visible")
});

pedidos.addEventListener("click", ()=>{
    nav.classList.add("visible")
});

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible")
});

stock.addEventListener("click", ()=>{
    nav.classList.remove("visible")
});

pedidos.addEventListener("click", ()=>{
    nav.classList.remove("visible")
});

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) { // Cuando se haya desplazado más de 50px
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});