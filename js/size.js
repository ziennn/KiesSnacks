const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const parentPrice = document.querySelector('.price');
const childPriceClass = parentPrice.querySelector('h1');
const title = ["S","M","L"];
const price = ["₱55.00","₱75.00","₱85.00"];

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

labelChanger(title[0],price[0]);

for (let i = 0 ; i != colors.length; ++i){ 
    colors[i].addEventListener('click', function() {
        labelChanger(title[i],price[i]);
    });
}

sizes.forEach(size => size.addEventListener('click', changeSize));

function labelChanger(mytitle,myprice){
    queryTitle.innerHTML = mytitle;
    childPriceClass.innerHTML = myprice;
}