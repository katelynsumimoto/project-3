// jshint esversion: 6

let failHandler = () => {
  console.log("Fail -- unknown breed");
  $(".photos").empty().html("<h3>Error -- breed not found<h3>");
};

//1. Define the onclick handler
let clickHandler = function() {
  let imgElem;
  let prefixURL =
    'https://dog.ceo/api/breed/';
  let suffixURL = '/images/random/6';
  //get value entered by user from textbox
  let breedTag = $(`input[type = "text"]`).val().toLowerCase();


  /*let breedTag = (document.querySelector('input[type = "text"]').value).toLowerCase();
   */
  let requestURL = prefixURL + breedTag + suffixURL;
  console.log(requestURL);

  console.log(document.querySelectorAll("h2")[0].textContent);
  console.log($("h2")[0].textContent);


  $('.photos').html('');
  //clear old photos
  //document.querySelector('.photos').innerHTML = '';

  $.getJSON(requestURL, function(dogAPIresponse) {
    console.log(dogAPIresponse.message);
    dogAPIresponse.message.forEach(function(imgURL, index) {
      console.log(`${imgURL} ${index}`);

      let imgElem = $("<img>");

      //let imgElem = document.createElement('img');
      imgElem.hidden = true;

      // set the attribute to the response url
      imgElem.attr('src', imgURL);
      imgElem.attr('width', '100');

      // attach the img tag to the main
      // photos element and then fade it in
      $(".photos").append(imgElem);
      //document.querySelector('.photos').appendChild(imgElem);
      imgElem.hidden = false;

    });
  }).fail(failHandler);
};

//2. Register the onclick handler for each button after the DOM is complete
window.addEventListener('load', () => {
  //select the buttons
  let buttonElem = document.querySelector('button');
  buttonElem.addEventListener('click', clickHandler);
});