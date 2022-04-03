import { clientServices } from "./cliente-service.js";

const crearNuevaLinea=(nombre,email,id)=>{
    const linea = document.createElement("tr")
    const contenido =   `
            <td class="td" data-nombre>${nombre}</td>
            <td data-email>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button" id="${id}"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>`

    linea.innerHTML= contenido;
   
    const btn = linea.querySelector("button");
    
    btn.addEventListener("click",()=>{
      const nombre = document.querySelector("[data-nombre]").textContent
      const email = document.querySelector("[data-email]").textContent
      const estado = false;
      clientServices.eliminarCliente(nombre,email,btn.id,estado).then((respuesta) =>{
         console.log(respuesta)
    })

    });
    return linea;


}



const table = document.querySelector("[data-table]");

clientServices.listaClientes()
    .then((data) =>{
        data.forEach(({nombre,email,id,estado}) => {
            if (estado ==true){
            table.appendChild(crearNuevaLinea(nombre,email,id,estado)); 
          }});

    });



    