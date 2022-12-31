
const iniciar = () => {
    let nombre = document.querySelector('#nombre').value;
    localStorage.setItem("nombre",nombre);
    if (nombre != '') {
        document.location.href = 'index.html';
    }
    else{
        alert('Escribe tu nombre')
    }
   
}