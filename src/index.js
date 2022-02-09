import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Catboy from './js/catboy.js';

function getElements(response) {
  if (response) {
    $('.results').show();
    $('#image').html(`<img src=${response.url} width="300">`);
  } else {
    $('#error-message').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await Catboy.getMatch();
  getElements(response);
}

$(document).ready(function() {
  $('#search').click(function() {
    makeApiCall();
  });
});