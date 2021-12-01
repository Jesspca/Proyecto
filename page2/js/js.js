//Cambio de imagenes y titulos
let imagenes = ["img/kard.jpeg","img/one.jpg","img/ari.jpg","img/mat..jpg","img/cl.jpg"];

let titulos =["KARD","One Ok Rock","Ariana Grande","Matisse","CL"];

let fila = document.querySelectorAll('.fila');
fila[0].addEventListener('mouseover', ()=>{cambiar(imagenes[0],titulos[0])});
fila[1].addEventListener('mouseover', ()=>{cambiar(imagenes[1],titulos[1])});
fila[2].addEventListener('mouseover', ()=>{cambiar(imagenes[2],titulos[2])});
fila[3].addEventListener('mouseover', ()=>{cambiar(imagenes[3],titulos[3])});
fila[4].addEventListener('mouseover', ()=>{cambiar(imagenes[4],titulos[4])});

function cambiar(ruta, titulo){
    let imagenuno= document.querySelector('.gpi');
    imagenuno.src= ruta;
    let elemntotitulo= document.querySelector(".titulo");
    elemntotitulo.textContent=titulo;
}
//Agregar
const input=document.querySelector('input');
const addbtn=document.querySelector('.btn-add');
const ul=document.querySelector('ul');
const empty= document.querySelector('.empty');

addbtn.addEventListener('click',(e) =>{
    e.preventDefault();

    const text= input.value;
    const li= document.createElement('li');
    const p= document.createElement('p');
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value="";
    empty.getElementsByClassName.display="none";
});

function addDeleteBtn(){
    const deleteBtn=document.createElement('button');

    deleteBtn.textContent="Quitar";
    deleteBtn.className="btn-delete";

    deleteBtn.addEventListener('click', (e)=>{
        const item=e.target.parentElement;
        ul.removeChild(item);
    });
    return deleteBtn;

}