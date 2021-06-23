


//Exercício de escrita de código

//1) 

const verificabichosest = () => {
    let bichosArr = [];

    const quantidadeBichosusuario = Number(
        prompt("quantos bichos de estimação você tem?")

    );

if (quantidadeBichosusuario === 0) {
    console.log("Que pena! Você pode adotar um pet!");
} else {
    while (bichosArr.length < quantidadeBichosusuario) {
        const nomebicho = prompt ("Digite o nome do seu bicho de estimação")
        bichosArr.push(nomebicho);
    }
    console.log(bichosArr);
 }    
};

