
let timerId = null;
const timerCountdow = function() {
const timerCycle = document.getElementById('timer');

 timerCycle.textContent = timerCycle.textContent - 1;
 
 if (timerCycle.textContent <= 0) {
    clearInterval(timerId);
    alert('Вы победили в конкурсе!')
 }
}

 timerId = setInterval(timerCountdow, 1000);