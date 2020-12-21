//const title = document.querySelector('h1');
const titleBtn1 = document.querySelector('.title-btn1');
const landingPage = document.querySelector('.landingPage');
const pioneers = document.querySelector('.pioneers');


titleBtn1.addEventListener('click', () => {
    landingPage.style.display = 'none';
    pioneers.style.display = 'flex';
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
};
