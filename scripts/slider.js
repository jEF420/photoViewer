let imgArray = [{
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

var a = document.querySelectorAll("img");


function nameCheck(input) {

    for (let i = 0; i < a.length; i++) {
        var strng = a[i].src;
        var n = strng.includes(input);
        console.log(a[i].src);
        if (n == true) {

            a[i].style.display = "block";
        } else {
            a[i].style.display = "none"
        }
    }


}