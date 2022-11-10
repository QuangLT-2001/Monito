document.addEventListener("DOMContentLoaded", () => {
     const dropdownItem = document.querySelectorAll(".dropdown__language .dropdown-item");
     const btnSelect = document.querySelector(".btn-select");
     const changeCurrentSelect = (dropdownItem, btnSelect) => {
          for (let i = 0; i < dropdownItem.length; i++) {
               dropdownItem[i].addEventListener("click", (e) => {
                    e.preventDefault();
                    let html = dropdownItem[i].innerHTML
                    btnSelect.innerHTML = html
               })
          }
     }
     changeCurrentSelect(dropdownItem, btnSelect)
}, false)