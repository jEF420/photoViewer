const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const subBtn = document.querySelector('#submit');
const email = document.querySelector('#email');
var save = new Array();

function validateemail() {

    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    var y = document.myform.firstname.value;
    var z = document.myform.lastname.value;
    var info = "\n" + "Name: " + y + " " + z + "\n" + "Email: " + x;

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address");
        email.style.border = "groove #FF0000";
        return false;
    } else {
        save.push(info);
        console.log(save + "\n");

    }

}