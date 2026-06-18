const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        menuBtn.innerHTML = "✕";
    }else{
        menuBtn.innerHTML = "☰";
    }
});

const botaoTema = document.querySelector("#botao-tema");
const iconeTema = document.querySelector("#icone-tema");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        iconeTema.innerHTML = `
        <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm10-7a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zM5 12a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm12.95-6.95a1 1 0 0 1 0 1.41l-1.41 1.41a1 1 0 0 1-1.41-1.41l1.41-1.41a1 1 0 0 1 1.41 0zM7.87 16.13a1 1 0 0 1 0 1.41l-1.41 1.41a1 1 0 1 1-1.41-1.41l1.41-1.41a1 1 0 0 1 1.41 0zM18 18a1 1 0 0 1-1.41 0l-1.41-1.41a1 1 0 0 1 1.41-1.41l1.41 1.41a1 1 0 0 1 0 1.41zM7.87 7.87a1 1 0 0 1-1.41 0L5.05 6.46a1 1 0 1 1 1.41-1.41l1.41 1.41a1 1 0 0 1 0 1.41zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
        `;

    }else{

        iconeTema.innerHTML = `
        <path d="M12 3a6 6 0 1 0 9 9A9 9 0 1 1 12 3z"/>
        `;

    }

});