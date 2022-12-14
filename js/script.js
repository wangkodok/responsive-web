window.onload = (e) => {
  const html = document.querySelector('html');
  const cursor = document.querySelector('.cursor');
  console.log(e)

  html.addEventListener('mouseenter', (e) => {
    cursor.style.top = `${e.offsetY}px`;
    cursor.style.left = `${e.offsetX}px`;
    console.log(e.offsetY);
  })
}

window.addEventListener('DOMContentLoaded', () => {

  const cursor = document.querySelector(".cursor");
  function mouseMove(e) {
    console.log(e.isTrusted);
    
    
    
    if (e.isTrusted === true) {
      cursor.style.width = '30px';
      cursor.style.height = '30px';
      cursor.style.opacity = '1';
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      // cursor.style.top = mouseY + 'px';
      // cursor.style.left = mouseX + 'px';
      cursor.style.top = (mouseY - document.documentElement.scrollTop) + 'px';
      cursor.style.left = (mouseX - document.documentElement.scrollLeft) + 'px';
      // console.log(document.documentElement.scrollTop);
      const rootElement = document.documentElement;
      // console.log(rootElement);
    }
  }
  document.addEventListener('mousemove', mouseMove);
});

