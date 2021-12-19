function getHoursAndMinutes(num){

    let hours = 0;
    let minutes = 0;

    while (num >= 60){
        num -= 60;
        minutes = num;
        ++hours;
    }

    if (hours == 1 && minutes == 1){
        console.log(hours + " Hour, " + minutes + " minute");
    }
    if (hours == 1 && minutes != 1){
        console.log(hours + " Hour, " + minutes + " minutes");
    }
    if (hours != 1 && minutes == 1){
        console.log(hours + " Hours, " + minutes + " minute");
    }
    if (hours != 1 && minutes != 1){
        console.log(hours + " Hours, " + num + " minutes" );
    }

}

getHoursAndMinutes(133);