function mudarcor() {
    var novacor = document.getElementById ('botao');
    novacor.style.backgroundColor = '#08558b';
}

function voltarcor() {
    var novacor = document.getElementById ('botao');
    novacor.style.backgroundColor = 'blue';
}

function abrirpagina() {
    window.open(www.google.com.br);
}

function validar() {
    var nomes = document.getElementById ('login');
    var senha = document.getElementById ('password');
    if (nomes.value == "edson" && senha.value == "edsoncs"){
        window.open("pagina1.html");
    } else if (nomes.value == "edson" && senha.value != "edsoncs"){
        alert("Senha incorreta")
     }else if (nomes.value != "edson" && senha.value == "edsoncs"){
        alert("Login incorreto")
     }
    }
 

 