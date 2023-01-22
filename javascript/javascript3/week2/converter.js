const convertFrom = document.getElementById("convertFrom");
const convertTo = document.getElementById("convertTo");
const convertBtn = document.getElementById("btn");
const api = `https://open.er-api.com/v6/latest/`;

const getCurrenciesAndRates = async () => {
  try {
    const response = await fetch(`${api}USD`);
    if (response.status !== 200) {
      throw new Error("Something went wrong! 💥");
    }
    const data = await response.json();
    console.log(data);
    const rates = data.rates;
    console.log(data.rates);
    const keys = Object.keys(rates);
    console.log(keys);
    createDropdownOptions(keys);
  } catch (error) {
    console.log(`💥 Error message: `, error);
    return error.message;
  }
};
getCurrenciesAndRates();

const createDropdownOptions = (keys) => {
  keys.forEach((option) => {
    const dropdownFrom = document.createElement("option");
    dropdownFrom.innerHTML = option;
    dropdownFrom.setAttribute("value", option);
    convertFrom.appendChild(dropdownFrom);

    const drowdownTo = document.createElement("option");
    drowdownTo.innerHTML = option;
    drowdownTo.setAttribute("value", option);
    convertTo.appendChild(drowdownTo);
  });

  const dropdownFromDefault = convertFrom.querySelectorAll("option");
  for (options of dropdownFromDefault) {
    if (options.value === "EUR") {
      options.selected = true;
    }
  }

  const dropdownToDefault = convertTo.querySelectorAll("option");
  for (options of dropdownToDefault) {
    if (options.value === "DKK") {
      options.selected = true;
    }
  }
};

const fetchNewCurrency = async (currency) => {
  try {
    const response = await fetch(`${api}${currency}`);
    if (response.status !== 200) {
      throw new Error("Something went wrong! 💥");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`💥 Error message: `, error);
    return error.message;
  }
};

const getConversion = async () => {
  const inputEl = document.getElementById("inputEl");
  const inputValue = inputEl.value;
  const convertToValue = convertTo.value;
  const convertFromValue = convertFrom.value;

  const fetchData = await fetchNewCurrency(convertFromValue);
  if (inputValue <= 0) {
    alert("Please enter valid amount! 💰");
  } else {
    const rateSelector = fetchData.rates[convertToValue];
    const amount = (rateSelector * inputValue).toFixed(3);

    const output = document.getElementById("display-conversion");
    output.innerHTML = `Your convertion is: <br/> ${inputValue} ${convertFromValue} = ${amount} ${convertToValue}`;
    document.h3.appendChild(output);
  }
};

convertBtn.addEventListener("click", getConversion);
