document.addEventListener("DOMContentLoaded", () => {
     const headerBootstrap = document.querySelector(".header__bootstrap");
     const scrollHeaderFixed = (headerBootstrap) => {
          window.addEventListener("scroll", () => {
               if (scrollY > 100) {
                    headerBootstrap.classList.add("scroll-header")
               } else {
                    headerBootstrap.classList.remove("scroll-header")
               }
          })
     }
     scrollHeaderFixed(headerBootstrap)
}, false)