interface ClockInterface {
  currentTime: number;
  setTime(d: number): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(h: number) {
    this.currentTime = h;
  }
  constructor(h: number, m: number) {}
}

const c = new Clock(1, 20);

console.log(c);
console.log(c.setTime(1));
