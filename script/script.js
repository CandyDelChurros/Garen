//  Math.floor (Math.random() * 2+1 )  importante para a parte de script


function invocar() {
    const sorte = Math.floor(Math.random() * 2+1);
    if (sorte == 1){
        invocarGaren();
    }
    else {
        invocarNeeko();
    }
}

function invocarGaren(){
    document.getElementById('garen').style.display = 'block';
    setTimeout(deletar, 2000)
}

function invocarNeeko(){
    document.getElementById('neeko').style.display = 'block';
    setTimeout(deletar, 2000)
}

function deletar(){
    document.getElementById('garen').style.display = 'none';
    document.getElementById('neeko').style.display = 'none';
}


