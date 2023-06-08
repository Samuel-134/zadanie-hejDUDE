$(document).ready(function(){

  $('#toForm').on('click', function(){
    $('html, body').animate({ scrollTop: $(".form-section").offset().top }, 300);
  });

  $('.form').on('submit', function(){
    alert('Formular bol úspešne odoslaný!');
  });

});