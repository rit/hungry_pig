$(function() {
  $.getJSON('/contacts', function(res) {
    $('#contact_show').tmpl(res.contacts).appendTo('#contacts');
  });
});
