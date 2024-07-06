const navegacion = document.querySelector('.navegacion');
const menu = document.querySelector('.menu');

console.log(navegacion)
console.log(menu)

menu.addEventListener('click', ()=>{
    navegacion.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    console.log(e.target)
})

window.addEventListener('click', e =>{
    if(navegacion.classList.contains('spread') 
        && e.target != menu && e.target != menu){
        console.log('cerrar')
        navegacion.classList.toggle("spread")
    }
})

