const boxes = document.querySelectorAll(".box-character");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function (e) {
        clean()
        this.classList.add("active")
        
    })
}

function clean (){
    for (let i= 0; i < boxes.length; i++) {
        boxes[i].classList.remove("active")
    }
}