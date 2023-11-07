//OBTENER LOS ELEMENTOS DEL DOM
const cantidad = document.getElementById('cantidad-valor'); 
const categoria = document.getElementById('categoria-seleccionada');
const btnResumen = document.getElementById('btn-resumen');
const labelTotal = document.getElementById("label-total")
let descuento
const valorTicket = 200

//asignar eventos
categoria.addEventListener('change',(event)=>{
    const opcionSeleccionada = event.target.value;
    if (opcionSeleccionada==1){
        descuento = 80
    }else if(opcionSeleccionada==2){
        descuento = 50
    }else{
        descuento = 15
    }
    console.log(descuento)
    console.log(opcionSeleccionada)
    
})

btnResumen.addEventListener('click', ()=> {
    // Obtén el valor del input
    var valorCantidad = cantidad.value;
    

    let valorTotal = valorCantidad*valorTicket
    let valorTicketDescuento = (valorTotal*descuento)/100 
    labelTotal.innerHTML = labelTotal.innerHTML + valorTicketDescuento
    localStorage.setItem(labelTotal.innerHTML);

  });


