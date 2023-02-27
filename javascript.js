let n1 = document.querySelector('#n1');
let n2 = document.querySelector('#n2');
let ran1 = 1;
let anterior;
let ran2= Math.floor(Math.random() * 10) + 1;

n1.innerText = ran1;
n2.innerText = ran2;

document.getElementById("resu").focus();
let pun = 0;
let error = 0;

  function clear_mensaje1() {
    setTimeout(function(){ document.querySelector('#correcto').innerText = '';
            
 }, 800);
  }
  function clear_mensaje2() {
    setTimeout(function(){ document.querySelector('#wrong').innerText = '';
                           document.querySelector('#wrong').id = 'correcto';        
 }, 800);
  }
    document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode !== 13) {
        return;
    }
    calcular();
    });
const renovar = () => {
    ran1 = ran1+1;
    pun = 0;
    error = 0;
    n1.innerText = ran1;
    n2.innerText = ran2;
    document.getElementById("resu").focus();
    document.querySelector('#puntaje').innerText = pun;
    document.getElementById("siguiente").disabled = true;
    document.querySelector('#error').innerText = error;
    document.querySelector('#p').innerHTML = ' <img src="nivel2.PNG" alt="Nivel2" srcset="">';
    setTimeout(function(){ 
        document.querySelector('img').remove();
 }, 3000);
}



const calcular = () => {
    let resu = document.querySelector('#resu').value;
    let n3 = document.querySelector('#n1').textContent;
    let n4 = document.querySelector('#n2').textContent;
    let resultado =n3*n4;

    if (resu==resultado) {
        console.log('Correcto');
        document.querySelector('#correcto').innerText = '¡Correcto!';
        pun ++;
        document.querySelector('#puntaje').innerText = pun;
        if (ran2 != undefined) {
            anterior=ran2;
            console.log(anterior);            
        }
        ran2 = Math.floor(Math.random() * 10) + 1;
        if (anterior==ran2) {
            console.log('¡Se repitió!');
            while (anterior==ran2) {
                ran2 = Math.floor(Math.random() * 10) + 1;
            }
            
        }
        n1.innerText = ran1;
        n2.innerText = ran2;
        document.getElementById("resu").value = "";
        clear_mensaje1();
        document.getElementById("resu").focus();
        let audio = new Audio ('campana.mp3');
        audio.play();
        audio.volume = 0.5;
        //let bar = document.getElementsByTagName('progress')[0].value = document.getElementsByTagName('progress')[0].value + 1;
        //console.log(bar);
        let habilitado = document.getElementById("siguiente").disabled;
        if (pun >= 25 & habilitado != false) {
            habilitado = false;
            let audio2 = new Audio ("aplausos.mp3");
            audio2.play();
            audio.volume = 0.5;
        }
        if (pun >= 25 && ran1 == 10) {
            console.log('Fin');
            document.querySelector('#p').innerHTML = ' <img src="nivel3.PNG" alt="Nivel2" srcset="">';
            setTimeout(function(){ 
                document.querySelector('img').remove();
         }, 4200);
            let audio = new Audio ('magia.mp3');
            audio.play();
            audio.volume = 0.5;
            setTimeout(function(){ document.location.href = 'pag2.html';
            }, 4000);
            
        }
    }
    else{
        console.log('Incorrecto');
        error = error+1;
        let audio3 = new Audio ("error.mp3");
        audio3.play();
        audio3.volume = 0.5;
        document.querySelector('#correcto').id = 'wrong';
        document.querySelector('#wrong').innerText = '¡Incorrecto!';
        document.querySelector('#error').innerText = error;
        clear_mensaje2();
        document.getElementById("resu").focus();    
    }  
    if (error >= 3) {
        document.querySelector('#p').innerHTML = ' <img src="intento.PNG" alt="Nivel2" srcset="">';
            setTimeout(function(){ 
                document.querySelector('img').remove();
                location.reload();
         }, 3000);
    }  
            }