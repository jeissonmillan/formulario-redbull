





let lista = [
   
   
]
console.log(lista);
    function agregar(){

    }
 function creartable (lista){
    let cabeza = " <tr ><th>Nombress</th><th>Apellidos</th><th>Edad</th><th>Trabajo</th></tr>";    
    for(var i=0; i<lista.length;i++){
        let fila = "<tr><td>"
        fila = fila + lista[i].nombre;
        fila = fila + "</td>"

        fila = fila +  "<td>"
        fila = fila + lista[i].apellido;
        fila = fila + "</td>"

        fila = fila + "<td>"
        fila = fila + lista[i].edad;
        fila = fila + "</td>"
        fila = fila + "<td>"
        fila = fila + lista[i].trabajo;
        fila = fila +"</td>"

        fila = fila +  "</tr>"
        cabeza = cabeza + fila;
        

    }
    return  cabeza;
}
document.getElementById("tabla").innerHTML= creartable(lista);


function agregar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let trabajo = document.getElementById("trabajo").value;
    
        let agrega=[{nombre:nombre, apellido:apellido, edad:edad, trabajo:trabajo}]
        lista.push(agrega[0])
       
      
       
        document.getElementById("tabla").innerHTML= creartable(lista);
       
        nombre = document.getElementById("nombre").value="";
        apellido = document.getElementById("apellido").value="";
        edad = document.getElementById("edad").value="";
        trabajo = document.getElementById("trabajo").value="";
        
    }
    
    