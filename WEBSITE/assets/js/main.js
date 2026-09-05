// FURA — comportamiento compartido del sitio
document.addEventListener('DOMContentLoaded', function () {
  var boton = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (boton && links) {
    boton.addEventListener('click', function () {
      var abierto = links.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('abierto');
        boton.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
