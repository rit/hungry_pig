$(function() {
  $.getJSON('/contacts', function(res) {
    $('#contact_show').tmpl(res.data).appendTo('#contacts');
  });
});
