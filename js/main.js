Site = {}

$(document).ready(function(){
  Site.document_height = $(document).height() - $(window).height();
  $(document).on('scroll', scrollImages);

  $(window).on("load", function() {
    Site.image_height = $('.images').height() - $(window).height();
  })
})

scrollImages = function(){
  scroll_pos = $(document).scrollTop();
  proportion = scroll_pos/Site.document_height;

  $('.images').css('transform', 'translateY(-' + proportion * Site.image_height + 'px)');
}