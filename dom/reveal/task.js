const reveal = Array.from(document.getElementsByClassName('reveal'));
window.addEventListener('scroll', isVisible);

function isVisible() {
	reveal.forEach((el) =>{
	let obj = ({ top, bottom, height} = el.getBoundingClientRect());	
	
	if (obj.top > 0 && obj.bottom < window.outerHeight - obj.height) {
		el.classList.add('reveal_active');
	} else {
	  	el.classList.remove('reveal_active')
	}
  })	
}	
	


