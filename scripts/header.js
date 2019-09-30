const body = document.querySelector("button");
const menuBTN = document.getElementById("menu");

var atag0 = document.createElement("a");
var atag1 = document.createElement("a");
var atag2 = document.createElement("a");
var atag3 = document.createElement("a");
body.insertAdjacentHTML('afterend', '<header>');

atag0.href = "index.html";
atag1.href = "viewer.html";
atag2.href = "info.html";
atag3.href = "contact.html";

var indexLink = document.createTextNode("Home");
var photoLink = document.createTextNode("Photos")
var infoLink = document.createTextNode("Contact information");
var submitLink = document.createTextNode("Submit");

atag0.appendChild(indexLink);
atag1.appendChild(photoLink);
atag2.appendChild(infoLink);
atag3.appendChild(submitLink);

document.querySelector("header").appendChild(atag0);
document.querySelector("header").appendChild(atag1);
document.querySelector("header").appendChild(atag2);
document.querySelector("header").appendChild(atag3);


menuBTN.addEventListener("mouseenter", function() {
    show();
});
menuBTN.addEventListener("mouseleave", function() {
    hide();
});

function show() {
    document.querySelector("header").style.display = "inline-block";
}

function hide() {
    document.querySelector("header").style.display = "none";
}