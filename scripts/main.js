const sendBtn = document.querySelector('#Submit');
var info = new Array();
sendBtn.addEventListener('click', submit());

function validateemail()  
{  

    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address");  
      return false;  
      }
}