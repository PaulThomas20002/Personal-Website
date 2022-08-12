function toggle() {
    var element = document.getElementById("close");
    element.classList.toggle("open");
  } 
  var element = document.getElementById("close");
  var li = document.querySelectorAll('li');
    li.forEach(item => {
      item.addEventListener('click',()=>{
        if(element.classList.contains("open")){
          element.classList.remove("open");
          console.log("hi")
        }
      })
    });

var navbar = document.querySelector('header')

var li = document.querySelector('li');


window.onscroll = function() {

  if (window.pageYOffset > 387) {
    navbar.classList.add('header_color')
  } else {
    navbar.classList.remove('header_color')
  }
}
