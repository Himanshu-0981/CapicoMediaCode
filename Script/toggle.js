let toggleBtn = document.querySelector('.nav-toggle-btn');
let nav = document.querySelector('.navbar');

// toogle function

let toggleFunc = () => {
    nav.classList.toggle('active');
}
toggleBtn.addEventListener('click',toggleFunc);
