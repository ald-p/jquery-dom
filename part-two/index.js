
const moviesList = [];

// Event listener on form submit
$('form').on("submit", function(e) {
  e.preventDefault();
  const $title = $('#title').val();
  const $rating = $('#rating').val();

  $('#title').val("");
  $('#rating').val("");

  // if not valid, return
  if(!validate($title, $rating)) {
    $("#val-rating").text("Not valid! Try again!").show().fadeOut(1500);
    return;
  }

  const movieData = { $title, $rating };
  moviesList.push(movieData);
  appendToDOM($title, $rating);
})

// Delete movie event listener
$('#movie-list').on("click", ".delete-btn", function(e) {
  $( e.target ).parent().remove();
})

// sort 
$('#title-sort').on("click", function(e) {
  $(this).toggleClass('sort-a-z');

  if ($('#title-sort').hasClass('sort-a-z')) {
    const sortedMoviesList = moviesList.sort(asc_sort);
    console.log(sortedMoviesList);
  } else {
    const sortedMoviesList = moviesList.sort(asc_sort);
    console.log(sortedMoviesList);
  }
})

// append inputs to DOM
function appendToDOM(movie, rating) {
  const $title = $( `<div class='movie-title'>Title: ${movie}</div>`);
  const $rating = $( `<div class='movie-rating'>Rating: ${rating}</div>`);
  const $deleteBtn = $( "<button class='delete-btn'>Delete</button>");
  
  $('<div class="movie"></div>').append( $title, $rating, $deleteBtn).appendTo('#movie-list');
}

// Validate rating
function validate(title, rating) {
  if (rating == "" || rating < 0 || rating > 10) {
    return false;
  }
  if (title == "" || title.length < 2) {
    return false;
  }
  return true;
}

// sort
function asc_sort(a, b) {
  return ($(b).text()) < ($(a).text()) ? 1 : -1;
};

function dec_sort(a, b) {
  return ($(b).text()) > ($(a).text()) ? 1 : -1; 
};

