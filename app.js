// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        document.getElementById('amigo').value = '';
    }
    else if (nombreAmigo === "") {
        alert('Debes ingresar un nombre para agregar un amigo');
    }
    else {
        alert('El amigo ya fue agregado');
    }
    console.log(amigos);
    document.getElementById('resultado').innerHTML = '';
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debe haber al menos un amigo para realizar el sorteo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    console.log('Amigo secreto sorteado:', amigoSecreto);
    mostrarResultado(amigoSecreto);

    amigos = [];
    actualizarListaAmigos();
}

function mostrarResultado(amigoSecreto) {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}