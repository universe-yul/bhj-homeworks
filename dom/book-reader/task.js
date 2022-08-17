const fontSize  =  Array.from(document.querySelectorAll('.font-size'));
 const book = document.getElementById('book');

 for (let i = 1; i < fontSize.length; i++) {
 	fontSize[i].addEventListener('click', (event) => {
 		event.preventDefault();

 		document.querySelector('.font-size_active').classList.remove('font-size_active');
 		fontSize[i].classList.add('font-size_active');

 		if (fontSize[i].dataset.size === 'small') {
 			book.classList.remove('book_fs-big');
 			book.classList.add('book_fs-small');
 		} else if (fontSize[i].dataset.size === 'big') {
 			book.classList.remove('book_fs-small');
 			book.classList.add('book_fs-big');
 		} else {
 			book.classList.remove('book_fs-big');
 			book.classList.remove('book_fs-small');
 		}
 	 })
 }