let resultadoDiv = document.querySelector('#resultado');

$("#calcular").on('click',function(){
    let inputValue = Number($('#tabuadaNumero').val()); //Equiavalente a querySelector do DOM
    let contador = 1;

    resultadoDiv.innerHTML = `<h2>Tabuada de ${inputValue}</h2>`
    while(contador <= 10){
        resultadoDiv.innerHTML += `${contador} x ${inputValue} = ${contador*inputValue} <br>`;
        contador++;
    }
})
