function ExibeOcultaFilhos(id)
{
   var elem = document.getElementById(id);

    //Ternario, usado para atribuição condicional (igual um IF)
    elem.style.display = (elem.style.display === "none" || elem.style.display==="") ? "block" : "none"; 

    //Definição de um ternario
    //var xiz = condição ? valor_se_verdadeiro : valor_se_falso;

}
