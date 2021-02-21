
let onDropdownMenu = document.querySelector(".dropdown-menu");
let doChangeMenu = document.querySelector(".profile-warp");

onDropdownMenu.addEventListener("click", function() {
    doChangeMenu.classList.toggle("active");
})
