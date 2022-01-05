function getHoursAndMinutes(num) {
  let hours = 0;
  let minutes = 0;

  if (num >= 60) {
    while (num >= 60) {
      num -= 60;
      minutes = num;
      ++hours;
    }
  } 
  else
  {
    minutes = num;
  }

  if (hours === 1 && minutes === 1) {
    console.log(hours + " Hour, " + minutes + " minute");
  } else if (hours === 1 && minutes !== 1) {
    console.log(hours + " Hour, " + minutes + " minutes");
  } else if (hours !== 1 && minutes === 1) {
    console.log(hours + " Hours, " + minutes + " minute");
  } else if (hours !== 1 && minutes !== 1) {
    console.log(hours + " Hours, " + num + " minutes");
  }
}

getHoursAndMinutes(1);
