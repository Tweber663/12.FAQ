const buttons = document.querySelectorAll('button'); 
Array.from(buttons).forEach((btn) =>  btn.addEventListener('click', () => btn.parentElement?.classList.toggle('active')))
