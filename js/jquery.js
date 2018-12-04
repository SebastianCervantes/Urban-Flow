$(function() {
  var buttonpressed;
  $('body button').bind('click', function() {
    buttonpressed = $(this).attr('id');
    if(buttonpressed=='equipos'){
      //alert('Soy un click feliz de nombre '+buttonpressed);
        $('.box').fadeOut(900,function() {
          $('.box > img').attr('src', 'Images/Votos/equipo1.png');
        }).fadeIn();
    } else if (buttonpressed=='individuales') {
      $('.box').fadeOut(900, function() {
        $('.box > img').attr('src', 'Images/Votos/individuales1.png');
      }).fadeIn();
    } else if(buttonpressed=='parejas') {
      $('.box').fadeOut(900, function() {
        $('.box > img').attr('src', 'Images/Votos/parejas1.png');
      }).fadeIn();
    } else if (buttonpressed== 'close') {
      $('.voto-overlay').fadeOut();
    }
 });
});
