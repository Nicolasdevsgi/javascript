//$("") ou JQuery.
//var meuFormulario = document.getElementById("div-form");
//meuFormulario.hidden = true;

//var meuButton = document.getElementById("meu-button");
//meuButton.addEventListener("click", function (){
//  alert("Teste");
//});
$(document).ready(function () {

    var meuButton = $("#meu-button");
    meuButton.on("click", function () {
        alert("Teste");
    });

    var precos = $(".preco-produto li");
    precos.on("click", function () {
        alert($(this).text())
    });

    var $login = $("#login");
    var $popupform = $("#popup-form");

    $login.on("click", function () {
        $popupform.toggle(1000);
    });
});
