var navItems = $('.nav-items').children();
var selectedItem = null;

function selectNavItem() {
  var dashboardItem = $(navItems[0]);
  var commentsItem = $(navItems[3]);

  addHighlight(dashboardItem);
  selectedItem = dashboardItem;
}

function addHighlight(navItem) {
  var navItemImage = $(navItem.children());

  navItem.addClass('selected');
  navItemImage.addClass('selected');
}

function removeHighlight(navItem) {
  var navItemImage = $(navItem.children());

  navItem.removeClass('selected');
  navItemImage.removeClass('selected');
}

navItems.on('click',  function (evt) {
  removeHighlight(selectedItem);
  selectedItem = $(this);
  addHighlight(selectedItem);
});

navItems.on('mouseenter', function (evt) {
  if (this !== selectedItem.get(0)) {
    addHighlight($(this));
  }
});

navItems.on('mouseleave', function (evt) {
  if (this !== selectedItem.get(0)) {
    removeHighlight($(this));
  }
});

selectNavItem();
