const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error('Critical error: Non-numeric input detected.');
    } else if (dividend === "" || divider === "") {
      result.innerText = 'Division not performed. Both values are required in inputs. Try again';
    } else if (divider < 0) {
      result.innerText = 'Division not performed. Invalid number provided. Try again';
      console.error('Invalid division with negative divider attempted.');
    } else {
      const divisionResult = Math.floor(dividend / divider);
      result.innerText = divisionResult;
    }
  } catch (error) {
    document.body.innerHTML = `<div>Something critical went wrong. Please reload the page`;
    console.error(error.message);
  } 
});

