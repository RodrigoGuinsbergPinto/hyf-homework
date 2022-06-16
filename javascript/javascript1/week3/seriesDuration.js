// SERIES DURATION OF MY LIFE

const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];
  
const myFavoriteSeries = {title: 'Stranger Things', days: 1, hours: 4, minutes: 20};
seriesDurations.push(myFavoriteSeries);
  
console.log(seriesDurations);
let percentageOfLife = 0;

const calcSeriesTime = function() {
    const lifeSpanInMin = 80 * 365 * 60 * 24;
    const dayToMinutes = 24 * 60;
    const hoursToMinutes = 60;
    
    for (i = 0; i < seriesDurations.length; i++) {
        let seriesTime = ((seriesDurations[i].days * dayToMinutes + seriesDurations[i].hours * hoursToMinutes + seriesDurations[i].minutes) / lifeSpanInMin) * 100;
        percentageOfLife = percentageOfLife + seriesTime;
        percentageOfLife += seriesTime;
        console.log(`${seriesDurations[i].title} took ${seriesTime.toFixed(3)}% of my life.`);
    }
}

calcSeriesTime(seriesDurations);
console.log(`In total that is ${percentageOfLife.toFixed(3)}% of my life.`);
