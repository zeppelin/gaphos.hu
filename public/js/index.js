$(function() {
  $('.photo-grid').photoswipe({
      bgOpacity: 0.9,
      loop: false,
      shareEl: false
  });

  $('.photo-grid').flexImages();
});
