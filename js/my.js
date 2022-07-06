
window.addEventListener('scroll',reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  // console.log(document.querySelectorAll('.reveal'));
  for (let index = 0; index < reveals.length; index++) {
    var windowheight = window.innerHeight;
  var revealtop = reveals[index].getBoundingClientRect().top;
  var revealpoint = 150;
  if (revealtop < windowheight - revealpoint){
    reveals[index].classList.add('active');
  }
  else{
    reveals[index].classList.remove('active');
  }
  }
 
}
