const api = "https://api.quotable.io/random";
const quote = document.querySelector(".quotes");
const author =  document.querySelector(".writer");
const btn = document.querySelector("#button");

btn.addEventListener("click" , getQuote);

function getQuote() {
    fetch(api)
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `“ ${data.content} ”`;
        author.innerHTML = `- ${data.author}`;
    })
}