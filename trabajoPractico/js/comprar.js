const btnResumen = document.getElementById('botonResumen');
const btnCantidad = document.getElementById('inputCantidad');
const botonCategoria = document.getElementById('categoria');
const valorEntrada = 200;

btnResumen.addEventListener('click',() => {
    
    const valorA = btnCantidad.value;
    
    const valorB = botonCategoria.value;
    
  
    if(esValido(valorA)){
  
     
  
      const calcula  = calcular(valorA,valorEntrada,valorB);
      actualizarResultado(calcula);
    }
  

    if(valorA == ''){
      alert('Debe completar la cantidad');
    }else{
  
  
    const calcula = calcular(valorA,valorEntrada,valorB);
   

  
     const div = document.getElementById('resultado');
  
  
     div.innerHTML = calcula;
  
    }
  });
  
  function calcular(a,b,c){

        if(c === "Estudiante"){
            return "Total a pagar: $ " + ((parseInt(a)*Number(b)) - (parseInt(a)*((((Number(b))*80)/100)/100)));
        }if(c === "Trainee"){
            return "Total a pagar: $ " + ((parseInt(a)*Number(b)) - (parseInt(a)*((((Number(b))*50)/100)/100)));
        }else if(c === "Junior"){
            return "Total a pagar: $ " + ((parseInt(a)*Number(b)) - (parseInt(a)*((((Number(b))*15)/100)/100)));
        }
        
  }
  
  function esValido(valor){
      return valor !== '';
  }
  
  function actualizarResultado(calcula){
      
      const div = document.getElementById('resultado');
  
      div.innerHTML =  calcula;
  }