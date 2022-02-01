function scuberGreetingForFeet(distance){
  let result

  if (distance <= 400) {
    result = `This one is on me!`;
  } 
  else if (distance >= 2000) {
    result = `I will gladly take your thirty bucks.`;
        if (distance>= 2500){
          result= "No can do."
     }
  }
  return result
}


function ternaryCheckCity(city){
return city === `NYC` ? `Ok, sounds good.` : `No go.`;

}
function switchOnCharmFromTip(tip){
let charm
switch (tip) {
  case `generous`:
      charm = `Thank you so much.`;
  break;
  case 'not as generous':
      charm = `Thank you.`;
  break;
  default: 
    return `Bye.`;
  }
  return charm
}

console.log(switchOnCharmFromTip(generous))