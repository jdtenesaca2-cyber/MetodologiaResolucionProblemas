'use strict'; 

const container = document.getElementById("container");

//agregar un elemento
const nuevoTitulo = document.createElement ("h1");
nuevoTitulo.textContent = "Estudiantes";

const students = ["Luis","Yosef","Marcelo", "Jaqui", "Sele"];

const nuevaLista = document.createElement ("ul");

students.forEach((student) =>
    {
    const item = document.createElement("li");
    item.textContent = student;
    nuevaLista.appendChild(item)
    }
)
    
container .appendChild(nuevoTitulo);
container .appendChild(nuevaLista);