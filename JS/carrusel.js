const carrusel = document.querySelector(".carrusel-items");

let intervalo = null;
let step = 2;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
const threshold = 1;

const start = () =>{
  intervalo = setInterval(function(){
      carrusel.scrollLeft = carrusel.scrollLeft + step;
      console.log(Math.abs(carrusel.scrollLeft - maxScrollLeft));
      if(Math.abs(carrusel.scrollLeft - maxScrollLeft) <= threshold){
          //console.log("entro al if");
          step = step * -1;
      }else if(Math.abs(carrusel.scrollLeft) <= threshold){
          //console.log("entro al if 2");
          step = step * -1;
      } 
  },10);  
};


const stop = () =>{
    clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () =>{
    stop();
});

carrusel.addEventListener("mouseout", () =>{
    start();
});

start();