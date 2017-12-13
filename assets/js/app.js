$(document).ready(function() {
  $('.modal').modal();
  $('.btn').click(function(){
    var name = $('#icon_prefix').val();
    var phone = $('#icon_telephone').val();
    $('#contact').append(name + phone);
    
  })
});
