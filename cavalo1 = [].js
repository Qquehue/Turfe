var cavalo1 = [];
var cavalo2 = [];
var cavalo3 = [];
var cavalo4 = [];
var cavalo5 = [];
var cavalo6 = [];

var soma1 = Number(0);
var soma2 = Number(0);
var soma3 = Number(0);
var soma4 = Number(0);
var soma5 = Number(0);
var soma6 = Number(0);

async function voltas () {

        for (let emocao = 1; emocao <= voltas_input.value; emocao++) {
            Number(emocao);
            await new Promise(obtenha =>{

                for (let i = 1; i <= cavalos.length; i++) {
                    var resultado = Number((Math.random() * 2 + 7).toFixed(1));

                    if (i==1) {
                        cavalo1.push(resultado);
                        soma1 += resultado;
                    }
                    else if(i==2) {
                        cavalo2.push(resultado);
                        soma2 += resultado;
                    }
                    else if(i==3){
                        cavalo3.push(resultado);
                        soma3 += resultado
                    }
                    else if(i==4){
                        cavalo4.push(resultado);
                        soma4 += resultado
                    }
                    else if(i==5){
                        cavalo5.push(resultado);
                        soma5 += resultado
                    }
                    else if(i==6){
                        cavalo6.push(resultado);
                        soma6 += resultado
                    }



                }
                
                volta.innerHTML += `<h2>Volta ${emocao}</h2><br><br>`;
                for (var numero_cavalo = 1; numero_cavalo <= cavalos.length-1; numero_cavalo++) {

                    if (numero_cavalo = 1) {
                        volta.innerHTML += `${cavalo1[numero_cavalo-1]} - ${resultado} - ${soma1} <br><br>`;
                        
                    } 
                    else if(numero_cavalo = 2){
                        volta.innerHTML += `
                        ${cavalo2[numero_cavalo-1]} - ${resultado} - ${soma2} <br>
                        <br>`;
                    }
                    else if(numero_cavalo = 3){
                        volta.innerHTML += `
                        ${cavalo3[numero_cavalo-1]} - ${resultado} - ${soma3} <br>
                        <br>`;
                    }
                    else if(numero_cavalo = 4){
                        volta.innerHTML += `
                        ${cavalo4[numero_cavalo-1]} - ${resultado} - ${soma4} <br>
                        <br>`;
                    }
                    else if(numero_cavalo = 5){
                        volta.innerHTML += `
                        ${cavalo5[numero_cavalo-1]} - ${resultado} - ${soma5} <br>
                        <br>`;
                    }
                    else if(numero_cavalo = 6){
                        volta.innerHTML += `
                        ${cavalo6[numero_cavalo-1]} - ${resultado} - ${soma6} <br>
                        <br>`;
                    }

                }

            setInterval(obtenha, 6000);
        })
}
}


const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}