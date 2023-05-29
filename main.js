
let primeiroCampo = document.getElementById('primeiro-numero');
let segundoCampo = document.getElementById('segundo-numero');

document.getElementById("form").addEventListener('submit', function () {


    if (parseInt(primeiroCampo.value) > parseInt(segundoCampo.value)) {
        alert("Formulário inválido");
    } else {
        alert("Formulário validado");

    }


}

)


