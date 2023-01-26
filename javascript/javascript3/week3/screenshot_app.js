const BASE_URL = "https://crudcrud.com/api/";
const urlInput = document.getElementById("urlInput");
const generateAndSaveScreenshotBtn =
  document.getElementById("getScreenshotBtn");
const savingMsg = document.getElementById("savingMsg");
const displayListBtn = document.getElementById("showBtn");
const savedImgsEl = document.getElementById("savedImgs");

let screenshotURL;

const generateScreenshot = async () => {
  if (urlInput.value === "") {
    alert("Insert a url!");
  } else {
    savingMsg.innerHTML = `<p class='message'>capturing...</p>`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(
        `https://website-screenshot6.p.rapidapi.com/screenshot?url=${urlInput.value}`,
        options
      );
      if (!response.ok) throw new Error("Problem getting screenshot.");

      const data = await response.json();
      screenshotURL = data.screenshotUrl;
      savingMsg.innerHTML = `
      <div class="previewBox">
      <p class="previewMsg">Screenshot preview</p>
      <img src="${screenshotURL}" class="previewScreenshot" />
    </div>`;
      // savingMsg.style.visibility = "hidden";
    } catch (err) {
      console.error(`${err} 💣💥`);
    }
  }
  saveScreenshot();
};

const saveScreenshot = async () => {
  if (screenshotURL === undefined) {
    alert("Please enter a url");
  } else {
    const body = {
      imageUrl: screenshotURL,
    };
    try {
      const response = await fetch(`${BASE_URL}${API_KEY}/blog`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Problem saving screenshot.");
    } catch (err) {
      console.error(`${err} 💣💥`);
    }
  }
};

const renderScreenshotList = (screenshotURL) => {
  return `
  <div class="savedImgBox">
  <img class="saveImg" src="${screenshotURL.imageUrl}" />
  <button
    onclick="screenshotDelete('${screenshotURL._id}')"
    class="deleteBtn"
  >
    Delete
  </button>
</div> `;
};

const displayScreenshot = async () => {
  savedImgsEl.innerHTML = "";
  try {
    const response = await fetch(`${BASE_URL}${API_KEY}/blog`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    data.forEach((url) => {
      savedImgsEl.innerHTML += renderScreenshotList(url);
    });
    screenshotURL = data;
    savingMsg.innerHTML = "";
  } catch (err) {
    console.error(`${err} 💣💥`);
  }
};

const screenshotDelete = async (screenshotId) => {
  try {
    const response = await fetch(`${BASE_URL}${API_KEY}/blog/${screenshotId}`, {
      method: "DELETE",
    });
    screenshotURL = screenshotURL.filter((element) => {
      if (element._id !== screenshotId) {
        return screenshotURL;
      }
    });
    savedImgsEl.innerHTML = "";
    screenshotURL.forEach((screenshot) => {
      savedImgsEl.innerHTML += renderScreenshotList(screenshot);
    });
  } catch (err) {
    console.error(`${err} 💣💥`);
  }
};

generateAndSaveScreenshotBtn.addEventListener("click", generateScreenshot);
displayListBtn.addEventListener("click", displayScreenshot);
