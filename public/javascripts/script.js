$(document).ready(function(){

  $('.click-to-send').click(function(){
    $.get('/email');
  });

});
