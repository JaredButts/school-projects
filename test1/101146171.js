let rnd = Math.random() >= 0.5;

if (rnd) {
    if (rnd) {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    console.log("The time is: " + hours + ":" + minutes + ":" + seconds);
    }
} 
else {
    let rnd2 = Math.floor(Math.random() * 100);
    switch(true) {
        case (rnd2 > 0 && rnd2 <= 20):
          console.log("The number is between 1 and 20: " + rnd2);
          break;
        case (rnd2 > 20 && rnd2 <= 40):
          console.log("The number is between 21 and 40: " + rnd2);
          break;
        case (rnd2 > 40 && rnd2 <= 60):
          console.log("The number is between 41 and 60: " + rnd2);
          break;
        case (rnd2 > 60 && rnd2 <= 80):
          console.log("The number is between 61 and 80: " + rnd2);
          break;
        case (rnd2 > 80 && rnd2 <= 100):
          console.log("The number is between 81 and 100: " + rnd2);
          break;
    }
}