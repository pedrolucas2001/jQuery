var button = $("#mudaTema")
var textoArea = $("#textoArea")

button.on('click' , function(){
    // hasClass pergunta se essa classe existe
    if(button.hasClass("temaClaro")){
        button.removeClass("temaClaro")
        button.addClass("temaEscuro")
        textoArea.removeClass("temaClaro")
        textoArea.addClass("temaEscuro")
    }else{
        button.removeClass("temaEscuro")
        button.addClass("temaClaro")
        textoArea.removeClass("temaEscuro")
        textoArea.addClass("temaClaro")
    }
})