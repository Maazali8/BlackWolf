const paragraphs = document.querySelectorAll(".text");
const pic=document.querySelectorAll(".pic");
const text=document.querySelectorAll(".text_ii");
const pic_ii=document.querySelectorAll(".pic_ii");
document.addEventListener("scroll", function () {
  pic_ii.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("pic_ii--visible"); 
    }
  });
});

document.addEventListener("scroll", function () {
  text.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("text_ii--visible"); 
    }
  });
});


document.addEventListener("scroll", function () {
  pic.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("pic--visible"); 
    }
  });
});

document.addEventListener("scroll", function () {
  paragraphs.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("text--visible"); 
    }
  });
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top <
      (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
  );
}
