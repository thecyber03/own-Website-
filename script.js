let code = document.querySelector(".fa-code")
let home = document.querySelector(".fa-home")
let stg = document.querySelector(".fa-user")

home.addEventListener("click", function(){
  document.querySelector(".code").style.display = "none"
  document.querySelector(".home").style.display = "block"
  document.querySelector(".stg").style.display = "none"
})

code.addEventListener("click", function(){
 document.querySelector(".code").style.display = "block"
  document.querySelector(".home").style.display = "none"
  document.querySelector(".stg").style.display = "none"
})

stg.addEventListener("click", function(){
 document.querySelector(".code").style.display = "none"
  document.querySelector(".home").style.display = "none"
  document.querySelector(".stg").style.display = "block"
})

let searchBtn = document.querySelector(".fa-bars")
let searchInput = document.querySelector(".btn")
let clickTime = 0
 searchBtn.addEventListener("click", function (){
    if(clickTime == 0){
      searchInput.style.display = "block"
      clickTime = 1
    }else{
      searchInput.style.display = "none"
      clickTime = 0
    }
 })