window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const cursorTail = document.querySelector(".cursor-tail");
  const hover = document.querySelector(".list-work");

  function mouseMove(e) {
    if (e.isTrusted === true) {
      const mouseX = e.pageX;
      const mouseY = e.pageY;

      // cursor.style.width = "10px";
      // cursor.style.height = "10px";
      cursor.style.opacity = "1";

      // cursorTail.style.width = "30px";
      // cursorTail.style.height = "30px";
      cursorTail.style.opacity = "1";

      // 마우스 커서 위치를 제어하는 코드
      // cursor.style.top = mouseY + "px";
      // cursor.style.left = mouseX + "px";

      // 스크롤시 마우스 커서 위치를 제어하는 코드
      cursor.style.top = mouseY - document.documentElement.scrollTop + "px";
      cursor.style.left = mouseX - document.documentElement.scrollLeft + "px";

      cursorTail.style.top = mouseY - document.documentElement.scrollTop + "px";
      cursorTail.style.left =
        mouseX - document.documentElement.scrollLeft + "px";
    }
  }

  // 마우스 오버하면 마우스 커서 효과
  function mouseEnter() {
    cursor.classList.add("cursor-size");
    cursorTail.classList.remove("cursor-tail");
  }

  // 마우스 아웃하면 마우스 커서 효과
  function mouseLeave() {
    cursor.classList.remove("cursor-size");
    cursorTail.classList.add("cursor-tail");
  }

  document.addEventListener("mousemove", mouseMove);
  hover.addEventListener("mouseenter", mouseEnter);
  hover.addEventListener("mouseleave", mouseLeave);
});
