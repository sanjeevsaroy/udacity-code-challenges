var navItems = $('.nav-item');
var colourClass;

navItems.mouseenter(function () {

  var navItem = $(this);
  colourClass = navItem.attr('class').split(" ")[1];
  console.log(colourClass);

  var prevItem = navItem.prev();
  var nextItem = navItem.next();

  if (prevItem.hasClass('nav-item')) {
    setHrColour(prevItem, "visible");
  }
  if (nextItem.hasClass('nav-item')) {
    setHrColour(nextItem, "visible");
  }
});

navItems.mouseleave(function () {

  var navItem = $(this);
  var prevItem = navItem.prev();
  var nextItem = navItem.next();

  if (prevItem.hasClass('nav-item')) {
    setHrColour(prevItem, "hidden");
  }
  if (nextItem.hasClass('nav-item')) {
    setHrColour(nextItem, "hidden");
  }
});

function setHrColour(item, visibility) {
  console.log(visibility);
    // get hr
    var hr = item.find("hr");
    // add class to change colour
    hr.toggleClass(colourClass);
    // make visible
    hr.css('visibility', visibility);
}
