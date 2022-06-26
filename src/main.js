const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
console.log(navBtn);
navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "nav-close.svg";
    } else {
        navBtnImg.src = 'nav-open.svg';
    }
}

