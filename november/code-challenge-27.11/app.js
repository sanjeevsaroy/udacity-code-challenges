$('.download-button').click( function () {

  var images = $('img');

  images.each( function () {
    var source = $(this).attr('src');
    window.open(source, '_blank');
  })
});
