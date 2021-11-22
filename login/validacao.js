

function myOnClick() {
    if (document.getElementById('e-mail').value==='grupo5@serratec.com' && 
        document.getElementById('senha').value==='1234'){
        alert('Login efetuado com sucesso')
    } else {
          alert('ERROOOOOOOUU, e-mail ou senha inválida')
          return false;          
    }  
}

document.getElementById('login-in').onclick = myOnClick;