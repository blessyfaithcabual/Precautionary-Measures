const targetDiv = document.getElementById('nav');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; 

  if (scrollY > 100) {
    targetDiv.style.backgroundColor = 'black'; 
    targetDiv.style.padding = '1em 5em';
  } else {
    targetDiv.style.backgroundColor = 'transparent';
    targetDiv.style.padding = '2em 5em';
  }
});
