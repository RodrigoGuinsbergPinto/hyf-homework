// Game Of Thrones Quotes API - https://gameofthronesquotes.xyz/

// This is an API where we can find data from the "Game of Thrones" series.

// It is possible to get data as random quotes, lists of houses and members, characters, and other things related to de show.

// It responds with a javascript object and keys have a value of a string.

fetch("https://api.gameofthronesquotes.xyz/v1/random")
  .then((response) => response.json())
  .then((data) => {
    console.log(`Game Of Thrones Quotes API`);
    console.log(data);
  });
