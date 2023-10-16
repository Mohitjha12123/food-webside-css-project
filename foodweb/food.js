$(document).ready(function(){
    $('.food-slider').slick({


autoplay:true,


        slidesToShow:3,


        slidesToScroll:1,



        prevArrow: ".prev-btn",


        nextArrow: ".next-btn",
    })
});


console.log("mohit")

let hours =document.getElementById("hours")
let min =document.getElementById("min")
let sec =document.getElementById("sec")


setInterval(()=>{
let currentTime =new Date();
hours.innerHTML=currentTime.getHours();
min.innerHTML=currentTime.getMinutes();
sec.innerHTML=currentTime.getSeconds();
},1000)
