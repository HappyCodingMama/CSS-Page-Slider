const slider = document.querySelector('.slider');
const buttons = document.querySelector('.btn');
const options = document.querySelector('.option');
const slides = document.querySelector('.img');

var index = 1;
var size = slides[index].clientWidth;

update();

function update() {
      slider.getElementsByClassName.transform = "translateX(" + (-size * index) + "px)";
}

function btnCheck() {
      if (this.id === "prev") {
            index--;
      }

      else if (this.id === "next") {
            index++;
      }
}

buttons.forEach(btn => btn.addEventListener('click', btnCheck));