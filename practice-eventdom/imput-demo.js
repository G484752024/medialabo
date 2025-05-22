b = document.querySelector('button#print');
b.addEventListener('click', greeting);
function greeting() {
    console.log('こんにちは');
  }

  let i =document.querySelector('input[name="shimei"]');

  shimei = i.value

  aisatsu = 'こんにちは,' + shimei + 'さん';

  let p =document.querySelector('p#message');

  p.textContent = aisatsu;