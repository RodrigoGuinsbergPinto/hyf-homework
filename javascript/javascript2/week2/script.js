// WARMUP ARRAY EXERCISES
// 1.1. Doubling of number

const numbers = [1, 2, 3, 4];

const doubleOddNumbers = function (arrayOfNumbers) {
  const newArrayOfNumbers = arrayOfNumbers
    .filter((number) => number % 2 !== 0)
    .map((number) => number * 2);
  console.log("The doubled numbers are: ", newArrayOfNumbers);
};
doubleOddNumbers(numbers);

// 1.2. Working with movies
// 1-short title
const shortTitleMovies = movies.filter((movie) => movie.title.length <= 5);
console.log(shortTitleMovies);

// 2-long titles
const longTitleMovies = movies.filter((movie) => movie.title.length > 50);
console.log(longTitleMovies);

// 3-Count the number of movies made between 1980-1989
const the80sMovies = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
).length;
console.log(the80sMovies); // 638

// 4-Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const moviesWithTag = movies.filter((movie) => {
  if (movie.rating >= 7) {
    return (movie.tag = "Good");
  }
  if (movie.rating >= 4) {
    return (movie.tag = "Average");
  } else {
    return (movie.tag = "Bad");
  }
});
// Using Ternary Operator
// let rating =
//     (movie.rating >= 7) ? "Good" : movie.rating >= 4 && movie.rating < 7 ? "Average" : "Bad";
//   movie.tag = rating;
//   return movie;
// });
console.log(moviesWithTag);

// 5-Movies rated higher than 6
const movieRating = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(movieRating);

// 6-Count the total number of movies containing any of following keywords:
// Surfer, Alien or Benjamin. So if there were 3 movies that contained
//Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
// Can you make sure the search is case insensitive?

const keywordsRegex = /Surfer|Alien|Benjamin/gi;

const keywords = movies.filter((movie) => {
  let findKeywords = movie.title.match(keywordsRegex);
  return findKeywords;
}).length;
console.log(
  `The total number of movies containing the words Surfer, Alien or Benjamin is ${keywords}.`
);

// 8-Calculate the average rating of all the movies

const averageRating = movies.reduce(function (acc, movie) {
  const average = acc + movie.rating / movies.length;
  return average;
}, 0);

console.log(averageRating);

// 9-Count the total number of Good, Average and Bad movies using reduce.
const moviesByTag1 = movies.reduce(
  (mv, movie) => {
    if (movie.tag == "Good") {
      mv.goodMovies++;
    } else if (movie.tag == "Average") {
      mv.averageMovies++;
    } else if (movie.tag == "Bad") {
      mv.badMovies++;
    }
    return mv;
  },
  { goodMovies: 0, averageMovies: 0, badMovies: 0 }
);

const moviesByTag2 = moviesWithTag.reduce((acc, movie) => {
  return { ...acc, [movie.tag]: (acc[movie.tag] || 0) + 1 };
}, {});

console.log(moviesByTag1);

console.log(moviesByTag2);
