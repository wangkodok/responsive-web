const stickySections = [...document.querySelectorAll(".sticky")];

stickySections.forEach((section) => {
  const scrollSection = section.querySelector(".scroll-section");
  const contentWidth = scrollSection.scrollWidth;
  const viewportWidth = window.innerWidth;

  // scrollSection의 너비를 콘텐츠의 전체 너비로 설정
  scrollSection.style.width = `${contentWidth}px`;

  // 부모 요소의 높이를 콘텐츠 너비와 뷰포트 너비의 차이만큼 설정
  section.parentElement.style.height = `${
    contentWidth - viewportWidth + window.innerHeight
  }px`;
});

window.addEventListener("scroll", () => {
  stickySections.forEach((section) => {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector(".scroll-section");
    const viewportWidth = window.innerWidth;
    const contentWidth = scrollSection.scrollWidth;

    // 현재 스크롤 위치와 부모 섹션의 오프셋을 사용해 스크롤 진행도를 계산
    let scrollProgress = window.scrollY - offsetTop;

    // 스크롤의 시작과 끝을 정의
    const maxScrollProgress = contentWidth - viewportWidth;

    // 스크롤 진행도를 최댓값으로 제한
    scrollProgress = Math.min(Math.max(scrollProgress, 0), maxScrollProgress);

    // 진행도에 따른 transform을 계산하여 콘텐츠의 끝이 화면에 보이게 설정
    const translateX = (scrollProgress / maxScrollProgress) * maxScrollProgress;

    // transform을 통해 가로 스크롤을 설정
    scrollSection.style.transform = `translate3d(${-translateX}px, 0, 0)`;
  });
});
