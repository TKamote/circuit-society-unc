const tempLanding = document.querySelector('.landingPage-intro');
const container = document.querySelector('.container');

tempLanding.addEventListener('click', () => {
    tempLanding.style.display = "none";
    container.style.display = "flex";
})

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})
//console.log(panels[0]);

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}
