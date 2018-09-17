const nav = document.querySelector('#main');

const topOfNav = nav.offsetTop; // element. distance to the top of browser
// window.scrollY how much you scroll down




function fixNav() {
    console.log(topOfNav);
    console.log(window.scrollY);

    window.scrollY >= topOfNav ? document.body.classList.add('fixed-nav') : document.body.classList.remove('fixed-nav');
  
 

  
}

window.addEventListener('scroll', fixNav);




const social = document.querySelector('#social');
const topOf = social.offsetTop;
    
    function fixNav() {
      if(window.scrollY >= topOfNav ) {
        document.body.classList.add('fixed-nav');
        console.log("now register");
      }
      else{
        document.body.classList.remove('fixed-nav');
        console.log("now unregister");
      }
                          
    }
    
    window.addEventListener('scroll', fixNav);



