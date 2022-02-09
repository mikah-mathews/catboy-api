import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Catboy from './js/catboy.js';
import Name from './js/name.js';
import About from './js/about.js';

function getElements(catResponse, nameResponse) {
  if (catResponse, nameResponse) {
    $('.results').show();
    $('#image').html(`<img src=${catResponse.url} width="300">`);
    $('#name').html(`Name: ${nameResponse.results[0].name.first}`); 
    $('#details').text(); 
  } else {
    $('#error-message').show();
    $('#error-message').text(`There was an error: ${catResponse, nameResponse}`);
  }
}

//`${details}`

async function makeApiCall() {
  const catResponse = await Catboy.getMatch();
  const nameResponse = await Name.grabName();
  getElements(catResponse, nameResponse);
}

$(document).ready(function() {
  $('#search').click(function() {
    makeApiCall();
  });
  $('#match').on('click', function() {
    $('#your-match').show();
  });
});