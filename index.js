function showQuote(response) {
  (console.log("quote generated"),
    new Typewriter("#quote", {
      strings: response.data.answer,
      autoStart: true,
      delay: 25,
      cursor: "",
    }));
}

function generateQuote(event) {
  event.preventDefault();

  let quoteElement = document.querySelector("#input-instructions");
  let apiKey = "e5f2b33t5a4924f02bo250f1a930212e";
  let prompt = `Generate a beauty quote about ${quoteElement.value}`;
  let context = "The quote should be short, inspiring and uplifting.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote...");
  console.log(`context: ${context}`);
  console.log(`prompt: ${prompt}`);

  axios.get(apiUrl).then(showQuote);
}

let quoteElement = document.querySelector("#quote-generator-form");
quoteElement.addEventListener("submit", generateQuote);
