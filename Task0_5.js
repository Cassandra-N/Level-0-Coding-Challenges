function getAreaOfTriangle(side1, side2, side3) {
  let semiPerimeter = 0;
  let area = 0;

  semiPerimeter = (1 / 2) * (side1 + side2 + side3);

  area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3)
  );

  return area;
}

console.log(getAreaOfTriangle(3, 4, 5));
