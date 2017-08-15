/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let button = document.querySelector('button');
let inputBox = document.querySelector('input');


let apiUrl = "https://itunes.apple.com/search?term=";

button.addEventListener("click", searchRequest);
inputBox.addEventListener("keypress", function(event){
  if (event.keyCode === 13) {
    searchRequest();
  }
});
function searchRequest() {
  let inputData = inputBox.value;
  let url = `${apiUrl}${inputData}`;
  fetch(url).then(function (response) {
    response.json().then();
  });
}

// TODO: Divs to populate by search:
//     "trackName": song name,
//     "collectionName": album,
//     "artistName": artist,
