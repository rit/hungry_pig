$(function() {
  $.getJSON('/contacts', function(res) {
    $('#contact_show').tmpl(res.contacts).appendTo('#contacts');
  });

  $('.tools a, #adding_contact a').live('click', function(e) {
    var handler = $(this).data('handler');
    $(this).trigger(handler);
    e.preventDefault();
  });

  $('.collection').live('edit', function(e) {
    var $member = $(e.target).parents('.member');
    var contact_attr = $member.tmplItem().data;
    $member.swap($('#contact_edit').tmpl(contact_attr));
  });

  $('.collection').live('cancel', function(e) {
    $(e.target).parents('.member').unswap();
  });

  $('.collection').live('submit', function(e) {
    var $form = $(e.target);
    $form.ajaxSubmit({
      success: function(res) {
        $form.parents('.member')
          .replaceWith($('#contact_show').tmpl(res.contact));
      }
    });
    e.preventDefault();
  });

  $('#adding_contact').live('new', function() {
    $(this).swap($('#contact_new').tmpl());
  });

  $('#adding_contact').live('cancel', function() {
    $(this).unswap();
  });

  $('#adding_contact').live('submit', function(e) {
    e.preventDefault();
    var $that = $(this);
    var $form = $(e.target);
    $form.ajaxSubmit({
      success: function(res) {
        $that.unswap();
        $('#contact_show').tmpl(res.contact).appendTo('#contacts');
      }
    });
  });

  $('.collection').live('destroy', function(e) {
    var href = $(e.target).attr('href');
    $.ajax({
      url: href,
      type: 'POST',
      data: {_method: 'DELETE'},
      success: function() {
        $(e.target).parents('.member').fadeAway();
      }
    });
    e.preventDefault();
  });

  $.fn.fadeAway = function() {
    this.fadeOut(function() {$(this).remove()});
    return this;
  };

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
