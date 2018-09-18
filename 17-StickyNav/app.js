const nav = document.querySelector('#main');

const topOfNav = nav.offsetTop; // element. distance to the top of browser
// window.scrollY how much you scroll down site

function fixNav() {
    console.log(topOfNav);
    console.log(window.scrollY);
    document.body.style.paddingTop = nav.offsetHeight + 'px';

    window.scrollY >= topOfNav ? document.body.classList.add('fixed-nav') : document.body.classList.remove('fixed-nav');
 
}

window.addEventListener('scroll', fixNav);






