let relogio = document.querySelector('#relogio');
const botao = document.querySelector('#botao');

console.log(botao);

botao.addEventListener('click' , function(){
    console.log(relogio);
    iniciaHora();
})
function horaAtual(){
    let data = new Date();
    let dataAtual = [data.getHours() , data.getMinutes(), data.getSeconds()];

    // if(dataAtual[2] < 10){
    //     dataAtual[2] = '0'+dataAtual[2];
    //     return
    // }

    return dataAtual;
}
function iniciaHora(){
    setInterval(() => {
        relogio.innerHTML = `${horaAtual()}`;
    }, 1000);
}