// WHEN WILL WE BE THERE

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
  
function getTotalTripTime(speed, destinationDistance) {
    const travelTimeInMinutes = travelInformation.destinationDistance * 60 / travelInformation.speed;
    const hours = Math.floor(travelTimeInMinutes / 60);
    const minutes = Math.floor(travelTimeInMinutes % 60);
    return (`The total time of the trip will be ${hours} hours and ${minutes} minutes.`);
}
  
console.log(getTotalTripTime(travelInformation));