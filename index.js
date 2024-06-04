function scuberGreetingForFeet(rideLength){
  // Write your code here!
  if (rideLength <= 400) {
    return "This one is on me!";
  } else if (400 < rideLength && rideLength < 2000) {
    return "That will be twenty bucks.";
  } else if (2000 < rideLength && rideLength < 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  switch (tipAmount) {
    case 'generous' :
      return "Thank you so much.";
    case 'not as generous' :
      return "Thank you.";
    default: 
      return "Bye.";
  }
}