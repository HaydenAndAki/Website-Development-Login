function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;       
if(username=="Hayden"&& password=="aki")
{
    alert("Login Successful");
    window.open("https://haydenandaki.github.io/Website-Development/"); 
    return false;
}
else
{
    alert("Login Failed");
}
function openWindow() {
  openedWindow = window.open('https://haydenandaki.github.io/Login/login.html');
}

function closeOpenedWindow() {
  openedWindow.close();
}
}
