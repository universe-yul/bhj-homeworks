const menuChild = document.querySelector('.menu').children; 
  for (let i = 1; i < menuChild.length-1 ; i++) {
	   menuChild[i].onclick = function() {
	   this.querySelector('ul').classList.toggle('menu_active');
	
   			return false 
   	 }
  }


