import { clientServices } from "./cliente-service.js";
const url = new URL(window.location);
const id = url.searchParams.get("id");
if(id ===null){
window.location.href= "/screens/error.html"
}


const cargarDatos= async ()=>{
const nombre = document.querySelector("[data-nombre]")
const email = document.querySelector("[data-email]")

    
    const perfil = await clientServices.detalleCliente(id)
    nombre.value = perfil.nombre
    email.value = perfil.email
    console.log(perfil)

};
cargarDatos();


const formulario = document.querySelector("[data-form]");
    formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email]").value
    const estado = true;
    clientServices.actualizarCliente(nombre,email,id,estado)
    window.location.href= "/screens/edicion_concluida.html"

})


