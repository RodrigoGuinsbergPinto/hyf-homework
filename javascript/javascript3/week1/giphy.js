// Giphy API Key: Wyd7tK4cooBne57SnMhnvk2t813zedju

const btn = document.querySelector("#searchBtn");

const getGif = () => {
  const gifNumbInput = document.querySelector("#gifNumbInput").value;
  const wordInput = document.querySelector("#wordInput").value.trim();

  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${wordInput}&api_key=Wyd7tK4cooBne57SnMhnvk2t813zedju&limit=${gifNumbInput}`
  )
    .then((response) => response.json())
    .then((giphy) => {
      if (wordInput === "") {
        alert("Plese enter any word!");
      } else {
        giphy.data.forEach((gif) => {
          const giphyUrl = gif.images.downsized.url;
          let img = document.createElement("img");
          img.src = giphyUrl;
          img.style =
            "width:250px; height:200px; border-radius:20px; padding: .5rem;";
          document.body.appendChild(img);
        });
      }
    });
};

btn.addEventListener("click", getGif);
