const dropMenuItem = document.getElementById('tqd-menu-item')
const dropMenu = document.getElementById('tqd-drop-menu')


document.addEventListener('click', (e) => {
    if (dropMenu.contains(e.target)) {
        // click to menu
        dropMenuItem.classList.toggle('hidden')
    }
    else {
        // click outside

    }
})
// set time count down
var full = new Date("Nov 1,2022 00:00:000").getTime()
setInterval(function(){
    var now = new Date().getTime()
    var D = full - now 
    var days = Math.floor(D/(1000*60*60*24))
    var hours = Math.floor(D/(1000*60*60))
    var minute = Math.floor(D/(1000*60))
    var secons = Math.floor(D/(1000))

    hours %= 24
    minute %= 60
    secons %= 60

    document.getElementById("days").innerText = days
    document.getElementById("hours").innerText = hours
    document.getElementById("minus").innerText = minute
    document.getElementById("secons").innerText = secons
})

// slide
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });