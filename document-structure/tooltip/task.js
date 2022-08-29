const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(element => {
const tip = document.createElement("div");
tip.className = "tooltip";  
element.after(tip);

element.addEventListener('click', (event) => {
    const tooltipActive = document.querySelector(".tooltip_active");
    tip.textContent = element.getAttribute('title')
    let hintLocation = String(element.offsetLeft) + "px";
    
    console.log(element.getBoundingClientRect().top);
    
    tip.style.position = 'absolute';
    tip.style.marginLeft = hintLocation;

    if(element.nextSibling.classList.contains('tooltip_active')) {
        element.nextSibling.classList.remove('tooltip_active');
    } else if (tooltipActive) {
        tooltipActive.classList.remove('tooltip_active');
        element.nextSibling.classList.add('tooltip_active');
    } else {
        element.nextSibling.classList.add('tooltip_active')
    }
    event.preventDefault();
})
})