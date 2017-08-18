jQuery(window).scroll(function(){
  var fromTopPx = 200; // distance to trigger
  var scrolledFromtop = jQuery(window).scrollTop();
  if (scrolledFromtop > fromTopPx){
      jQuery('#up').addClass('scrolled');
  } else {
      jQuery('#up').removeClass('scrolled');
  }
});
jQuery('#up').on('click',function(){
  jQuery('html, body').animate({ scrollTop: 0 }, 600);
  return false;
});



$(document).ready(function() {
  const indexesOfElements = [1, 2, 3]
  indexesOfElements.forEach((el) => {
    $(`#link${el}`).click((e) => {

      indexesOfElements.forEach((el) => {
        $(`#content${el}`).removeClass('active')
      })
      const selectedId = e.target.id
      const index = +selectedId.charAt(selectedId.length - 1)
      $(`#content${index}`).addClass('active')
      e.preventDefault();
    })
  })
    //E-mail Ajax Send
  $('#form').submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: 'POST',
        url: 'mail.php', //Change
        data: th.serialize()
    }).done(function() {
        alert('Спасибо, скоро мы с вами свяжемся!');
        setTimeout(function() {
            // Done Functions
            th.trigger('reset');
        }, 1000);
    });
    return false;
  });

  $('#go').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(400,
      function(){
        $('#modal_form')
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
    });
  });

  $('#modal_close, #overlay').click( function(){
    $('#modal_form')
      .animate({opacity: 0, top: '45%'}, 200,
        function(){
          $(this).css('display', 'none');
          $('#overlay').fadeOut(400);
        }
      );
  });
});
