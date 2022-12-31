let audio = new Audio ('magia.mp3');
audio.play();
audio.volume = 0.5;

let nombreok = localStorage.getItem("nombre");
document.querySelector('#nombre').textContent = nombreok +',';