function cambiar_contenido() {
    var n_mensaje = document.getElementById("nuevo_mensaje").value;
    document.getElementById("texto").textContent = n_mensaje;
    document.getElementById("alerta").style.display = "block";
}
