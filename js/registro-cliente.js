import { clientServices } from "./cliente-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    console.log("Click")
    const nombre = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email]").value
    console.log(nombre, email)
    clientServices.crearCliente(nombre,email).then(() =>{
        window.location.href= "/screens/registro_completado.html"
    });

});