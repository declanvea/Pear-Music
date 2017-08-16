
let results = document.querySelector('.results');
let searchButton = document.querySelector("button");
let searchText = document.querySelector('.search-for-artist');
let audio = document.querySelector('audio');
let span = document.querySelector('span');

// api pulled from the itunes api documentation
let apiUrl = "https://itunes.apple.com/search?media=music&term=";

// setting the search to trigger if both the button is pressed or user types "enter"
searchButton.addEventListener("click", artistSearch);
searchText.addEventListener("keypress", function(event){
  if (event.keyCode === 13) {
    artistSearch();
  }
});
// fetching by combining the input text and the itunes api format
function artistSearch() {
  let typed = searchText.value;
  let url = `${apiUrl}${typed}`;
  fetch(url).then(function (response) {
    response.json().then(findArtist)
  });
  // iterating over the data pulled to populate artist, song, album, and an audio preview snippet
  function findArtist(data) {
    results.innerHTML = "";
    for (var i = 0; i < 25; i++) {
      let snippet = data.results[i].previewUrl;
      let artist = data.results[i].artistName;
      let song = data.results[i].trackName;
      let album = data.results[i].collectionName;
      let div = document.createElement('div');
      div.setAttribute("class", "result");
      div.innerHTML = `
                    <p class="p1">${artist}</p>
                    <img src=${data.results[i].artworkUrl100} alt="album cover">
                    <p class="p2">${song}</p>
                    <p class="p3">${album}</p>
                    `;
  // created an event listener to play the audio sound snippet, music plays by clicking anywhere on the div
      div.addEventListener("click", playSnippet);
      function playSnippet() {
        audio.setAttribute("src", snippet);
        audio.play();
        span.innerHTML = `${artist} - ${song}`;
      }
      results.appendChild(div);
    }
  }
}
