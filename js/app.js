$(document).ready(function() {
  // Init Sidenav
  $('.button-collapse').sideNav();
  //scroll fire
  const options = [
    {
      selector: '.main-text',
      offset: 0,
      callback: function(el) {
        Materialize.fadeInImage($(el));
      }
    },
    {
      selector: '.navbar-fixed',
      offset: 1000,
      callback: function() {
        $('nav').removeClass('transparent');
        $('nav').addClass('blue-grey darken-3');
      }
    }
  ];
  Materialize.scrollFire(options);

  $('.carousel-slider').carousel(
    { fullWidth: true, padding: 0 },
    setTimeout(autoplay, 4500)
  );
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 7500);
  }
  $('.carousel').carousel({
    dist: 0,
    shift: 0,
    padding: 20
  });
});
