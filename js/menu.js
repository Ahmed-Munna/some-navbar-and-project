var toggleBtn = document.querySelector(".toggler")
var slideBar = document.querySelector(".menu-bar")
var overlay = document.querySelector(".overlay")

toggleBtn.addEventListener("click",function(){
slideBar.classList.toggle("open-menu")
overlay.classList.toggle("open-overlay")
})
overlay.addEventListener('click',function(){
	slideBar.classList.remove("open-menu")
	this.classList.remove("open-overlay")
})