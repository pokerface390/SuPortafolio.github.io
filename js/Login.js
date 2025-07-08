function mostrarRegistro() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registroForm').style.display = 'block';
}

function mostrarLogin() {
  document.getElementById('registroForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('#loginForm form');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const correo = document.getElementById('u').value.trim();
    const contrasena = document.getElementById('p').value.trim();

    if (correo === 'ESEWE@gmail.com' && contrasena === 'esewe123@') {
      window.location.href = 'portafolio.html';
    } else {
      alert('Correo o contraseña incorrectos');
    }
  });
});
