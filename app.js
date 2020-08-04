class Animator {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }

  fadeOut(time, toggle = false) {
    if (toggle && this.selector.classList.contains("fade-active")) {
      this.selector.style.opacity = 1;
      this.selector.classList.remove("fade-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.opacity = 0;
      this.selector.classList.add("fade-active");
    }
  }

  move(time, toggle = false, x = 0, y = 0) {
    if (toggle && this.selector.classList.contains("move-active")) {
      this.selector.style.transform = "translate(0px, 0px)";
      this.selector.classList.remove("move-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.transform = `translate(${x}px, ${y}px)`;
      this.selector.classList.add("move-active");
    }
  }

  changeColor(time, toggle = false, color) {
    if (toggle && this.selector.classList.contains("color-active")) {
      this.selector.style.color = "#000";
      this.selector.classList.remove("color-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.color = color;
      this.selector.classList.add("color-active");
    }
  }
}

const intro = new Animator("h1");
const paragraph = new Animator("p");
const buttonAnimator = new Animator("button");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  intro.fadeOut(1, true);
  buttonAnimator.move(1, true, 100, 100);
  paragraph.changeColor(3, true, "#e55d87");
});
