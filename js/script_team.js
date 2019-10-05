
function changeTextJoke(){
	document.getElementById("changeToJoke").innerHTML = "Just a joke..."
	setTimeout(changeTextNormal, 1500)
}
function changeTextNormal(){
		document.getElementById("changeToJoke").innerHTML = "A higher being<br>The Web-Designer"
}
