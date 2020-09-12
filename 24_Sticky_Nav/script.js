const NAV = document.querySelector('#main');


let topOfNav = NAV.offsetTop;


function fixNav() {

  if (window.scrollY >= topOfNav) {

    document.body.style.paddingTop = NAV.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');

  } else {

    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');

  }

}


window.addEventListener('scroll', fixNav);
