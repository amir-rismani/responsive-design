const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function(){
    this.classList.toggle('hamburger--open');
    this.parentNode.querySelector(".menu").classList.toggle('menu--open');
});