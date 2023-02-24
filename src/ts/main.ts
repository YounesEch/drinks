const buttons = document.querySelector('#button');
buttons.addEventListener('click', goToUrl);


function goToUrl(){

}

const themeToggle = document.querySelector(".themeToggle");
themeToggle.addEventListener('click', changeTheme);

function changeTheme (){
    document.body.classList.toggle('darkmode');
    themeToggle.classList.toggle('darkmode');
}