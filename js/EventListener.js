
function showProfile() {
    let click = document.getElementById("profile").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function showWarning() {
    document.getElementById("profile").addEventListener("click", function() {
        alert("아직 준비되지 않았습니다.");
        return false;
    })
}