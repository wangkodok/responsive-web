window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const cursorTail = document.querySelector(".cursor-tail");

  function mouseMove(e) {
    if (e.isTrusted === true) {
      const mouseX = e.pageX;
      const mouseY = e.pageY;

      cursor.style.width = "10px";
      cursor.style.height = "10px";
      cursor.style.opacity = "1";

      cursorTail.style.width = "30px";
      cursorTail.style.height = "30px";
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
  document.addEventListener("mousemove", mouseMove);
});
