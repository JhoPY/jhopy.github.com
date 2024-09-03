document.querySelector(".caja1").onclick = ()=>{
    open("https://developer.mozilla.org/es/docs/Web/HTML", "_blank");
};

document.querySelector(".caja2").onclick = ()=>{
    open("https://developer.mozilla.org/es/docs/Web/CSS", "_blank");
};

document.querySelector(".caja3").onclick = ()=>{
    open("https://developer.mozilla.org/es/docs/Web/JavaScript", "_blank");
};

document.querySelector(".Galery_1").onclick = ()=>{
    open("https://ezequiel20051.github.io/Mi%20Portafolio/", "_blank")
};

document.querySelector(".Galery_12").onclick = ()=>{
    open("https://ezequiel20051.github.io/css/Links/", "_blank")
};

const section = document.querySelector(".section__presentacion").addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});

const section2 = document.querySelector(".sobre__mi").addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});

const section3 = document.querySelector(".estudios").addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});

const section4 = document.querySelector(".certificados").addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});

const section5 = document.querySelector(".proyectos").addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});

const section6 = document.querySelector(".contacto").addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
})

const nav = document.getElementById("nav");

const abrir = document.getElementById("btn-nav1");

const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
    abrir.style.display = "none";
});

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});

const e = document.querySelector(".e");

const e2 = document.querySelector(".e2");

const e3 = document.querySelector(".e3");

const e4 = document.querySelector(".e4");

const e5 = document.querySelector(".e5");

e.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});

e2.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});

e3.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});

e4.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});

e5.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    abrir.style.display = "flex";
});



