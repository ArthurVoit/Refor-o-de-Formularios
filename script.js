function validar(){
    const nome = document.forms["forms1"].Nome.leigth.value;

    if(nome < 5 || nome > 50){
        alert("Paia em")
        return;
    }
}

document.getElementBy('forms1').addEventListener('submit', validar);