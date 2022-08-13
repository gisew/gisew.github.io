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
            return "Total a pagar: $ " + parseInt(a) * ((80*Number(b))/100);
        }if(c === "Trainee"){
            return "Total a pagar: $ " + parseInt(a) * ((50*Number(b))/100);
        }else if(c === "Junior"){
            return "Total a pagar: $ " + parseInt(a) * ((15*Number(b))/100);
        }
        
  }
  
  function esValido(valor){
      return valor !== '';
  }
  
  function actualizarResultado(calcula){
      
      const div = document.getElementById('resultado');
  
      div.innerHTML =  calcula;
  }