const image = document.getElementById("image");
const btn = document.getElementById("button");
const api = "https://api.thecatapi.com/v1/images/search";
const res = fetch(api);
res
  .then((data) => data.json())
  .then((result) => {
    image.src = result[0].url;
  })
  .catch((error) => error.alert("loading..."));

btn.addEventListener("click", () => {
  window.location.reload();
});
