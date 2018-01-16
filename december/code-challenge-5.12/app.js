var navItems = $('nav').find('a');
var selectedItem = $(navItems.get(0));

navItems.click(function (e) {
  e.preventDefault();

  selectedItem.toggleClass('selected');
  selectedItem = $(this);
  selectedItem.toggleClass('selected');
});
