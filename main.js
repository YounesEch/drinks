const themeToggle = document.querySelector(".themeToggle");
themeToggle.addEventListener('click', changeTheme);

function changeTheme (){
    document.body.classList.toggle('darkmode');
    themeToggle.classList.toggle('darkmode');
}

const firstBtn = document.querySelector('#firstBtn');
const secondBtn=document.querySelector('#secondBtn')
const thirdBtn=document.querySelector('#thirdBtn')
const forthBtn=document.querySelector('#forthBtn')


firstBtn.addEventListener('click', goToUrl);
secondBtn.addEventListener('click', goToSite);
thirdBtn.addEventListener('click', goToPage);
forthBtn.addEventListener('click', goToUrl1);


function goToUrl(){
    window.location.href="https://www.apple.com/se/iphone-14/";
}

function goToSite(){
    window.location.href="https://www.samsung.com/pt/";
}

function goToPage(){
    window.location.href="https://www.huawei.com/en/";
}

function goToUrl1(){
    window.location.href="https://www.oneplus.com/global?gclid=4433e34f631413b9ce3780b82fe4db61&gclsrc=3p.ds&msclkid=4433e34f631413b9ce3780b82fe4db61";
}


const firstText=document.querySelector('#iphone');
const secondText=document.querySelector('#second');
const thirdText=document.querySelector('#third');
const forthText=document.querySelector('#forth');

firstBtn.addEventListener('click', display);

function display(){
    document.body.classList.toggle('active');
    firstBtn.classList.toggle("active");
}




