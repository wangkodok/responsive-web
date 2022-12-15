window.addEventListener('DOMContentLoaded', () => {
  function scrollAppear() {
    const section = document.querySelectorAll('.section');
    const screenPosition = window.innerHeight;
  
    for (let i = 0; i < section.length; i++) {
      const textPosition = section[i].getBoundingClientRect().top;
  
      if (textPosition < screenPosition) {
        section[i].classList.add('animation');
      } else {
        section[i].classList.remove('animation');
      }
    }
  }
  
  window.addEventListener('scroll', scrollAppear);

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

