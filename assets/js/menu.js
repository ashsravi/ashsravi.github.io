(function (window, document) {
  var menu = document.getElementById('menu'),
      button = document.getElementById('toggle'),
      WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

  var transparent = true,
      open = menu.classList.contains('open');

  function toggleMenu() {
    open = !open;
    menu.classList.toggle('open');
    button.classList.toggle('x');
  };

  function closeMenu() {
    if (open) {
      toggleMenu();
    }
  }

  function showColor() {
    if (transparent) {
      window.requestAnimationFrame(function() {
        menu.classList.remove('transparent');
        transparent = false;
      });
    }
  }

  function clickHandler(e) {
    toggleMenu();
    showColor();
    e.stopPropagation();
  }

  button.addEventListener('click', clickHandler);

  [].forEach.call(
    document.querySelectorAll('.pure-menu-link'),
    function (e) {
      e.addEventListener('click', clickHandler);
    }
  );

  window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);

  window.addEventListener('scroll', function(e) {
    var scrollY = window.scrollY;
    if (scrollY === 0) {
      if (!transparent) {
        window.requestAnimationFrame(function() {
          menu.classList.add('transparent');
          transparent = true;
        });
      }
    } else {
      showColor();
    }
  });

})(this, this.document);
