// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    const amigo = document.getElementById('amigo').value;
    if (amigo){
        amigos.push(amigo);
        document.getElementById('amigo').value='';
        mostrarAmigos();
    }else{
        alert('Ingresa un nombre por favor');
    }
}

function mostrarAmigos(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        lista.appendChild(nuevoElemento);
    });
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos disponibles para el sorteo");
        return;        
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    amigos.splice(indiceAleatorio, 1);
    mostrarAmigos()
    document.getElementById('resultado').innerHTML = El amigo sorteado es: <strong>${amigoSorteado}</strong>;

}


agregarAmigo();
sortearAmigo();
