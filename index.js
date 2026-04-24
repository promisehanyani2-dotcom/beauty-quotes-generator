function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Wear your scars like stardust",
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}

let quoteElement = document.querySelector("#quote-generator-form");
quoteElement.addEventListener("submit", generateQuote);
