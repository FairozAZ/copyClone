const mobileMenu = document.querySelector('.menu-search');

function openMenu() {
    if(mobileMenu.style.width === '70vw'){
        mobileMenu.style.width = '0vw';
    } else {
        mobileMenu.style.width = '70vw';
    }
}

function closeMenu(){
    mobileMenu.style.width = '0vw';
}
