console.log('masuk');

$(document).ready(function() {
  // search
  $('.search-header .btn-search').click(function(){
    $('.search-header .input-search').addClass('active');
    $('.search-header .input-search').focus();;
  });

  $('.search-header .input-search').focusout(function(){
    $('.search-header .input-search').removeClass('active');
    $('.search-header .input-search').val('');
  });
  
  // carousel
  $('.carousel .btn-prev img').click(function() {
    console.log('masuk prev');
    // Logic to go to the previous carousel item
    var currentSlide = $('.carousel-item.active');
    var prevSlide = currentSlide.prev('.carousel-item');

    if (prevSlide.length === 0) {
      prevSlide = $('.carousel-item').last();
    }

    currentSlide.removeClass('active');
    prevSlide.addClass('active');
  });

  $('.carousel .btn-next').click(function() {
    console.log('masuk next');
    // Logic to go to the next carousel item
    var currentSlide = $('.carousel-item.active');
    var nextSlide = currentSlide.next('.carousel-item');

    if (nextSlide.length === 0) {
      nextSlide = $('.carousel-item').first();
    }

    currentSlide.removeClass('active');
    nextSlide.addClass('active');
  });

  // carousel auto change
  setInterval(function() {
    var currentSlide = $('.carousel-item.active');
    var nextSlide = currentSlide.next('.carousel-item');

    if (nextSlide.length === 0) {
      nextSlide = $('.carousel-item').first();
    }

    currentSlide.removeClass('active');
    nextSlide.addClass('active');
  }, 5000);
  
  // partnership tab
  $('.partnership-tab-item').click(function(){
    $('.partnership-tab-item').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('data-tab');
    $('.partnership-content').removeClass('active');
    $('.'+tab).addClass('active');
  });
});
