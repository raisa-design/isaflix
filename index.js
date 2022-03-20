function visualizar(){
  let input = document.getElementById('id_password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        document.getElementById('olho').src = "imagens/ocultar.svg";
    } else {
        input.setAttribute('type', 'password');
        document.getElementById('olho').src = "imagens/olhop.svg";
    }
  
  
}

function mostra(){
   
    document.getElementById('visible').style.opacity=1
   /* document.getElementById('visible').style.backgroundColor='red'*/
    document.getElementById('btn-saiba-mais').style.display = 'none'
    
}

function validaLogin(){
    var email = document.getElementById('id_userLoginId').value;
    var senha = document.getElementById('id_password').value;
    if (email== 'almeida@gmail.com' && senha=='admin') {
        // alert('Email e senha  válidos')
        window.location.href="pagina2.html";
    }

    else{
        alert ('Email e senha inválidos')
    }
}

/*function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("id_userLoginId").innerHTML="E-mail válido";
    alert("email valido");
    }
    else{
    document.getElementById("id_userLoginId").innerHTML="<font color='red'>Email inválido </font>";
    alert("E-mail invalido");
    }
    } */

  