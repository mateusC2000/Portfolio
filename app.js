$('nav a, .my-contact a, .logo a').click(function(e){
  e.preventDefault()
  var id = $(this).attr('href');
    targetOffset = $(id).offset().top;
  $('html, body').animate({
    scrollTop: targetOffset
  }, 500);
});

let buttonOpen = document.getElementById('button-open')
let menuMobile = document.getElementById('menu-mobile')
let overlayMenu = document.getElementById('overlay-menu')

buttonOpen.addEventListener('click', ()=>{
  menuMobile.classList.add('open-menu')
})

menuMobile.addEventListener('click', ()=>{
  menuMobile.classList.remove('open-menu')
})

overlayMenu.addEventListener('click', ()=>{
  menuMobile.classList.remove('open-menu')
})