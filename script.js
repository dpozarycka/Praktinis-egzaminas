const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  speed: 1000,
  autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      delay: 2000
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        allowSlideNext: false,
        allowSlidePrev: false,
        autoplay: false
      }
    }
});

const burger = document.getElementById("burger")
const sideNav = document.querySelector(".side-nav")

burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    sideNav.classList.toggle("translate")
    sideNavOpened = true
})

window.addEventListener("resize", function(){
    if(this.window.innerWidth > 768){
        burger.classList.remove("rotate")
        sideNav.classList.remove("translate")
    }
})

// Scroll link animation

const nav1 = document.querySelectorAll("nav")[0]
const links1 = nav1.querySelectorAll(".link")

const nav2 = document.querySelectorAll("nav")[1]
const links2 = nav2.querySelectorAll(".link")

const sections = document.querySelectorAll("section")
window.addEventListener("scroll", function(){
    let current = ""
    for(let section of sections){
        const sectionTop = section.offsetTop
        if(window.pageYOffset >= sectionTop - 50){
            current = section.getAttribute("id")
        }
    }    

    for (var x of links1){
        x.classList.remove("active")
        if(x.getAttribute("href") === "#" + current){
            x.classList.add("active")
        }
    }

    for (var x of links2){
        x.classList.remove("active")
        if(x.getAttribute("href") === "#" + current){
            x.classList.add("active")
        }
    }
})

document.querySelector("h2").classList.add("visible")

// Close side nav
let sideNavOpened = false
for (let link of links2){
    link.addEventListener("click", function(){
        burger.classList.remove("rotate")
        sideNav.classList.remove("translate")
        sideNavOpened = false
    })
}