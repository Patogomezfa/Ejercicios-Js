//Viene a reemplazar a AJAX (Aunque todavia tiene mas soporte)

descargarUsuarios(30);

function descargarUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad} `;

    //Llamado a Fetch
    fetch(api)
        .then((respuesta) => respuesta.json())
        .then((datos) => imprimirHTML(datos.results));
}

function imprimirHTML(datos) {
    datos.forEach((usuario) => {
        console.log(usuario);

        const li = document.createElement("li");

        const {
            name: { first },
            name: { last },
            picture: { medium },
            nat,
        } = usuario;

        li.innerHTML = `
Nombre:${first} ${last}
Pais: ${nat}
Imagen: <img src="${medium}">
`;

        document.querySelector("#app").appendChild(li);
    });
}