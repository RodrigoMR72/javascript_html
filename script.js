
const saudacao = document.getElementById("saudacao");

// getElementById - Deve ser no singular, pois o Id só retorna um elemento.

const agora = new Date();

if (agora.getHours() < 12) {
    saudacao.innerText = "Bom Dia!!!";
} 

else if (agora.getHours() >= 12 && agora.getHours() < 18) {
    saudacao.innerText = "Boa Tarde!!!";    
} 

else {
    saudacao.innerText = "Boa Noite!!!";
}
