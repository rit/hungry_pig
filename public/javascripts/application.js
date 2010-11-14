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
    $member.replaceWith($('#contact_edit').tmpl(contact_attr));
    //swap
  });

  $('.collection').live('cancel', function(e) {
    $(e.target).unswap();
  });

  // $.fn.util = {};
  // $.fn.util.swap = function() {};
  // $.fn.util.unswap = function() {};
});
