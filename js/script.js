const searchButton = document.getElementById("search-icon");
let searchBar = document.querySelector(".search-bar");
let to_top_btn  = document.querySelector(".scrol-top-button");
searchButton.onclick=function(){
 if (searchBar.classList.contains("animation")){
     searchBar.classList.remove("animation")
 }
 else{
     searchBar.classList.add("animation");
 }


}
window.onscroll=function(){
   if (this.scrollY>300){
       to_top_btn.classList.add("d-flex")
   }
   else{
   to_top_btn.classList.remove("d-flex")
   }
}
to_top_btn.onclick=function(){
   window.scrollTo(0,0)
}