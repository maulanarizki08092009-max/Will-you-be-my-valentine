function moveRandomEl(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.floor(Math.random() * 30) + 'vh';
    elm.style.left = Math.floor(Math.random() * 30) + 'vw';
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});