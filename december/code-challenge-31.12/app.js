var mainDiv = $('.main');
var mainHeading = $('.main h1');

// Add a banner at the top of the page, to remind the user to subscribe for when the site is ready for NYE 2018
var addBanner = function() {

  // Reduce space between aleet message and the main heading
  mainHeading.css('margin-top', '50px');

  var alertMessage = $('<div class="alert-message"></div>');
  var alertIcon = $('<i class="fa fa-lg fa-exclamation-circle" aria-hidden="true"></i>');
  var message = $('<p>You\'re viewing the 2017 website. <a class="alert-sign-up" href="#">Sign up for our updates</a> and be the first to know when we\'re ready for 2018.</p>')

  alertMessage.append(alertIcon);
  alertMessage.append(message);
  mainDiv.prepend(alertMessage);

  $('.alert-sign-up').click( function(e) {
    e.preventDefault();

    promptForEmail();
  });
}

var promptForEmail = function() {
  var email = prompt('Please enter your email address to receive updates.');

  if (email.length === 0) {
    promptForEmail();
  }
  else {
     alert('Thank you for registering for updates. Enjoy 2018!');
  }
}

setTimeout(addBanner, 3000);
