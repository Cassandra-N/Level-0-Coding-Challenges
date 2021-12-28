function maximum(num1, num2, num3) {
  let max = 0;

  if (num1 > num2) {
    max = num1;
  } else {
    max = num2;
  }

  if (max < num3) {
    max = num3;
  }

  return max;
}

console.log(maximum(3, 2, 4));
