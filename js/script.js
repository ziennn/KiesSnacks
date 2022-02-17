let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

/*--------------------------------------------------------*/

const buyBtn = document.querySelector('.featured .buy-btn');
const okBtn = document.querySelector('.featured .ok-btn');
const popupBox = document.querySelector('.featured .popup-overlay');

buyBtn.addEventListener('click',() => {
    popupBox.classList.add('active')
})

okBtn.addEventListener('click',() => {
    popupBox.classList.remove('active')
})