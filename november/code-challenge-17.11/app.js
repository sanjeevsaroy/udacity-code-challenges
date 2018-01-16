var emailInput = $('.input-email');
var subscribeBtn = $('.input-submit');

subscribeBtn.click( function (e) {

  var input = emailInput.val();

  if (input.length > 0) {
    if (input.indexOf('@') > -1) {
      alert('You will now receive our newsletters to the email address ' + input);
    }
    else {
      alert('Please enter a valid email address.');
    }
  }
});
