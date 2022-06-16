// WHEN WILL WE BE THERE

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
  
const travelTimeInMinutes = travelInformation.destinationDistance * 60 / travelInformation.speed;
  
function convert(num) {
    const hours = Math.floor(num / 60);
    const minutes = Math.floor(num % 60);
    return (`The total time of the trip will be ${hours} hours and ${minutes} minutes.`);
}
  
convert(travelTimeInMinutes);
console.log(convert(travelTimeInMinutes));
  