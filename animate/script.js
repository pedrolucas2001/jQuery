// Adiciona evento ao clicar na div com id="aumentar"

// Executa animação para aumentar o tamanho da div
$("#aumentar").on("click", function(){
    $("#caixa").animate({width: "500px",height: "500px"}) 
})

// Executa animação para diminuir o tamanho da div
$("#diminuir").on("click", function(){
    $("#caixa").animate({width: "200px"}).animate({height: "200px"}); 
})

// Executa animação para adicionar margem a direita com duração de 1s 
// Também é possível adicionar funções dentro do animate, nesse caso ao terminar o processo emitir um alert
$("#direita").on("click", function(){
    $("#caixa").animate({marginLeft: "300px"},{duration: 1000,complete : ()=>{alert("Terminou a animação")}}); 
})

// Executa animação para colar a div a esquerda e adicionar margin no topo de 20px
$("#esquerda").on("click", function(){
    $("#caixa").animate({marginLeft: "0px", marginTop: "20px"}); 
})

//Sumir com a caixa, método fadeOut faz com a div desapareça 
$("#sumir").on("click", function(){
    $("#caixa").fadeOut(1000); 
    // $("#caixa").hide(1000); faz a mesma coisa porém com efeito mais básico
    // $("#caixa").slideUp(1000); faz com que a caixa desapareça de baixo pra cima
})

// Aparecer com a caixa, método fadeIn faz com a div apareça 
$("#aparecer").on("click", function(){
    $("#caixa").fadeIn(1000); 
     // $("#caixa").show(1000); faz a mesma coisa porém com efeito mais básico
     // $("#caixa").slideDown(1000); faz com que a caixa apareça de cima pra baixo
})

// Toogle faz o fadeOut e fadeIn em só comando, ou seja, faz com que o elemento suma e apareça no mesmo botão
$("#trocar").on("click", function(){
    $("#caixa").fadeToggle(500);
})

// Attr adiciona atributo na tag selecionada, nesse caso ele desabilita o input com id="caixaTexto"
// Também é possível adicionar css com jQuery com o método .css e seus atributos dentro de aspas
$("#desativar").on("click", function(){
    $("#caixaTexto").attr("disabled",true);
    $("#caixaTexto").css("border", "2px solid black");

})
