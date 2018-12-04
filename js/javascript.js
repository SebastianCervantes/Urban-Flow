

$('.botoncilloscul').one('click', function(){
  $('#cajablanca').slideToggle(300);
  $('.stemen').animate({height : 1200});
  $('.botoncilloscul').bind('click', function (){
    $('#cajablanca').slideToggle(300);
    $('#cajablanca').slideToggle(300);
  });

  $('.que-equipo').hide();
    $('.que-equipo').show();
});

$('#slidea').bind('click',function(){
    $('#formaa').show(1400);
    $('#formab').hide();
    $('#formac').hide();
    $('#fantasma').hide();
    $('#env').show();
});


$('#slideb').bind('click',function(){
  $('#formab').show(1400);
  $('#formaa').hide();
  $('#formac').hide();
  $('#fantasma').hide();
  $('#env').show();
});

$('#slidec').bind('click',function(){
  $('#formac').show(1400);
  $('#formab').hide();
  $('#formaa').hide();
  $('#fantasma').hide();
  $('#env').show();
});

$(window).bind('load', function(){
  $('#cajablanca').hide();
  $('#fantasma').hide();
});

$('#env').bind('click',function(){
  $(this).hide();
  $('#cajablanca div').show();
  $('#cajablanca form').hide(500);
})

