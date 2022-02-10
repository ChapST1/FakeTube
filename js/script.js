const menu = document.querySelector("#btn");
menu.addEventListener('click',()=>{
    let barra1 = document.querySelector(".barra1");
    let barra2 = document.querySelector(".barra2");
    let cuerpo = document.querySelector(".seccionVideos");
    barra1.classList.toggle("bars1Active")
    barra2.classList.toggle("bars2Active")
    cuerpo.classList.toggle("seccionVideosMove")

})