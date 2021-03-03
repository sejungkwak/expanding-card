document.querySelector(".painting-title").style.visibility = "visible";

document.querySelectorAll(".box").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelector(".transition").classList.remove("transition");
        this.classList.add("transition");
        document.querySelectorAll(".painting-title").forEach((text) => {
            text.style.visibility = "hidden";
        })
        this.firstElementChild.style.visibility = "visible";
    })
});