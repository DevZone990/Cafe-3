//-----------------------------menu--------------------------//
let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
}
 //optenemos los enlaces del navbar
 const enlaces = navbar.querySelectorAll('a');
 //agregamos el controlador
 enlaces.forEach(function(enlace){
     enlace.addEventListener('click',function(){
         navbar.classList.remove('active');
     })

 });


 Window.onscroll = ()=>{
     navbar.classList.remove('active');
 }
//-------------------------------mandar email------------------------------------//
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_2a0lcc5';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Contactanos';
      alert('Mensaje enviado correctamente');
    }, (err) => {
      btn.value = 'Contactanos';
      alert(JSON.stringify(err));
    });
});

// //----------------------Efectos de scroll------------------------//

const seccionesOcultas = document.querySelectorAll('.oculto');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(( entry)=> {
        entry.target.classList.toggle('mostrar',entry.isIntersecting);
    })
})

seccionesOcultas.forEach((seccion)=>observer.observe(seccion));

// carrusel-----------------------------------------




