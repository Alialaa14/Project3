const searchButton = document.getElementById("search-icon");
let searchBar = document.querySelector(".search-bar");
searchButton.onclick=function(){
 if (searchBar.classList.contains("animation")){
     searchBar.classList.remove("animation")
 }
 else{
     searchBar.classList.add("animation");
 }


}