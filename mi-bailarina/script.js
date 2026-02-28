function mostrarMensaje() {
    const mensaje = document.getElementById('mensajeFinal');
    mensaje.classList.add('activo');
    mensaje.scrollIntoView({ behavior: 'smooth' });
}
