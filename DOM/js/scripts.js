(function() {
    "use strict";
    document.addEventListener("DOMContentLoaded", function() {
        //el DOMContentLoaded dice "espera a que todo el index html haya terminado de cargarse y luego ejecuta el javascript"
        //getElementById
        //
        //
        /* var logo = document.getElementById("logo");
                                                                                                console.log(logo);
                                                                                                var navegacion = document.getElementById("navegacion");
                                                                                                console.log(navegacion);
                                                                                                navegacion.style.display = "none"; */
        //
        //
        //getElementsByClassName
        /* var navegacion = document.getElementsByClassName("navegacion");
                                                                                        console.log(navegacion[1]);

                                                                                        var contenido = document.getElementsByClassName("contenido");
                                                                                        console.log(contenido);

                                                                                        contenido[0].style.display = "none"; */
        //
        //
        //getElementsByTagName
        /* var enlaces = document.getElementsByTagName("a");
                                                                        console.log(enlaces);
                                                                        console.log(enlaces.length);
                                                                        for (var i = 0; i < enlaces.length; i++) {
                                                                            enlaces[i].setAttribute("target", "_blank");
                                                                        }

                                                                        //Otro ejemplo

                                                                        var enlacesSidebar = document
                                                                            .getElementById("sidebar")
                                                                            .getElementsByTagName("a");
                                                                        console.log(enlacesSidebar);

                                                                        for (var i = 0; i < enlacesSidebar.length; i++) {
                                                                            enlacesSidebar[i].setAttribute("href", "http://www.google.com.ar");
                                                                        } */
        //
        //
        //querySelector
        /* var logo = document.querySelector("#logo"); //seleccionar por id #logo, o por clase .logo
                                                                    console.log(logo);

                                                                    var encabezado = document.querySelector("aside h2");
                                                                    console.log(encabezado);

                                                                    var encabezado = document.querySelectorAll("h2, footer p");
                                                                    console.log(encabezado);

                                                                    var enlaces = document.querySelectorAll("a");
                                                                    console.log(enlaces); */
        //
        //
        //Ejemplos de lo que se puede hacer con querySelectorAll
        /* var enlace = document.querySelectorAll("a");

                                                                for (var i = 0; i < enlace.length; i++) {
                                                                    console.log(enlace[i]);
                                                                } */
        //
        //
        /*var enlaces = document.querySelectorAll("#menu ul li a")[0];
                                                            console.log(enlaces.nodeType); //VER PAGINA DE MOZILLA PARA QUE VER QUE SIGNIFICA ESTE NODO
                                                            console.log(enlaces.nodeName); //SALE A PORQUE ES UN ENLACE
                                                            console.log(enlaces.attributes[0]); //CON .ATTRIBUTES PUEDO IMPRIMIR TODOS LOS ATRIB QUE TIENE UN ENLACE
                                                            console.log(enlaces.firstChild);
                                                            console.log(enlaces.firstChild.nodeValue);

                                                            enlaces.firstChild.nodeValue = "HOME";
                                                            enlaces.id = "aaaaiiiiiidddddiiii";*/
        //
        //---------------------------CREAR CONTENIDO
        /* var sidebar = document.querySelector("#sidebar");
                                                                var nuevoElemento = document.createElement("H1");
                                                                var nuevoTexto = document.createTextNode("Hola Mundo");
                                                                nuevoElemento.appendChild(nuevoTexto);
                                                                sidebar.appendChild(nuevoElemento); */
        //
        //
        //agregar entrada 6 en sidebar:
        /*var enlacesSidebar = document.querySelectorAll("#sidebar ul"); //para que nos seleccione un unorder list
                                                    //creando el enlace
                                                    var nuevoEnlace = document.createElement("A");
                                                    //le agregamos un valor a los nodos
                                                    nuevoEnlace.setAttribute("href", "#");
                                                    //hasta ahora quedaria asi <a></a>
                                                    var textoEnlace = document.createTextNode("Entrada 6");
                                                    nuevoEnlace.appendChild(textoEnlace);
                                                    //creando la lista
                                                    var nuevaLista = document.createElement("LI");
                                                    nuevaLista.appendChild(nuevoEnlace);
                                                    //creamos desde el enlace, insertamos el texto y luego al li le agregamos el enlace .. de lo especifico a lo mas general
                                                    //lo agregamos al menu
                                                    enlacesSidebar[0].appendChild(nuevaLista); */
        //
        //
        //Las interfases de JS son mas livianas
        //
        //
        //
        //------------------CLONANDO ELEMENTOS
        /* var contenido = document.querySelectorAll("main");
                                            // console.log(contenido);
                                            var nuevoContenido = contenido[0].cloneNode(true);
                                            //selecciono el sidebar porque es dnd quiero clonar este contenido
                                            var sidebar = document.querySelector("aside");
                                            //como si fuera el appendChild
                                            sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]); */
        //
        //
        //---------------controlando intersecciones con INSERTBEFORE
        /* var sidebar = document.querySelector("aside");

                                        var masVisitados = document.createElement("H2");
                                        var textoVisitados = document.createTextNode("Post Mas visitados");
                                        masVisitados.appendChild(textoVisitados);
                                        sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

                                        var contenido = document.querySelectorAll("main h2"); // contenido me devuelve un array y para recorrerlo necesito un for

                                        for (var i = 0; i < contenido.length; i++) {
                                            var nuevoElemento = document.createElement("LI");
                                            var nuevoTexto = document.createTextNode(
                                                contenido[i].firstChild.nodeValue
                                            );
                                            nuevoElemento.appendChild(nuevoTexto);
                                            sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
                                        } */
        //
        //
        //------------------COMO ELIMINAR NODOS
        /*var primerPost = document.querySelector("main article"); // en la pagina hay varios articles, pero con el queryselector me aseguro que solo me traiga el primero.. diferente si es querySelectorAll me traeria un arreglo con 3 posiciones
                                    //console.log(primerPost.parentNode);
                                    primerPost.parentNode.removeChild(primerPost);
                                    //el remove child se borra completamente del dom.. lo elimina.. no como display none.

                                    //vamos a hacer un selector para eliminar un enlace
                                    var enlaces = document.querySelector("#navegacion nav ul li a");
                                    console.log(enlaces);
                                    enlaces.parentNode.removeChild(enlaces);*/
        //
        //
        //-----------------REEMPLAZAR NODOS
        /*var viejoNodo = document.querySelector("main h2");
                                var nuevoNodo = document.querySelector("footer h2");
                                //para reemplazar es necesario escalar al padre
                                viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo); */
        //
        //
        //Reemplazar nodo con un nuevo elemento
        /* var nuevoTitulo = document.createElement("H2");
                var nuevoTexto = document.createTextNode("¡Hola Mundo!, nodo reemplazado");
                nuevoTitulo.appendChild(nuevoTexto);

                var viejoNodo = document.querySelector("main h2");
                viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo); */
    });
})();