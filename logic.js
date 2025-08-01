document.querySelector(".links").addEventListener("click", () => {
    var linksList = document.querySelector(".links ul");
    var middleChild = document.querySelector(".links .icon span:nth-child(2)");
    if (linksList.style.display == "none") {
        linksList.style.display = "block";
        middleChild.style.width = "100%";
    } else {
        linksList.style.display = "none";
        middleChild.style.width = "50%";
    }
});
