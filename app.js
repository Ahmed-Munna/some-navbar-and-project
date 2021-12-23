var toggleBtn = document.querySelector(".mblmenu")
var slideBar = document.querySelector(".slide-bar")
var overlay = document.querySelector(".overlay")

toggleBtn.addEventListener("click",function(){
slideBar.classList.toggle("width")
overlay.classList.toggle("open")
})
overlay.addEventListener('click',function(){
	slideBar.classList.remove("width")
	this.classList.remove("open")
})