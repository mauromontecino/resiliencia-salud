const events = {
  mobile: {
    start: "touchstart",
    move: "touchmove",
    end: "touchend",
  },
  desktop: {
    start: "mousedown",
    move: "mousemove",
    end: "mouseup",
  },
};

class Swiper {
  constructor(selector) {
    this.container = document.querySelector(selector);
    this.startPosition = 0;
    this.slideWidth = document.querySelector(".slide").offsetWidth;
    this.scrollValue = this.slideWidth + 10;
    this.slidesCount = this.container.querySelectorAll(".slide").length;
    this.transformValue = 0;
    this._move = this._move.bind(this);
    this._endMove = this._endMove.bind(this);
    let isMobile =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);
    this.eventType = isMobile ? "mobile" : "desktop";
  }
  initHandlers() {
    this.container.addEventListener(events[this.eventType].start, (e) => {
      this.startPosition = e.clientX || e.changedTouches[0].clientX;
      document.body.addEventListener(events[this.eventType].move, this._move);
      document.body.addEventListener(events[this.eventType].end, this._endMove);
    });
  }
  _move(e) {
    e.preventDefault();
    let nextPosition = e.clientX || e.changedTouches[0].clientX;
    let shift = this.startPosition - nextPosition + this.transformValue;
    this.container.style.transform = `translateX(${-shift}px)`;
  }
  _endMove(e) {
    document.body.removeEventListener(events[this.eventType].move, this._move);
    document.body.removeEventListener(
      events[this.eventType].end,
      this._endMove
    );
    this.container.classList.add("animate");

    let endPosition = e.clientX || e.changedTouches[0].clientX;
    let moveDirection = this.startPosition >= endPosition ? "left" : "right";
    let newCoordinate = 0;

    if (moveDirection === "left") {
      newCoordinate = this.transformValue + this.scrollValue;
    } else {
      newCoordinate = this.transformValue - this.scrollValue;
    }

    if (
      newCoordinate >= 0 &&
      newCoordinate < this.slidesCount * this.scrollValue
    ) {
      this.transformValue = newCoordinate;
    }

    this.container.style.transform = `translateX(${-this.transformValue}px)`;

    this.animationTimeoutID = setTimeout(() => {
      this.container.classList.remove("animate");
    }, 300);
  }
}

let swiper = new Swiper(".slider-wrapper");
swiper.initHandlers();

function mostrar() {
  div = document.getElementById("flotante");
  div.style.display = "";
  abrir = document.getElementById("open");
  abrir.style.display = "none";
}

function cerrar() {
  div = document.getElementById("flotante");
  div.style.display = "none";
  abrir = document.getElementById("open");
  abrir.style.display = "";
}
