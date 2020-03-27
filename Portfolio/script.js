function scrollAppear() {
	const text = document.querySelector('.text_zone');
	const textPosition = text.getBoundingClientRect().top;
	let screenPosition = window.innerHeight/0.5;

	if (textPosition < screenPosition) {
		text.classList.add('text_appear');
	}
}
//scrollAppear();
window.addEventListener('scroll', scrollAppear);

//Split main container
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container_main");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});