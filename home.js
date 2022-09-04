//Functions created to show sessions as selected in the menu
function sobre(show) {
    var div = document.getElementById("sobre");
    if(show) 
    {
        div.style.display = "block";
        experiencia(false)
        contato(false)
        formacao(false)
        

    }
    else div.style.display = "none";
}

function experiencia(show) {
    var div = document.getElementById("experiencia");
    if(show)
    {
        div.style.display = "block";
        sobre(false)
        contato(false)
        formacao(false)
        
    }
    else div.style.display = "none";
}

function contato(show) {
    var div = document.getElementById("contato");
    if(show)
    {
        div.style.display = "block";
        sobre(false)
        experiencia(false)
        formacao(false)
        
    }
    else div.style.display = "none";
}

function formacao(show) {
    var div = document.getElementById("formacao");
    if(show)
    {
        div.style.display = "block";
        sobre(false)
        experiencia(false)
        contato(false)
        
    }
    else div.style.display = "none";
}
