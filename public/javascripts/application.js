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
  });

  $('.collection').live('cancel', function(e) {
    $(e.target).unswap();
  });

  $.fn.swap = function(html) {
    this.data('_swap', this.html());
    this.html(html);
    return this;
  };

  $.fn.unswap = function() {
    this.html(this.data('_swap'));
    return this;
  };
});
