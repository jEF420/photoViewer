let imgArray = [
  {
    src: 'img/...png',
    tag: 'Bird'
  },
  {
    src: 'img/...png',
    tag: 'nature'
  },
  {
    src: 'img/...png',
    tag: 'city'
  }
];


function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-opacity-off";
}

var a = document.querySelector("img");


function nameCheck(input){
  if (input == "nature"){
     for (let i = 0; i < a[i]; i++) {
       var strng = a[i].getAttribute("src");
       var n = strng.includes("nature");
       if (n===true){
         a.getAttribute("src").includes("nature").style.display = "block";
         a.getAttribute("src").includes("city").style.display = "none";
         a.getAttribute("src").includes("ca").style.display = "none";
       }     
     }
     console.log(strng);
  }
  else if (input == "city"){
    for (let i = 0; i < a[i]; i++) {
      var strng = a[i].getAttribute("src");
      var m = strng.includes("city");
      if (m==true){
        a.getAttribute("src").includes("nature").style.display = "none";
        a.getAttribute("src").includes("city").style.display = "block";
        a.getAttribute("src").includes("ca").style.display = "none";
      }     
    }
    
 }
 else if (input == "ca"){
  for (let i = 0; i < a[i]; i++) {
    var strng = a[i].getAttribute("src");
    var m = strng.includes("ca");
    if (m==true){
      a.getAttribute("src").includes("nature").style.display = "none";
      a.getAttribute("src").includes("city").style.display = "none";
      a.getAttribute("src").includes("ca").style.display = "block";
    }     
  }
}
}