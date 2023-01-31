// function concluir () {
//     const lista = document.getElementById("lista").children;
//     lista.classList.toggle("concluido");
// }


// 1ª forma - Transformar uma lista em um Array.
// const lista = Array.from(document.getElementById("lista").children);


// 2ª forma - Transformar uma lista em um Array.
  const lista = [...document.getElementById("lista").children];


lista.forEach((item) => {
    item.onclick = concluir;

})

function concluir (evento) {

    evento.target.classList.toggle("concluido");
    // item.classList.toggle("concluido");

}