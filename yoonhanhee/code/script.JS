const links = document.querySelectorAll('a');
//네비게이션
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'gray'; 
  });
  link.addEventListener('mouseout', () => {
    link.style.color = 'black'; 
  });
});
//밤낮 모드
function NightMode() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'white';
  links.forEach(link => {
    link.style.color = 'white';  
  });
}
function DayMode() {
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  links.forEach(link => {
    link.style.color = 'black';  
  });
}
//이미지 슬라이드
let slideIndex = 0; 

function showSlides() {
  const slides = document.querySelectorAll('.슬라이드'); 
  slides.forEach(slide => slide.style.display = 'none'); 
  slideIndex++; 
  if (slideIndex > slides.length) slideIndex = 1; 
  slides[slideIndex - 1].style.display = 'block'; 
  setTimeout(showSlides, 2000);
}
showSlides(); 
//목록
function toggleAccordion(header) {
  const content = header.nextElementSibling; 
  const isVisible = content.style.display === 'block'; 
  content.style.display = isVisible ? 'none' : 'block'; 
}
