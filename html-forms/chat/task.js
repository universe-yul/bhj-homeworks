const chat = document.querySelector('.chat-widget__side');
const chatActive = document.querySelector('.chat-widget');


chat.addEventListener('click', function() {
	chatActive.classList.add('chat-widget_active');
})

 const input = document.querySelector('.chat-widget__input');
 const messagesChat = document.querySelector('.chat-widget__messages');

 let messagesText = [
 	"Вы не купили ни одного товара, чтобы с нами здороваться!",
 	"Где ваша совесть?",
 	"К сожалению все операторы заняты.",
 	"Не пишите нам больше",
 	"Добрый день! До свидания!"
 ]

 function returnMessage () {
 	let text = 0;
 	let allText = messagesText.length - 1;
 	return messagesText[Math.floor(Math.random() * (allText - text +1)) + text];
 }

 input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && input.value != '') {
        let dateTime = new Date();
        dateTime = `${dateTime.getHours()}:${dateTime.getMinutes()}`;
        
        messagesChat.innerHTML += `
  		<div class="message message_client">
    		<div class="message__time">${dateTime}</div>
    		<div class="message__text">${input.value}</div>
    	</div>`;
    	messagesChat.innerHTML += `
  		<div class="message">
    		<div class="message__time">${dateTime}</div>
    		<div class="message__text">${returnMessage()}</div>
  	</div>`;
  	    input.value = '';
    }
 })
  