const btn = document.querySelector('#switch button');

btn.addEventListener('click', toggleMode);

function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle('light');

  const img = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute(
      'alt',
      'Foto de Eduardo Farias sorrindo, usando oculos escuro preto, camisa cinza escuro, barba baixa, fundo com vegetação verde e dia ensolarado.'
    );
  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Foto de Eduardo Farias levantando as sombrancelhas, usando oculos preto e camisa cinza escuro, barba baixa e fundo.');
  }
}
