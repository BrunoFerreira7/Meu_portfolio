var botao_toogle = document.getElementById("botao-toogle")
var menu_toogle = document.getElementById("menu-toogle")
function clicou()
{
    botao_toogle.classList.add("desativado")
    menu_toogle.classList.remove("desativado")
}
function fechou()
{
    menu_toogle.classList.add("desativado")
    botao_toogle.classList.remove("desativado")
}