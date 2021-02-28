interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {
  color: 1,
} as Square;
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;

console.log(square);
