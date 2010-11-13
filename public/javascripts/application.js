$(function() {
  $.getJSON('/contacts', function(res) {
    $('#contact_show').tmpl(res.contacts).appendTo('#contacts');
  });

  $('.tools a').live('click', function(e) {
    var handler = $(this).data('handler');
    var $member = $(this).parents('.member')
    $member.trigger(handler);
    e.preventDefault();
  });

  $('.collection').live('edit', function(e) {
    var $member = $(e.target);
    var contact_attr = $member.tmplItem().data;
    $member.swap($('#contact_edit').tmpl(contact_attr));
    //swap
  });

  $('.collection').live('cancel', function(e) {
    $(e.target).unswap();
  });

  $.fn.util = {};
  $.fun.util.swap = function() {};
  $.fun.util.unswap = function() {};
});
